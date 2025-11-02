// 📁 frontend/src/services/paymee.service.js
// ========================================

import { collection, addDoc, doc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase.config';

const PAYMEE_API = import.meta.env.VITE_PAYMEE_SANDBOX_URL || 'https://sandbox.paymee.tn/api/v2';
const PAYMEE_TOKEN = import.meta.env.VITE_PAYMEE_TOKEN;
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

class PaymeeService {
  async initiatePayment(courseId, courseTitle, amount, userInfo) {
    try {
      // Validation des données
      if (!PAYMEE_TOKEN) {
        throw new Error('Token Paymee manquant');
      }
      
      if (!userInfo.email) {
        throw new Error('Email utilisateur manquant');
      }

      if (!amount || amount <= 0) {
        throw new Error('Montant invalide');
      }

      if (!courseId || !courseTitle) {
        throw new Error('Informations du cours manquantes');
      }

      // 1. Créer une transaction en attente dans Firestore
      const paymentRef = await addDoc(collection(db, 'payments'), {
        userId: userInfo.uid,
        courseId: courseId,
        amount: amount,
        currency: 'TND',
        status: 'pending',
        createdAt: serverTimestamp(),
        userEmail: userInfo.email,
        userName: userInfo.displayName
      });

      // Préparer les données pour Paymee
      const firstName = userInfo.displayName?.split(' ')[0] || 'User';
      const lastName = userInfo.displayName?.split(' ').slice(1).join(' ') || 'User';
      const phone = userInfo.phone || '00000000';
      
      // S'assurer que le téléphone est au bon format (8 chiffres)
      const cleanPhone = phone.replace(/\D/g, '').slice(-8);
      const formattedPhone = cleanPhone.length === 8 ? cleanPhone : '00000000';

      const paymentData = {
        amount: parseFloat(amount),
        note: `Achat cours: ${courseTitle}`,
        first_name: firstName,
        last_name: lastName,
        email: userInfo.email,
        phone: formattedPhone,
        return_url: `${window.location.origin}/payment/success?payment_id=${paymentRef.id}`,
        cancel_url: `${window.location.origin}/payment/cancel?payment_id=${paymentRef.id}`,
        order_id: paymentRef.id
      };

      // Validation supplémentaire des données
      if (isNaN(paymentData.amount)) {
        throw new Error('Le montant doit être un nombre valide');
      }

      if (!paymentData.email || !paymentData.email.includes('@')) {
        throw new Error('Email invalide');
      }

      if (paymentData.first_name.length < 2) {
        throw new Error('Prénom trop court');
      }

      if (paymentData.last_name.length < 2) {
        throw new Error('Nom trop court');
      }

      // Ajouter webhook_url seulement si défini
      if (WEBHOOK_URL) {
        paymentData.webhook_url = `${WEBHOOK_URL}/paymee-webhook`;
      }

      console.log('Sending payment data to Paymee:', paymentData);
      console.log('API URL:', `${PAYMEE_API}/payments/create`);
      console.log('Token exists:', !!PAYMEE_TOKEN);

      // 2. Appeler l'API Paymee
      const response = await fetch(`${PAYMEE_API}/payments/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${PAYMEE_TOKEN}`
        },
        body: JSON.stringify(paymentData)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      const data = await response.json();
      console.log('Paymee response:', data);

      if (!response.ok) {
        console.error('API Error Details:', {
          status: response.status,
          statusText: response.statusText,
          data: data
        });
        throw new Error(`HTTP ${response.status}: ${data.message || data.error || 'Erreur API Paymee'}`);
      }

      if (!data.status) {
        console.error('Paymee API returned error:', data);
        if (data.errors && data.errors.length > 0) {
          console.error('Specific errors:', data.errors);
          const errorMessages = data.errors.map(err => err.message || err.field || err).join(', ');
          throw new Error(`Erreurs Paymee: ${errorMessages}`);
        }
        throw new Error(data.message || data.error || 'Erreur lors de l\'initialisation du paiement');
      }

      // 3. Mettre à jour avec le token Paymee
      await updateDoc(doc(db, 'payments', paymentRef.id), {
        paymeeToken: data.data.token,
        paymentUrl: data.data.payment_url,
        updatedAt: serverTimestamp()
      });

      return {
        success: true,
        paymentId: paymentRef.id,
        paymentUrl: data.data.payment_url,
        token: data.data.token
      };

    } catch (error) {
      console.error('Payment initiation error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async verifyPayment(paymentId) {
    try {
      // Vérifier le statut dans Firestore
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
      console.error('Payment verification error:', error);
      return { success: false, error: error.message };
    }
  }
}

export default new PaymeeService();
//28.10.2025 21H