// 📁 frontend/src/pages/PaymentSuccess.jsx
// ========================================

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, Loader, ArrowRight } from 'lucide-react';
import paymeeService from '../services/paymee.service';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [verifying, setVerifying] = useState(true);
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);

  const paymentId = searchParams.get('payment_id');

  useEffect(() => {
    verifyPayment();
  }, [paymentId]);

  const verifyPayment = async () => {
    if (!paymentId) {
      setError('ID de paiement manquant');
      setVerifying(false);
      return;
    }

    // Attendre un peu pour laisser le temps au webhook de traiter
    await new Promise(resolve => setTimeout(resolve, 2000));

    const result = await paymeeService.verifyPayment(paymentId);

    if (result.success) {
      setPaymentData(result.data);
      
      if (result.status === 'completed') {
        // Paiement réussi
        setVerifying(false);
      } else if (result.status === 'pending') {
        // Toujours en attente, réessayer
        setTimeout(verifyPayment, 3000);
      } else {
        setError('Le paiement a échoué');
        setVerifying(false);
      }
    } else {
      setError(result.error);
      setVerifying(false);
    }
  };

  if (verifying) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <Loader className="w-16 h-16 animate-spin text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Vérification du paiement...
          </h2>
          <p className="text-gray-600">
            Veuillez patienter pendant que nous confirmons votre paiement
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Erreur de paiement
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate('/courses')}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            Retour aux cours
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Paiement réussi ! 🎉
        </h1>
        
        <p className="text-gray-600 mb-6">
          Votre paiement de <strong>{paymentData?.amount} TND</strong> a été confirmé avec succès.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-600 mb-1">Référence :</p>
          <p className="font-mono text-sm text-gray-800">{paymentData?.paymeeTransactionId}</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/my-courses')}
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-medium"
          >
            Accéder à mes cours
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => navigate('/courses')}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Découvrir d'autres cours
          </button>
        </div>
      </div>
    </div>
  );
}

