// ========================================
// 📁 src/contexts/AuthContext.jsx
// ========================================

import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import authService from '../services/auth.service';
import notificationService from '../services/notification.service';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les données utilisateur depuis Firestore
  const loadUserProfile = async (uid) => {
    try {
      const result = await authService.getUserData(uid);
      if (result.success) {
        setUserProfile(result.data);
      }
    } catch (err) {
      console.error('Error loading user profile:', err);
    }
  };

  // Écouter les changements d'authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        await loadUserProfile(user.uid);

        // 🔔 Activer les notifications
        await notificationService.initialize();
        const result = await notificationService.subscribeToNotifications(user.uid);
        if (result.success) {
          console.log('✅ Notifications activées');
        }

        notificationService.onMessageReceived((payload) => {
          console.log('📨 Nouvelle notification:', payload);
          // TODO: Ajouter un toast si nécessaire
        });
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Inscription
  const register = async (email, password, displayName) => {
    setError(null);
    const result = await authService.register(email, password, displayName);
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  // Connexion
  const login = async (email, password) => {
    setError(null);
    const result = await authService.login(email, password);
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  // Connexion Google
  const loginWithGoogle = async () => {
    setError(null);
    const result = await authService.loginWithGoogle();
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  // Déconnexion
  const logout = async () => {
    setError(null);
    const result = await authService.logout();
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  // Réinitialiser le mot de passe
  const resetPassword = async (email) => {
    setError(null);
    const result = await authService.resetPassword(email);
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  // Mettre à jour le profil
  const updateProfile = async (updates) => {
    setError(null);
    const result = await authService.updateUserProfile(updates);
    if (result.success) {
      await loadUserProfile(currentUser.uid);
    } else {
      setError(result.error);
    }
    return result;
  };

  // Vérifier si l'utilisateur est admin
  const isAdmin = () => {
    return userProfile?.role === 'admin';
  };

  // Vérifier si l'utilisateur a accès à un cours
  const hasAccessToCourse = (courseId) => {
    return userProfile?.purchasedCourses?.includes(courseId) || isAdmin();
  };

  const value = {
    currentUser,
    userProfile,
    loading,
    error,
    register,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateProfile,
    isAdmin,
    hasAccessToCourse,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};