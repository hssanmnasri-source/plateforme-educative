import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, LogOut, Phone, Bell } from 'lucide-react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config';
import notificationService from '../services/notification.service';

export default function Profile() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [phone, setPhone] = useState(userProfile?.phone || '');
  const [notifStatus, setNotifStatus] = useState(
    userProfile?.fcmTokens && userProfile.fcmTokens.length > 0 ? 'enabled' : 'disabled'
  );
  const [notifMessage, setNotifMessage] = useState(null);
  const [notifLoading, setNotifLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    navigate('/login');
  };

  const handleUpdateProfile = async () => {
    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        phone: phone
      });
      alert('Téléphone mis à jour !');
      setEditing(false);
    } catch (error) {
      alert('Erreur : ' + error.message);
    }
  };

  const handleEnableNotifications = async () => {
    if (!currentUser) return;
    setNotifLoading(true);
    setNotifMessage(null);

    const result = await notificationService.subscribeToNotifications(currentUser.uid);
    if (result.success) {
      setNotifStatus('enabled');
      setNotifMessage('Notifications activées ✅');
    } else {
      setNotifMessage(result.error || 'Impossible d’activer les notifications');
    }

    setNotifLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Mon Profil</h1>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              {currentUser?.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt={userProfile?.displayName}
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <User className="w-12 h-12 text-green-500" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {userProfile?.displayName}
              </h2>
              <p className="text-gray-600">{currentUser?.email}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                {userProfile?.role === 'admin' ? 'Administrateur' : 'Étudiant'}
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{currentUser?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Téléphone</p>
                {editing ? (
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="12345678"
                    maxLength="8"
                    className="font-medium text-gray-800 border rounded px-2 py-1"
                  />
                ) : (
                  <p className="font-medium text-gray-800">{phone || 'Non renseigné'}</p>
                )}
              </div>
              {editing ? (
                <div className="flex gap-2">
                  <button 
                    onClick={handleUpdateProfile}
                    className="text-green-500 hover:text-green-600 text-sm font-medium"
                  >
                    Enregistrer
                  </button>
                  <button 
                    onClick={() => setEditing(false)}
                    className="text-gray-500 hover:text-gray-600 text-sm"
                  >
                    Annuler
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setEditing(true)}
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                >
                  Modifier
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Cours achetés</p>
                <p className="font-medium text-gray-800">
                  {userProfile?.purchasedCourses?.length || 0} cours
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Notifications de paiement</p>
                <p className="font-medium text-gray-800">
                  {notifStatus === 'enabled' ? 'Activées' : 'Désactivées'}
                </p>
                {notifMessage && (
                  <p className="text-xs text-gray-500 mt-1">{notifMessage}</p>
                )}
              </div>
              <button
                onClick={handleEnableNotifications}
                disabled={notifLoading || notifStatus === 'enabled'}
                className="text-sm font-medium px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
              >
                {notifStatus === 'enabled' ? 'Activées' : notifLoading ? 'Activation...' : 'Activer'}
              </button>
            </div>
          </div>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition disabled:opacity-50"
          >
            <LogOut className="w-5 h-5" />
            {loading ? 'Déconnexion...' : 'Se déconnecter'}
          </button>
        </div>
      </div>
    </div>
  );
}