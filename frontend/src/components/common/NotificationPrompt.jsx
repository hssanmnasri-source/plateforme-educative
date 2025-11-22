import { useState } from 'react';
import { Bell, X } from 'lucide-react';
import notificationService from '../../services/notification.service';
import { useAuth } from '../../contexts/AuthContext';

export default function NotificationPrompt() {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const { currentUser, userProfile } = useAuth();

  // Do not show the prompt for non-authenticated users, if hidden, or for admins
  if (!currentUser || !show || userProfile?.role === 'admin') {
    return null;
  }

  const handleEnable = async () => {
    setLoading(true);
    const result = await notificationService.subscribeToNotifications(currentUser.uid);

    if (result.success) {
      alert('✅ Notifications activées !');
      setShow(false);
    } else {
      alert('❌ Erreur : ' + (result.error || 'activation impossible'));
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl p-6 max-w-md border border-gray-200 z-50">
      <button
        onClick={() => setShow(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex items-start gap-4">
        <div className="bg-green-100 rounded-full p-3">
          <Bell className="w-6 h-6 text-green-600" />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2">
            Activer les notifications
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Recevez des alertes pour vos cours, les nouveaux contenus et les offres spéciales.
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleEnable}
              disabled={loading}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm font-medium disabled:opacity-50"
            >
              {loading ? 'Activation...' : 'Activer'}
            </button>
            <button
              onClick={() => setShow(false)}
              className="text-gray-600 hover:text-gray-800 text-sm"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


