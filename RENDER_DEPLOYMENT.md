# 🚀 Deploy Backend to Render - Step by Step Guide

## Step 1: Prepare Your Render Account
1. Go to https://render.com and sign up/login (it's free!)
2. Connect your GitHub account if you haven't already

## Step 2: Create a New Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your repository: `hssanmnasri-source/plateforme-educative`
3. Or use **"Deploy an existing image from a registry"** if you prefer

## Step 3: Configure the Service
- **Name**: `plateforme-edu-webhook` (or any name you like)
- **Environment**: `Node`
- **Region**: Choose closest to you
- **Branch**: `main`
- **Root Directory**: Leave empty (or set to `backend` if you want)
- **Build Command**: `cd backend && npm install`
- **Start Command**: `cd backend && node server.js`
- **Plan**: **Free** (perfect for testing!)

## Step 4: Set Environment Variables
Click **"Advanced"** → **"Environment Variables"** and add:

### Required Variables:
1. **PAYMEE_API_TOKEN**
   - Value: `73af59aae675d845db28616e3e9304f2473d7090` (your Paymee token)

2. **FIREBASE_SERVICE_ACCOUNT**
   - Open `backend/education-platform-backend-firebase-adminsdk-fbsvc-055e9861b5.json`
   - Copy the **entire JSON content**
   - Paste it as the value (Render will handle it as a string)

3. **NODE_ENV**
   - Value: `production`

4. **PORT** (optional - Render sets this automatically)
   - Value: `10000`

## Step 5: Deploy!
1. Click **"Create Web Service"**
2. Wait 2-3 minutes for deployment
3. Once deployed, you'll get a URL like: `https://plateforme-edu-webhook.onrender.com`

## Step 6: Update Frontend
After deployment, you'll get a URL like: `https://plateforme-edu-webhook-xxxxx.onrender.com`

Update your frontend `.env` files:
```
VITE_BACKEND_URL=https://your-render-url.onrender.com
VITE_WEBHOOK_URL=https://your-render-url.onrender.com
```

Then rebuild and redeploy:
```bash
cd frontend
npm run build
firebase deploy --only hosting
```

## Step 7: Update Paymee Dashboard
1. Go to your Paymee dashboard
2. Update the webhook URL to: `https://your-render-url.onrender.com/paymee-webhook`

## ✅ Done!
Your backend is now live on Render and your frontend will connect to it automatically!

