// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Configuration Firebase (même que dans votre app)
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
  console.log('Message reçu en arrière-plan:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png', // Votre logo
    badge: '/badge.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});