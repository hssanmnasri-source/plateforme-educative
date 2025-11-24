// 📁 backend/server.js
// ========================================

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';
import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import notificationService from './src/services/notification.service.js';
import { sendEmail } from './emailService.js';
import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';


dotenv.config();


// 1. Set the API Key
// This line configures the SDK to use the API key stored in your Render environment.
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Initialize Firebase Admin
let serviceAccount;
let serviceAccountSource = 'unknown';
try {
  // Prefer a complete JSON string in FIREBASE_SERVICE_ACCOUNT
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    try {
      serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      serviceAccountSource = 'environment variable';
      console.log('✅ Firebase Service Account loaded from environment variable');
      console.log('   Project ID:', serviceAccount.project_id);
      console.log('   Client Email:', serviceAccount.client_email);
    } catch (parseError) {
      console.error('❌ Failed to parse FIREBASE_SERVICE_ACCOUNT from environment variable:', parseError.message);
      throw new Error('FIREBASE_SERVICE_ACCOUNT environment variable is not valid JSON: ' + parseError.message);
    }
  } else if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
    // If a path is explicitly provided (outside repo), allow reading from it
    try {
      const path = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
      serviceAccount = JSON.parse(readFileSync(path, 'utf8'));
      serviceAccountSource = `file (${path})`;
      console.log('✅ Firebase Service Account loaded from path specified in FIREBASE_SERVICE_ACCOUNT_PATH');
      console.log('   Project ID:', serviceAccount.project_id);
      console.log('   Client Email:', serviceAccount.client_email);
    } catch (fileError) {
      console.error('❌ Failed to load Firebase Service Account from path in FIREBASE_SERVICE_ACCOUNT_PATH:', fileError.message);
      throw new Error('Failed to read service account from FIREBASE_SERVICE_ACCOUNT_PATH: ' + fileError.message);
    }
  } else {
    // Don't read service-account files from the repository by default (sensitive)
    throw new Error('No Firebase service account configured. Set FIREBASE_SERVICE_ACCOUNT (JSON) or FIREBASE_SERVICE_ACCOUNT_PATH (secure file path).');
  }

  // Validate required fields
  if (!serviceAccount.project_id) {
    throw new Error('Service account missing project_id');
  }
  if (!serviceAccount.client_email) {
    throw new Error('Service account missing client_email');
  }
  if (!serviceAccount.private_key) {
    throw new Error('Service account missing private_key');
  }

} catch (error) {
  console.error('❌ Failed to load Firebase Service Account:', error.message);
  throw error;
}

try {
  // Verify service account structure before initializing
  if (!serviceAccount.project_id || !serviceAccount.client_email || !serviceAccount.private_key) {
    throw new Error('Service account missing required fields: project_id, client_email, or private_key');
  }
  
  // Check if private key looks valid (basic checks only)
  if (!serviceAccount.private_key.includes('BEGIN PRIVATE KEY') || !serviceAccount.private_key.includes('END PRIVATE KEY')) {
    throw new Error('Private key format appears invalid - missing BEGIN/END markers');
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log('✅ Firebase Admin initialized successfully');
  console.log('   Project:', serviceAccount.project_id);
  console.log('   Client Email:', serviceAccount.client_email);
  
} catch (error) {
  console.error('❌ Failed to initialize/verify Firebase Admin:', error.message);
  console.error('   Error code:', error.code);
  console.error('   Service Account Source:', serviceAccountSource);
  if (serviceAccount) {
    console.error('   Has project_id:', !!serviceAccount.project_id);
    console.error('   Has client_email:', !!serviceAccount.client_email);
    console.error('   Has private_key:', !!serviceAccount.private_key);
  }

  // Don't throw during initialization - let the app start and show errors in health check
  console.error('⚠️ Continuing with limited functionality - Firebase operations will fail');
}

let db;
try {
  db = admin.firestore();
  console.log('✅ Firestore instance created');
} catch (error) {
  console.error('❌ Failed to get Firestore instance:', error.message);
  db = null;
}

// Test Firebase connection on startup (only if db is available)
if (db) {
  (async () => {
    try {
      console.log('🔍 Testing Firebase connection...');
      // Try a simple read to verify connection and authentication
      const testRef = db.collection('_health').doc('test');
      await testRef.get();
      console.log('✅ Firebase connection and authentication verified');
    } catch (error) {
      console.error('❌ Firebase connection test failed:', error.message);
      console.error('   Error code:', error.code);
      console.error('   Error details:', error.details);
      if (error.code === 16 || error.message.includes('UNAUTHENTICATED')) {
        console.error('   ⚠️ Authentication failed - check service account key validity and permissions');
        console.error('   ⚠️ Service account email:', serviceAccount?.client_email);
        console.error('   ⚠️ Make sure the service account has "Firebase Admin SDK Administrator Service Agent" role');
      }
      console.error('   This may cause issues with database operations');
    }
  })();
} else {
  console.error('❌ Firestore not available - database operations will fail');
}

const app = express();

// Middleware
app.use(cors({
  origin: '*', // Autoriser toutes les origines (nécessaire pour les webhooks Paymee)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
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
function normalizePaymeeStatus(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value === 1;
  if (!value) return false;
  const s = String(value).trim().toLowerCase();
  const truthy = new Set(['1', 'true', 'yes', 'paid', 'success', 'ok', 'completed']);
  return truthy.has(s);
}

function verifyPaymeeChecksum(token, paymentStatus, apiToken) {
  const status = normalizePaymeeStatus(paymentStatus) ? '1' : '0';
  const expectedChecksum = crypto
    .createHash('md5')
    .update(token + status + apiToken)
    .digest('hex');

  return expectedChecksum;
}

// ========================================
// WEBHOOK PAYMEE
// ========================================
// Route GET pour tester que l'endpoint est accessible
app.get('/paymee-webhook', (req, res) => {
  res.json({
    message: 'Paymee Webhook endpoint is active',
    method: 'Use POST to receive webhooks from Paymee',
    endpoint: '/paymee-webhook',
    note: 'This endpoint accepts POST requests with payment status updates'
  });
});

// Route OPTIONS pour CORS preflight
app.options('/paymee-webhook', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

app.post('/paymee-webhook', async (req, res) => {
  // Répondre immédiatement à Paymee pour éviter les timeouts (502 Bad Gateway)
  res.status(200).json({ received: true, message: 'Webhook received' });
  
  // Traiter le webhook de manière asynchrone (sans bloquer la réponse)
  (async () => {
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
        return; // Ne pas envoyer de réponse, déjà envoyée
      }

      console.log('✅ Signature valide');

      // Récupérer le paiement depuis Firestore
      const paymentRef = db.collection('payments').doc(order_id);
      const paymentDoc = await paymentRef.get();

      if (!paymentDoc.exists) {
        console.error('❌ Paiement introuvable:', order_id);
        return; // Ne pas envoyer de réponse, déjà envoyée
      }

      const paymentData = paymentDoc.data();
      console.log('📄 Paiement trouvé:', paymentData);

      // Normalize incoming payment_status and, if ambiguous, verify with Paymee using stored token
      let finalStatusTruthy = normalizePaymeeStatus(payment_status);

      if (!finalStatusTruthy && paymentData.paymeeToken) {
        try {
          console.log('🔍 payment_status non concluante, vérification auprès de Paymee via token...');
          const paymeeApiUrl = process.env.PAYMEE_API_URL || 'https://sandbox.paymee.tn/api/v2';
          const paymeeToken = process.env.PAYMEE_SECRET_KEY;
          const checkRes = await fetch(`${paymeeApiUrl}/payments/check`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${paymeeToken}`
            },
            body: JSON.stringify({ token: paymentData.paymeeToken })
          });

          if (checkRes.ok) {
            const checkData = await checkRes.json();
            console.log('📊 Paymee check response:', checkData);
            const paymeeRemoteStatus = checkData?.data?.status;
            if (paymeeRemoteStatus) {
              finalStatusTruthy = normalizePaymeeStatus(paymeeRemoteStatus);
              console.log('🔎 Statut Paymee distant normalisé:', paymeeRemoteStatus, '->', finalStatusTruthy);
            }
          } else {
            console.warn('⚠️ Vérification Paymee échouée:', checkRes.status, checkRes.statusText);
          }
        } catch (err) {
          console.warn('⚠️ Erreur lors de la vérification Paymee (non bloquant):', err.message);
        }
      }

      if (finalStatusTruthy) {
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

        await notificationService.sendToUser(paymentData.userId, {
          title: '🎉 Paiement confirmé !',
          body: `Vous avez maintenant accès à votre cours.`,
          icon: '/logo.png',
          data: {
            type: 'payment_success',
            courseId: paymentData.courseId,
            paymentId: order_id
          }
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

      console.log('✅ Webhook traité avec succès');

    } catch (error) {
      console.error('💥 Erreur webhook:', error);
      console.error('Stack trace:', error.stack);
    }
  })();
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
app.get('/health', async (req, res) => {
  try {
    // Test Firebase connection
    const testRef = db.collection('_health').doc('test');
    await testRef.get();
    
    res.json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      service: 'Paymee Webhook Server',
      firebase: 'connected',
      source: serviceAccountSource
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      timestamp: new Date().toISOString(),
      service: 'Paymee Webhook Server',
      firebase: 'disconnected',
      error: error.message,
      source: serviceAccountSource,
      hasEnvVar: !!process.env.FIREBASE_SERVICE_ACCOUNT,
      envVarLength: process.env.FIREBASE_SERVICE_ACCOUNT?.length || 0
    });
  }
});

// Diagnostic endpoint to check Firebase config (without sensitive data)
app.get('/diagnostics', (req, res) => {
  const envVar = process.env.FIREBASE_SERVICE_ACCOUNT || '';
  let parseError = null;
  let parsedData = null;
  
  if (envVar) {
    try {
      parsedData = JSON.parse(envVar);
    } catch (e) {
      parseError = e.message;
    }
  }
  
  res.json({
    hasFirebaseEnvVar: !!process.env.FIREBASE_SERVICE_ACCOUNT,
    envVarLength: envVar.length,
    envVarFirstChars: envVar.substring(0, 100),
    envVarLastChars: envVar.substring(envVar.length - 50),
    parseError: parseError,
    source: serviceAccountSource,
    projectId: serviceAccount?.project_id || parsedData?.project_id || 'unknown',
    clientEmail: serviceAccount?.client_email || parsedData?.client_email || 'unknown',
    hasPrivateKey: !!(serviceAccount?.private_key || parsedData?.private_key),
    privateKeyStarts: serviceAccount?.private_key?.substring(0, 30) || parsedData?.private_key?.substring(0, 30) || 'none',
    hasAllRequiredFields: !!(serviceAccount?.project_id && serviceAccount?.client_email && serviceAccount?.private_key)
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

app.post('/test-notification', async (req, res) => {
  try {
    const { userId, title, body } = req.body;
    const result = await notificationService.sendToUser(userId, {
      title: title || 'Notification de test',
      body: body || 'Ceci est un test depuis le backend'
    });
    res.json({ success: true, result });
  } catch (error) {
    console.error('Erreur test notification:', error);
    res.status(500).json({ error: error.message });
  }
});

// ========================================
// Route pour synchroniser un paiement (appelée depuis le frontend si webhook manqué)
// ========================================
// Route OPTIONS pour CORS preflight
app.options('/sync-payment', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

app.post('/sync-payment', async (req, res) => {
  try {
    // Vérifier que Firebase est initialisé
    if (!db) {
      console.error('❌ Firebase Firestore non initialisé');
      return res.status(500).json({ error: 'Database not initialized' });
    }

    const { paymentId } = req.body;

    if (!paymentId) {
      return res.status(400).json({ error: 'paymentId requis' });
    }

    console.log('🔄 Synchronisation du paiement:', paymentId);

    const paymentRef = db.collection('payments').doc(paymentId);
    const paymentDoc = await paymentRef.get();

    if (!paymentDoc.exists) {
      console.error('❌ Paiement introuvable:', paymentId);
      return res.status(404).json({ error: 'Paiement introuvable' });
    }

    const paymentData = paymentDoc.data();
    console.log('📄 Données du paiement:', { 
      status: paymentData.status, 
      userId: paymentData.userId, 
      courseId: paymentData.courseId 
    });

    // Vérifier que les données nécessaires sont présentes
    if (!paymentData.userId) {
      console.error('❌ userId manquant dans les données du paiement');
      return res.status(400).json({ error: 'Données de paiement incomplètes: userId manquant' });
    }

    if (!paymentData.courseId) {
      console.error('❌ courseId manquant dans les données du paiement');
      return res.status(400).json({ error: 'Données de paiement incomplètes: courseId manquant' });
    }

    // Si déjà complété, ne rien faire
    if (paymentData.status === 'completed') {
      console.log('✅ Paiement déjà complété');
      return res.json({ success: true, message: 'Paiement déjà complété' });
    }

    // Vérifier avec Paymee si le paiement a un token
    let paymeeStatus = null;
    if (paymentData.paymeeToken) {
      try {
        console.log('🔍 Vérification du statut avec Paymee...');
        const paymeeApiUrl = process.env.PAYMEE_API_URL || 'https://sandbox.paymee.tn/api/v2';
        const paymeeToken = process.env.PAYMEE_SECRET_KEY;
        
        const paymeeResponse = await fetch(`${paymeeApiUrl}/payments/check`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${paymeeToken}`
          },
          body: JSON.stringify({ token: paymentData.paymeeToken })
        });

        if (paymeeResponse.ok) {
          const paymeeData = await paymeeResponse.json();
          console.log('📊 Statut Paymee:', paymeeData);
          
          if (paymeeData.status && paymeeData.data) {
            paymeeStatus = paymeeData.data.status;
            console.log('✅ Statut Paymee récupéré:', paymeeStatus);
            
            // Si Paymee dit que le paiement a échoué, ne pas le marquer comme complété
            if (paymeeStatus === 'failed' || paymeeStatus === 'cancelled') {
              console.log('❌ Paymee indique que le paiement a échoué');
              await paymentRef.update({
                status: 'failed',
                updatedAt: admin.firestore.FieldValue.serverTimestamp(),
                synced: true
              });
              return res.json({ 
                success: false, 
                message: 'Le paiement a échoué selon Paymee',
                paymeeStatus 
              });
            }
            
            // Si Paymee dit que c'est en attente, ne pas le marquer comme complété
            if (paymeeStatus === 'pending') {
              console.log('⏳ Paymee indique que le paiement est en attente');
              return res.json({ 
                success: false, 
                message: 'Le paiement est toujours en attente',
                paymeeStatus 
              });
            }
          }
        } else {
          console.warn('⚠️ Impossible de vérifier avec Paymee:', paymeeResponse.status);
        }
      } catch (paymeeError) {
        console.warn('⚠️ Erreur lors de la vérification Paymee (non bloquant):', paymeeError.message);
        // Continuer quand même si on ne peut pas vérifier avec Paymee
      }
    }

    // Si le statut actuel est "failed" mais qu'on n'a pas pu vérifier avec Paymee,
    // on peut quand même essayer de le marquer comme complété (cas où le webhook a manqué)
    if (paymentData.status === 'failed' && !paymeeStatus) {
      console.log('⚠️ Paiement marqué comme "failed" mais pas de vérification Paymee possible - marquage comme complété');
    }

    console.log('📝 Mise à jour du statut du paiement...');
    // Mettre à jour le paiement
    await paymentRef.update({
      status: 'completed',
      completedAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      synced: true, // Marquer comme synchronisé manuellement
      paymeeStatus: paymeeStatus || 'verified_manually'
    });

    console.log('👤 Ajout du cours à l\'utilisateur...');
    // Ajouter le cours à l'utilisateur
    const userRef = db.collection('users').doc(paymentData.userId);
    await userRef.update({
      purchasedCourses: admin.firestore.FieldValue.arrayUnion(paymentData.courseId)
    });

    console.log('📚 Incrémentation du compteur d\'inscriptions...');
    // Incrémenter le compteur d'inscriptions
    const courseRef = db.collection('courses').doc(paymentData.courseId);
    await courseRef.update({
      enrolledCount: admin.firestore.FieldValue.increment(1)
    });

    console.log('🔔 Envoi de la notification...');
    // Envoyer notification (ne pas bloquer si ça échoue)
    try {
      await notificationService.sendToUser(paymentData.userId, {
        title: '🎉 Paiement confirmé !',
        body: `Vous avez maintenant accès à votre cours.`,
        icon: '/logo.png',
        data: {
          type: 'payment_success',
          courseId: paymentData.courseId,
          paymentId: paymentId
        }
      });
      console.log('✅ Notification envoyée');
    } catch (notifError) {
      console.warn('⚠️ Erreur lors de l\'envoi de la notification (non bloquant):', notifError.message);
      // Ne pas bloquer le processus si la notification échoue
    }

    console.log('✅ Paiement synchronisé avec succès');

    let recipientEmail = 'unknown@example.com';
    let courseTitle = 'votre cours';
    
    try {
      // 1. Récupérer l'email de l'utilisateur
      const userSnapshot = await db.collection('users').doc(paymentData.userId).get();
      if (userSnapshot.exists && userSnapshot.data()?.email) {
        recipientEmail = userSnapshot.data().email;
        console.log(`📧 Email utilisateur trouvé: ${recipientEmail}`);
      } else {
        console.warn(`⚠️ Email manquant ou utilisateur introuvable pour userId: ${paymentData.userId}`);
        // Optionnel: Si l'email est absolument requis, vous pourriez ici décider de NE PAS envoyer l'email.
      }

      // 2. Récupérer le titre du cours
      const courseSnapshot = await db.collection('courses').doc(paymentData.courseId).get();
      if (courseSnapshot.exists && courseSnapshot.data()?.title) {
        courseTitle = courseSnapshot.data().title;
        console.log(`📚 Titre du cours trouvé: ${courseTitle}`);
      } else {
        console.warn(`⚠️ Titre manquant ou cours introuvable pour courseId: ${paymentData.courseId}`);
      }
    } catch (dataFetchError) {
      console.error('❌ Erreur lors de la récupération des données pour l\'email:', dataFetchError.message);
      // Continuer avec les valeurs par défaut
    }

//  const mailOptions = {
//         from: 'hssan.mnasri@gmail.com', // Sender address
//         to: 'hssan.mnasri@gmail.com', // List of receivers
//         subject: 'Test Email from Express & Nodemailer', // Subject line
//         text: 'Hello world! This is a test email sent from an Express server using Nodemailer.', // Plain text body
//         html: '<b>Hello world!</b><p>This is a test email sent from an Express server using Nodemailer.</p>', // HTML body
//     };
//     sendEmail(mailOptions.to, mailOptions.subject, mailOptions.html)

    const emailSubject = `🎉 Paiement confirmé pour le cours: ${courseTitle}`;
    const emailBody = `
        <h1>Bonjour,</h1>
        <p>Félicitations ! Votre paiement a été confirmé avec succès.</p>
        <p>Vous avez maintenant accès au cours <strong>${courseTitle}</strong>.</p>
        <p>Cliquez ici pour commencer : <a href="[Your App Link]">Accéder à mon cours</a></p>
        <p>Référence du paiement: ${paymentId}</p>
        <p>L'équipe My Company.</p>
    `;

    // 3. Envoyer l'email
    try {
      // Assurez-vous que l'email est différent de la valeur par défaut 'unknown@example.com' avant d'envoyer
      if (recipientEmail !== 'unknown@example.com') {
        await sendEmail(recipientEmail, emailSubject, emailBody); 
        console.log('✅ Email de confirmation envoyé');
      } else {
        console.warn('⚠️ Email non envoyé car l\'adresse du destinataire est manquante ou inconnue.');
      }
    } catch (emailError) {
      console.warn('⚠️ Erreur lors de l\'envoi de l\'email (non bloquant):', emailError.message);
    }
    // ========================================

    res.json({ 
      success: true, 
      message: 'Paiement synchronisé',
      paymentId 
    });
  } catch (error) {
    console.error('💥 Erreur synchronisation:', error);
    console.error('   Message:', error.message);
    console.error('   Stack:', error.stack);
    res.status(500).json({ 
      error: error.message || 'Erreur lors de la synchronisation',
      type: error.name || 'UnknownError'
    });
  }
});

// ========================================
// Route pour marquer manuellement un paiement comme complété (pour tests)
// ========================================
app.post('/complete-payment', async (req, res) => {
  try {
    const { paymentId } = req.body;

    if (!paymentId) {
      return res.status(400).json({ error: 'paymentId requis' });
    }

    console.log('🔄 Marquage manuel du paiement comme complété:', paymentId);

    const paymentRef = db.collection('payments').doc(paymentId);
    const paymentDoc = await paymentRef.get();

    if (!paymentDoc.exists) {
      return res.status(404).json({ error: 'Paiement introuvable' });
    }

    const paymentData = paymentDoc.data();

    // Mettre à jour le paiement
    await paymentRef.update({
      status: 'completed',
      completedAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      manualCompletion: true // Marquer comme complété manuellement
    });

    // Ajouter le cours à l'utilisateur
    const userRef = db.collection('users').doc(paymentData.userId);
    await userRef.update({
      purchasedCourses: admin.firestore.FieldValue.arrayUnion(paymentData.courseId)
    });

    // Incrémenter le compteur d'inscriptions
    const courseRef = db.collection('courses').doc(paymentData.courseId);
    await courseRef.update({
      enrolledCount: admin.firestore.FieldValue.increment(1)
    });

    // Envoyer notification
    const userSnapshot = await userRef.get();
    const userData = userSnapshot.exists ? userSnapshot.data() : {};
    
    await notificationService.sendToUser(paymentData.userId, {
      title: '🎉 Paiement confirmé !',
      body: `Vous avez maintenant accès à votre cours.`,
      icon: '/logo.png',
      data: {
        type: 'payment_success',
        courseId: paymentData.courseId,
        paymentId: paymentId
      }
    });

    console.log('✅ Paiement marqué comme complété manuellement');

    res.json({ 
      success: true, 
      message: 'Paiement marqué comme complété',
      paymentId 
    });
  } catch (error) {
    console.error('💥 Erreur completion manuelle:', error);
    res.status(500).json({ error: error.message });
  }
});



app.get('/send-email', (req, res) => {
    const mailOptions = {
        from: 'hssan.mnasri@gmail.com', // Sender address
        to: 'hssan.mnasri@gmail.com', // List of receivers
        subject: 'Test Email from Express & Nodemailer', // Subject line
        text: 'Hello world! This is a test email sent from an Express server using Nodemailer.', // Plain text body
        html: '<b>Hello world!</b><p>This is a test email sent from an Express server using Nodemailer.</p>', // HTML body
    };

    sendEmail(mailOptions.to, mailOptions.subject, mailOptions.html)
       
});

// ========================================
// Démarrage du serveur
// ========================================
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   🚀 Webhook Server Started            ║
║   📡 Port: ${PORT}                        ║
║   🌍 Environment: ${process.env.NODE_ENV || 'development'}          ║
║   ✅ Ready to receive webhooks         ║
╚════════════════════════════════════════╝
  `);
});

export default app;








