import admin from 'firebase-admin';

class NotificationService {
  async sendToUser(userId, notification) {
    try {
      const userDoc = await admin.firestore().collection('users').doc(userId).get();

      if (!userDoc.exists) {
        console.log('❌ Utilisateur introuvable');
        return { success: false };
      }

      const userData = userDoc.data();
      const tokens = userData.fcmTokens || [];

      if (tokens.length === 0) {
        console.log('⚠️ Aucun token pour cet utilisateur');
        return { success: false, error: 'No tokens' };
      }

      const message = {
        notification: {
          title: notification.title,
          body: notification.body,
          icon: notification.icon || '/logo.png'
        },
        data: notification.data || {},
        tokens
      };

      const response = await admin.messaging().sendEachForMulticast(message);

      console.log('✅ Notifications envoyées:', response.successCount);
      console.log('❌ Échecs:', response.failureCount);

      if (response.failureCount > 0) {
        const tokensToRemove = [];
        response.responses.forEach((resp, idx) => {
          if (!resp.success) {
            tokensToRemove.push(tokens[idx]);
          }
        });

        if (tokensToRemove.length > 0) {
          await admin.firestore().collection('users').doc(userId).update({
            fcmTokens: admin.firestore.FieldValue.arrayRemove(...tokensToRemove)
          });
        }
      }

      return {
        success: true,
        successCount: response.successCount,
        failureCount: response.failureCount
      };
    } catch (error) {
      console.error('❌ Erreur envoi notification:', error);
      return { success: false, error: error.message };
    }
  }

  async sendToMultipleUsers(userIds, notification) {
    const results = await Promise.all(
      userIds.map((userId) => this.sendToUser(userId, notification))
    );

    const successCount = results.filter((r) => r.success).length;
    console.log(`✅ ${successCount}/${userIds.length} notifications envoyées`);

    return { successCount, totalCount: userIds.length };
  }

  async sendToTopic(topic, notification) {
    try {
      const message = {
        notification: {
          title: notification.title,
          body: notification.body
        },
        data: notification.data || {},
        topic
      };

      const response = await admin.messaging().send(message);
      console.log('✅ Notification envoyée au topic:', response);

      return { success: true, messageId: response };
    } catch (error) {
      console.error('❌ Erreur envoi topic:', error);
      return { success: false, error: error.message };
    }
  }
}

export default new NotificationService();


