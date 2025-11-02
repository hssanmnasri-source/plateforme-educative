// 📁 backend/server.js
// ========================================

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';
import admin from 'firebase-admin';
import { readFileSync } from 'fs';

dotenv.config();

// Initialize Firebase Admin
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT || 
  readFileSync('./education-platform-backend-firebase-adminsdk-fbsvc-055e9861b5.json', 'utf8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ========================================
// Fonction de vérification de signature Paymee
// ========================================
function verifyPaymeeChecksum(token, paymentStatus, apiToken) {
  const status = paymentStatus ? '1' : '0';
  const expectedChecksum = crypto
    .createHash('md5')
    .update(token + status + apiToken)
    .digest('hex');
  
  return expectedChecksum;
}

// ========================================
// WEBHOOK PAYMEE
// ========================================
app.post('/paymee-webhook', async (req, res) => {
  try {
    console.log('📥 Webhook Paymee reçu:', JSON.stringify(req.body, null, 2));

    const {
      token,
      check_sum,
      payment_status,
      order_id,
      transaction_id,
      amount,
      received_amount,
      cost
    } = req.body;

    // Vérifier la signature
    const expectedChecksum = verifyPaymeeChecksum(
      token,
      payment_status,
      process.env.PAYMEE_API_TOKEN
    );

    if (check_sum !== expectedChecksum) {
      console.error('❌ Signature invalide');
      console.log('Expected:', expectedChecksum);
      console.log('Received:', check_sum);
      return res.status(401).json({ error: 'Invalid signature' });
    }

    console.log('✅ Signature valide');

    // Récupérer le paiement depuis Firestore
    const paymentRef = db.collection('payments').doc(order_id);
    const paymentDoc = await paymentRef.get();

    if (!paymentDoc.exists) {
      console.error('❌ Paiement introuvable:', order_id);
      return res.status(404).json({ error: 'Payment not found' });
    }

    const paymentData = paymentDoc.data();
    console.log('📄 Paiement trouvé:', paymentData);

    if (payment_status === true) {
      console.log('💰 Paiement réussi - Mise à jour...');

      // 1. Mettre à jour le paiement
      await paymentRef.update({
        status: 'completed',
        paymeeTransactionId: transaction_id,
        receivedAmount: received_amount,
        cost: cost,
        completedAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });

      // 2. Ajouter le cours à l'utilisateur
      const userRef = db.collection('users').doc(paymentData.userId);
      await userRef.update({
        purchasedCourses: admin.firestore.FieldValue.arrayUnion(paymentData.courseId)
      });

      // 3. Incrémenter le compteur d'inscriptions du cours
      const courseRef = db.collection('courses').doc(paymentData.courseId);
      await courseRef.update({
        enrolledCount: admin.firestore.FieldValue.increment(1)
      });

      console.log('✅ Paiement traité avec succès');
      console.log(`   - Transaction ID: ${transaction_id}`);
      console.log(`   - Montant: ${received_amount} TND`);
      console.log(`   - Frais: ${cost} TND`);

    } else {
      console.log('❌ Paiement échoué');

      // Mettre à jour le statut à "failed"
      await paymentRef.update({
        status: 'failed',
        completedAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
    }

    res.json({ success: true, message: 'Webhook processed' });

  } catch (error) {
    console.error('💥 Erreur webhook:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

// ========================================
// Root route
// ========================================
app.get('/', (req, res) => {
  res.json({
    message: 'Education Platform Backend API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/health',
      webhook: '/paymee-webhook',
      testWebhook: '/test-webhook'
    }
  });
});

// ========================================
// Route de test (vérifier que le serveur fonctionne)
// ========================================
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Paymee Webhook Server'
  });
});

// ========================================
// Route de test du webhook (pour debug)
// ========================================
app.post('/test-webhook', async (req, res) => {
  try {
    const testData = {
      token: 'test_token_123',
      check_sum: 'test_checksum',
      payment_status: true,
      order_id: req.body.order_id || 'test_order_123',
      transaction_id: 'TEST_' + Date.now(),
      amount: 50.0,
      received_amount: 48.5,
      cost: 1.5
    };

    console.log('🧪 Test webhook:', testData);
    res.json({ success: true, testData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========================================
// Démarrage du serveur
// ========================================
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   🚀 Webhook Server Started           ║
║   📡 Port: ${PORT}                        ║
║   🌍 Environment: ${process.env.NODE_ENV || 'development'}          ║
║   ✅ Ready to receive webhooks         ║
╚════════════════════════════════════════╝
  `);
});

export default app;
