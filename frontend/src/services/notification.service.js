import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../config/firebase.config';

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY;

class NotificationService {
  constructor() {
    this.messaging = null;
  }

  async initialize() {
    try {
      this.messaging = getMessaging();
      console.log('📱 FCM initialisé');
      return true;
    } catch (error) {
      console.error('❌ Erreur initialisation FCM:', error);
      return false;
    }
  }

  async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      console.log('🔔 Permission notification:', permission);

      if (permission === 'granted') {
        return true;
      } else if (permission === 'denied') {
        console.log('❌ Permission refusée');
        return false;
      }
      return false;
    } catch (error) {
      console.error('❌ Erreur permission:', error);
      return false;
    }
  }

  async getDeviceToken(userId) {
    try {
      if (!this.messaging) {
        await this.initialize();
      }

      const token = await getToken(this.messaging, {
        vapidKey: VAPID_KEY
      });

      if (token) {
        console.log('✅ FCM Token:', token);

        if (userId) {
          await updateDoc(doc(db, 'users', userId), {
            fcmTokens: arrayUnion(token),
            lastTokenUpdate: new Date()
          });
        }

        return token;
      } else {
        console.log('❌ Impossible de récupérer le token');
        return null;
      }
    } catch (error) {
      console.error('❌ Erreur récupération token:', error);
      return null;
    }
  }

  async subscribeToNotifications(userId) {
    try {
      if (!('Notification' in window)) {
        console.log('❌ Notifications non supportées');
        return { success: false, error: 'Notifications non supportées' };
      }

      const hasPermission = await this.requestPermission();
      if (!hasPermission) {
        return { success: false, error: 'Permission refusée' };
      }

      const token = await this.getDeviceToken(userId);
      if (!token) {
        return { success: false, error: 'Impossible de récupérer le token' };
      }

      return { success: true, token };
    } catch (error) {
      console.error('❌ Erreur souscription:', error);
      return { success: false, error: error.message };
    }
  }

  onMessageReceived(callback) {
    if (!this.messaging) {
      console.error('❌ FCM non initialisé');
      return;
    }

    onMessage(this.messaging, (payload) => {
      console.log('📩 Message reçu (foreground):', payload);

      if (payload.notification) {
        new Notification(payload.notification.title, {
          body: payload.notification.body,
          icon: '/logo.png'
        });
      }

      if (callback) {
        callback(payload);
      }
    });
  }
}

export default new NotificationService();

