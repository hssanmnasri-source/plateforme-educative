import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Enregistrer le service worker Firebase Messaging
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('🔔 Service worker FCM enregistré:', registration.scope);
    })
    .catch((error) => {
      console.error('❌ Service worker registration failed:', error);
    });
}