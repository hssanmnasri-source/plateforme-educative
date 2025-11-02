// 📁 frontend/src/pages/PaymentCancel.jsx
// ========================================

import { useNavigate } from 'react-router-dom';
import { XCircle, ArrowLeft } from 'lucide-react';

export default function PaymentCancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <XCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Paiement annulé
        </h1>
        
        <p className="text-gray-600 mb-8">
          Vous avez annulé le processus de paiement. Aucun montant n'a été débité.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate(-1)}
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Réessayer le paiement
          </button>
          
          <button
            onClick={() => navigate('/courses')}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Retour aux cours
          </button>
        </div>
      </div>
    </div>
  );
}
