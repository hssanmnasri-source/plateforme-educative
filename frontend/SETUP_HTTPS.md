# Setup HTTPS for Local Development

Paymee requires HTTPS URLs for `return_url` and `cancel_url`. For local development, you need to use a tunnel service.

## Option 1: Using Cloudflare Tunnel (⭐ Recommended - No account, no password)

### Step 1: Install cloudflared
Download from: https://github.com/cloudflare/cloudflared/releases

Or use package manager:
- **Windows (Chocolatey)**: `choco install cloudflared`
- **macOS (Homebrew)**: `brew install cloudflared`
- **Linux**: Download binary from releases page

### Step 2: Start your frontend
```bash
cd frontend
npm run dev
```
Your app should be running on http://localhost:5173

### Step 3: Start Cloudflare Tunnel (in a new terminal)
```bash
cloudflared tunnel --url http://localhost:5173
```

You'll see output like:
```
+--------------------------------------------------------------------------------------------+
|  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
|  https://abc123-def456-ghi789.trycloudflare.com                                           |
+--------------------------------------------------------------------------------------------+
```

### Step 4: Copy the HTTPS URL
Copy the HTTPS URL (e.g., `https://abc123-def456-ghi789.trycloudflare.com`)

### Step 5: Add to .env file
Create or edit `frontend/.env` and add:
```
VITE_FRONTEND_URL=https://abc123-def456-ghi789.trycloudflare.com
```

⚠️ **Important**: Replace the URL with your actual Cloudflare Tunnel URL!

### Step 6: Restart your dev server
Stop your dev server (Ctrl+C) and restart:
```bash
npm run dev
```

Now your payment URLs will use the HTTPS Cloudflare Tunnel URL.

## Option 2: Using localtunnel (May require password)

### Step 1: Start localtunnel
```bash
npx localtunnel --port 5173
```

**Note**: Recent versions of localtunnel may require a password. If prompted, you'll need to enter it when accessing the URL.

### Step 2-6: Follow same steps as Cloudflare Tunnel above
Replace the URL with your localtunnel URL (e.g., `https://abc123.loca.lt`)

## Option 3: Using ngrok (Requires free account)

### Step 1: Sign up for ngrok
1. Go to https://dashboard.ngrok.com/signup
2. Create a free account (no credit card required)

### Step 2: Get your authtoken
1. Go to https://dashboard.ngrok.com/get-started/your-authtoken
2. Copy your authtoken

### Step 3: Configure ngrok
```bash
ngrok config add-authtoken YOUR_AUTHTOKEN
```

### Step 4: Install ngrok
1. Download ngrok from https://ngrok.com/download
2. Extract and add to your PATH

### Step 5: Start your frontend
```bash
cd frontend
npm run dev
```

### Step 6: Start ngrok (in a new terminal)
```bash
ngrok http 5173
```

You'll see output like:
```
Forwarding   https://abc123.ngrok.io -> http://localhost:5173
```

### Step 7: Copy the HTTPS URL and add to .env
Create or edit `frontend/.env` and add:
```
VITE_FRONTEND_URL=https://abc123.ngrok.io
```

### Step 8: Restart your dev server
Stop your dev server (Ctrl+C) and restart:
```bash
npm run dev
```

## Option 4: Other tunnel services

You can also use:
- **localhost.run**: `ssh -R 80:localhost:5173 ssh.localhost.run`

## Testing

Once configured, try making a payment - the error should be resolved!

