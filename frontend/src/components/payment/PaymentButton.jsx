// 📁 frontend/src/components/payment/PaymentButton.jsx
// ========================================

import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import paymeeService from '../../services/paymee.service';
import { CreditCard, Loader } from 'lucide-react';

export default function PaymentButton({ course }) {
  const { currentUser, userProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    if (!currentUser) {
      setError('Veuillez vous connecter pour acheter ce cours');
      return;
    }

    if (userProfile?.purchasedCourses?.includes(course.id)) {
      setError('Vous avez déjà accès à ce cours');
      return;
    }

    setLoading(true);
    setError(null);

    const result = await paymeeService.initiatePayment(
      course.id,
      course.title,
      course.price,
      {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: userProfile?.displayName || currentUser.displayName,
        phone: userProfile?.phone || '00000000'
      }
    );

    if (result.success) {
      // Rediriger vers la page de paiement Paymee
      window.location.href = result.paymentUrl;
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  // Si l'utilisateur a déjà le cours
  if (userProfile?.purchasedCourses?.includes(course.id)) {
    return (
      <button
        disabled
        className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg cursor-not-allowed"
      >
        Cours déjà acheté
      </button>
    );
  }

  // Si le cours est gratuit
  if (course.isFree) {
    return (
      <button
        onClick={() => window.location.href = `/courses/${course.id}`}
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
      >
        Accéder gratuitement
      </button>
    );
  }

  return (
    <div>
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        {loading ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Chargement...
          </>
        ) : (
          <>
            <CreditCard className="w-5 h-5" />
            Acheter pour {course.price} TND
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center mt-2">
        Paiement sécurisé via Paymee
      </p>
    </div>
  );
}