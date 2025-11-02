import admin from 'firebase-admin';
import { readFileSync } from 'fs';

// Charger le Service Account
const serviceAccount = JSON.parse(
  readFileSync('./serviceAccountKey.json', 'utf8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function createAdmin(email) {
  try {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', email).get();
    
    if (snapshot.empty) {
      console.log('❌ Utilisateur introuvable');
      return;
    }

    const userDoc = snapshot.docs[0];
    await userDoc.ref.update({ role: 'admin' });
    
    console.log('✅ Utilisateur promu admin avec succès !');
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

// Remplacez par votre email
createAdmin('hssan.mnasri@gmail.com');