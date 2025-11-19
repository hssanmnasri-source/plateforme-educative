import { collection, addDoc, doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase.config';

const PAYMEE_API = import.meta.env.VITE_PAYMEE_SANDBOX_URL || 'https://sandbox.paymee.tn/api/v2';
const PAYMEE_TOKEN = import.meta.env.VITE_PAYMEE_TOKEN;
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

// Get frontend base URL - must be HTTPS for Paymee
const getBaseUrl = () => {
  // Use environment variable if set (for production or ngrok)
  const envUrl = import.meta.env.VITE_FRONTEND_URL;
  if (envUrl) {
    return envUrl.endsWith('/') ? envUrl.slice(0, -1) : envUrl;
  }
  
  // In production, use window.location.origin
  const origin = window.location.origin;
  
  // If already HTTPS, use it
  if (origin.startsWith('https://')) {
    return origin;
  }
  
  // For localhost development, we need HTTPS (use ngrok or similar)
  // This will throw an error to remind the user to set VITE_FRONTEND_URL
  if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
    const errorMessage = `⚠️ Paymee nécessite HTTPS pour les callbacks de paiement.

Pour développer en local, utilisez un service de tunnel:

OPTION 1 - Cloudflare Tunnel (Recommandé, pas de compte ni mot de passe):
1. Installez cloudflared: https://github.com/cloudflare/cloudflared/releases
2. Exécutez: cloudflared tunnel --url http://localhost:5173
3. Copiez l'URL HTTPS (ex: https://abc123.trycloudflare.com)
4. Ajoutez dans frontend/.env: VITE_FRONTEND_URL=https://abc123.trycloudflare.com
5. Redémarrez le serveur de développement

OPTION 2 - Localtunnel (Peut demander un mot de passe):
1. Exécutez: npx localtunnel --port 5173
2. Copiez l'URL HTTPS (ex: https://abc123.loca.lt)
3. Ajoutez dans frontend/.env: VITE_FRONTEND_URL=https://abc123.loca.lt
4. Redémarrez le serveur de développement

OPTION 3 - Ngrok (Nécessite un compte gratuit):
1. Créez un compte: https://dashboard.ngrok.com/signup
2. Configurez: ngrok config add-authtoken YOUR_TOKEN
3. Exécutez: ngrok http 5173
4. Copiez l'URL HTTPS et ajoutez-la à VITE_FRONTEND_URL

Voir frontend/SETUP_HTTPS.md pour plus de détails.`;
    console.error(errorMessage);
    throw new Error('Configuration HTTPS requise: Paymee nécessite une URL HTTPS. Utilisez Cloudflare Tunnel (cloudflared tunnel --url http://localhost:5173) ou ngrok. Voir frontend/SETUP_HTTPS.md pour les instructions.');
  }
  
  // Fallback: try to convert HTTP to HTTPS (may not work in all cases)
  return origin.replace('http://', 'https://');
};

class PaymeeService {
  async initiatePayment(courseId, courseTitle, amount, userInfo) {
    try {
      console.log('🔐 Initiating payment...', { courseId, courseTitle, amount });

      // Vérifier HTTPS AVANT de créer le document de paiement
      // Get base URL (must be HTTPS) - vérifier d'abord
      let baseUrl;
      try {
        baseUrl = getBaseUrl();
      } catch (error) {
        // Si l'erreur HTTPS est levée, retourner directement sans créer de document
        console.error('❌ HTTPS check failed:', error.message);
        return {
          success: false,
          error: error.message
        };
      }

      // 1. Créer transaction pending (uniquement si HTTPS est OK)
      const paymentRef = await addDoc(collection(db, 'payments'), {
        userId: userInfo.uid,
        courseId: courseId,
        courseTitle: courseTitle,
        amount: amount,
        currency: 'TND',
        status: 'pending',
        createdAt: serverTimestamp(),
        userEmail: userInfo.email,
        userName: userInfo.displayName
      });

      console.log('✅ Payment document created:', paymentRef.id);

      // Préparer les données pour Paymee
      const firstName = userInfo.displayName?.split(' ')[0] || 'User';
      const lastName = userInfo.displayName?.split(' ').slice(1).join(' ') || 'Student';
      
      // Nettoyer le numéro de téléphone (8 chiffres pour Tunisie)
      let phone = userInfo.phone || '12345678';
      phone = phone.replace(/\D/g, ''); // Supprimer tout sauf les chiffres
      if (phone.length !== 8) {
        phone = '12345678'; // Fallback
      }
      
      const paymentData = {
        amount: parseFloat(amount), // S'assurer que c'est un nombre
        note: `Cours ${courseTitle}`, // PAS de guillemets
        first_name: firstName,
        last_name: lastName,
        email: userInfo.email,
        phone: phone, // Format: 12345678 (8 chiffres)
        return_url: `${baseUrl}/payment/success?payment_id=${paymentRef.id}`,
        cancel_url: `${baseUrl}/payment/cancel?payment_id=${paymentRef.id}`,
        webhook_url: `${WEBHOOK_URL}/paymee-webhook`,
        order_id: paymentRef.id
      };

      console.log('📤 Sending to Paymee:', paymentData);

      // 2. Appeler API Paymee
      const response = await fetch(`${PAYMEE_API}/payments/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${PAYMEE_TOKEN}`
        },
        body: JSON.stringify(paymentData)
      });

      console.log('📥 Response status:', response.status);

      const data = await response.json();
      console.log('📥 Paymee response:', data);

      if (!data.status) {
        console.error('❌ Paymee error:', data);
        
        // Afficher les erreurs spécifiques
        if (data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors.map(err => {
            if (typeof err === 'object') {
              return Object.entries(err).map(([key, value]) => `${key}: ${value}`).join(', ');
            }
            return err;
          }).join(' | ');
          
          throw new Error(`Erreur Paymee: ${errorMessages}`);
        }
        
        throw new Error(data.message || 'Erreur initialisation paiement');
      }

      // 3. Sauvegarder token
      await updateDoc(doc(db, 'payments', paymentRef.id), {
        paymeeToken: data.data.token,
        paymentUrl: data.data.payment_url,
        updatedAt: serverTimestamp()
      });

      console.log('✅ Payment ready:', data.data.payment_url);

      return {
        success: true,
        paymentId: paymentRef.id,
        paymentUrl: data.data.payment_url,
        token: data.data.token
      };

    } catch (error) {
      console.error('💥 Payment error:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
  }

  async verifyPayment(paymentId) {
    try {
      const paymentDoc = await getDoc(doc(db, 'payments', paymentId));
      
      if (!paymentDoc.exists()) {
        return { success: false, error: 'Paiement introuvable' };
      }

      const paymentData = paymentDoc.data();
      
      return {
        success: true,
        status: paymentData.status,
        data: paymentData
      };
    } catch (error) {
      console.error('Verification error:', error);
      return { success: false, error: error.message };
    }
  }
}

export default new PaymeeService();