// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Configuration Firebase (doit correspondre à votre config)
firebase.initializeApp({
  apiKey: "AIzaSyAwpDzEdm-rWIiwequIIOW3K88ZukFd8Ko",
  authDomain: "education-platform-backend.firebaseapp.com",
  projectId: "education-platform-backend",
  storageBucket: "education-platform-backend.firebasestorage.app",
  messagingSenderId: "882764679517",
  appId: "1:882764679517:web:ad0ed91d818388b44c00b4"
});

const messaging = firebase.messaging();

// Gérer les messages en arrière-plan
messaging.onBackgroundMessage((payload) => {
  console.log('📩 Message reçu en arrière-plan:', payload);
  
  const notificationTitle = payload.notification?.title || 'Nouvelle notification';
  const notificationOptions = {
    body: payload.notification?.body || 'Vous avez un nouveau message.',
    icon: '/logo.png',
    badge: '/logo.png',
    data: payload.data || {}
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Gérer le clic sur la notification
self.addEventListener('notificationclick', (event) => {
  console.log('🔔 Notification cliquée:', event);
  event.notification.close();
  
  const url = event.notification?.data?.redirectUrl || '/my-courses';
  
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Chercher une fenêtre ouverte avec cette URL
      const matchingClient = clientList.find((client) => client.url.includes(url));
      
      if (matchingClient) {
        return matchingClient.focus();
      }
      
      // Ouvrir une nouvelle fenêtre
      return self.clients.openWindow(url);
    })
  );
});

