// 📁 backend/README.md
// ========================================

# Paymee Webhook Server

## Installation

```bash
npm install
```

## Configuration

1. Créez un fichier `.env` à la racine du backend
2. Ajoutez vos variables d'environnement (voir `.env.example`)
3. Téléchargez votre `serviceAccountKey.json` depuis Firebase Console

## Démarrage

### Développement
```bash
npm run dev
```

### Production
```bash
npm start
```

## Test du serveur

```bash
# Vérifier que le serveur fonctionne
curl http://localhost:3001/health

# Devrait retourner : {"status":"OK","timestamp":"..."}
```

## Routes disponibles

- `POST /paymee-webhook` - Webhook principal pour recevoir les notifications Paymee
- `GET /health` - Vérification de santé du serveur
- `POST /test-webhook` - Endpoint de test

## Déploiement sur Render.com

1. Créez un compte sur https://render.com
2. Créez un nouveau "Web Service"
3. Connectez votre repo GitHub
4. Configuration :
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Ajoutez les variables d'environnement dans le dashboard Render
6. Déployez !

L'URL du webhook sera : `https://votre-app.onrender.com/paymee-webhook`