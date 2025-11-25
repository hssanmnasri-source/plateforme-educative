// 📁 src/pages/Profile.jsx
// ========================================
// Modern profile page with tabs and enhanced UI

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  User, Mail, LogOut, Phone, Bell, Shield, BookOpen,
  Award, Clock, TrendingUp, Camera, Edit2, Save, X,
  Settings, Lock, UserCircle
} from 'lucide-react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config';
import notificationService from '../services/notification.service';

export default function Profile() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: userProfile?.displayName || '',
    phone: userProfile?.phone || '',
    bio: userProfile?.bio || ''
  });
  const [notifStatus, setNotifStatus] = useState(
    userProfile?.fcmTokens && userProfile.fcmTokens.length > 0 ? 'enabled' : 'disabled'
  );
  const [notifMessage, setNotifMessage] = useState(null);
  const [notifLoading, setNotifLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    navigate('/login');
  };

  const handleUpdateProfile = async () => {
    try {
      setSaveMessage(null);
      await updateDoc(doc(db, 'users', currentUser.uid), {
        displayName: formData.displayName,
        phone: formData.phone,
        bio: formData.bio
      });
      setSaveMessage({ type: 'success', text: 'Profil mis à jour avec succès!' });
      setEditing(false);
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      setSaveMessage({ type: 'error', text: 'Erreur: ' + error.message });
    }
  };

  const handleEnableNotifications = async () => {
    if (!currentUser) return;
    setNotifLoading(true);
    setNotifMessage(null);

    const result = await notificationService.subscribeToNotifications(currentUser.uid);
    if (result.success) {
      setNotifStatus('enabled');
      setNotifMessage({ type: 'success', text: 'Notifications activées' });
    } else {
      setNotifMessage({ type: 'error', text: result.error || 'Impossible d\'activer' });
    }

    setNotifLoading(false);
    setTimeout(() => setNotifMessage(null), 3000);
  };

  const tabs = [
    { id: 'personal', name: 'Informations', icon: UserCircle },
    { id: 'security', name: 'Sécurité', icon: Lock },
    { id: 'progress', name: 'Progression', icon: TrendingUp }
  ];

  const stats = [
    {
      label: 'Cours suivis',
      value: userProfile?.purchasedCourses?.length || 0,
      icon: BookOpen,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      label: 'Heures d\'apprentissage',
      value: '0h',
      icon: Clock,
      color: 'text-green-600 bg-green-100'
    },
    {
      label: 'Certificats',
      value: 0,
      icon: Award,
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          {/* Cover Background */}
          <div className="h-32 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>

          {/* Profile Info */}
          <div className="px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-xl">
                  {currentUser?.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={userProfile?.displayName}
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>
                  )}
                </div>
                <button className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition opacity-0 group-hover:opacity-100">
                  <Camera className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* User Details */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">
                  {userProfile?.displayName || 'Utilisateur'}
                </h1>
                <p className="text-gray-600 mb-3">{currentUser?.email}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    <Shield className="w-4 h-4" />
                    {userProfile?.role === 'admin' ? 'Administrateur' : 'Étudiant'}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    <Mail className="w-4 h-4" />
                    Email vérifié
                  </span>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition disabled:opacity-50 font-medium shadow-lg hover:shadow-xl"
              >
                <LogOut className="w-5 h-5" />
                {loading ? 'Déconnexion...' : 'Déconnexion'}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Tab Headers */}
          <div className="border-b border-gray-200 px-8 pt-6">
            <nav className="flex gap-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 px-2 border-b-2 transition font-medium flex items-center gap-2 ${activeTab === tab.id
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Personal Information Tab */}
            {activeTab === 'personal' && (
              <div className="space-y-6">
                {saveMessage && (
                  <div className={`p-4 rounded-xl flex items-center gap-2 ${saveMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                    <div className={`w-2 h-2 rounded-full ${saveMessage.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                    {saveMessage.text}
                  </div>
                )}

                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Informations personnelles</h2>
                  {!editing ? (
                    <button
                      onClick={() => setEditing(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-xl transition font-medium"
                    >
                      <Edit2 className="w-4 h-4" />
                      Modifier
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleUpdateProfile}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition font-medium"
                      >
                        <Save className="w-4 h-4" />
                        Enregistrer
                      </button>
                      <button
                        onClick={() => setEditing(false)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
                      >
                        <X className="w-4 h-4" />
                        Annuler
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid gap-6">
                  {/* Display Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet
                    </label>
                    {editing ? (
                      <input
                        type="text"
                        value={formData.displayName}
                        onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 focus:bg-white transition outline-none"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">
                        {formData.displayName || 'Non renseigné'}
                      </p>
                    )}
                  </div>

                  {/* Email (Read-only) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse email
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-900">{currentUser?.email}</span>
                      <span className="ml-auto px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        Vérifié
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    {editing ? (
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+216 12 345 678"
                        maxLength="15"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 focus:bg-white transition outline-none"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">
                        {formData.phone || 'Non renseigné'}
                      </p>
                    )}
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Bio
                    </label>
                    {editing ? (
                      <textarea
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        rows="3"
                        placeholder="Parlez-nous de vous..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 focus:bg-white transition outline-none resize-none"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 min-h-[80px]">
                        {formData.bio || 'Aucune bio renseignée'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Sécurité et confidentialité</h2>

                {/* Notifications */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Bell className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Notifications push</h3>
                        <p className="text-sm text-gray-600">
                          Recevez des notifications pour vos paiements et cours
                        </p>
                        <p className="text-sm font-medium mt-2">
                          Statut: <span className={notifStatus === 'enabled' ? 'text-green-600' : 'text-gray-500'}>
                            {notifStatus === 'enabled' ? 'Activées ✓' : 'Désactivées'}
                          </span>
                        </p>
                        {notifMessage && (
                          <p className={`text-sm mt-2 ${notifMessage.type === 'success' ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {notifMessage.text}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={handleEnableNotifications}
                      disabled={notifLoading || notifStatus === 'enabled'}
                      className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition disabled:opacity-50 font-medium"
                    >
                      {notifStatus === 'enabled' ? 'Activées' : notifLoading ? 'Activation...' : 'Activer'}
                    </button>
                  </div>
                </div>

                {/* Change Password */}
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                      <Lock className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Mot de passe</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Dernière modification: Jamais
                      </p>
                      <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-gray-300 transition font-medium">
                        Changer le mot de passe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Progress Tab */}
            {activeTab === 'progress' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Ma progression</h2>

                {/* Progress Overview */}
                <div className="text-center py-12">
                  <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Aucune progression pour le moment
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Inscrivez-vous à un cours pour commencer votre apprentissage
                  </p>
                  <button
                    onClick={() => navigate('/courses')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:shadow-xl transition font-medium"
                  >
                    <BookOpen className="w-5 h-5" />
                    Explorer les cours
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}