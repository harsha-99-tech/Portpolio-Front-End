# Quick Fix: Environment Variables Not Working

## ⚠️ IMPORTANT: Your project uses wrangler.toml

If you see this message in Cloudflare Dashboard:
> "Environment variables for this project are being managed through wrangler.toml. Only Secrets (encrypted variables) can be managed via the Dashboard."

**This means you MUST use Wrangler CLI to set secrets.** The dashboard won't work for regular environment variables.

## Solution: Use Wrangler CLI to Set Secrets

### Step 1: Install Wrangler (if not already installed)

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```
This will open your browser to authenticate with Cloudflare.

### Step 3: Set Each Secret

**Important**: You need to know your Cloudflare Pages project name. It's usually:
- The name shown in the Cloudflare Dashboard
- Or check your site URL: `https://YOUR-PROJECT-NAME.pages.dev`

Run these commands (replace `harsha-nawana` with your actual project name):

```bash
# Navigate to your project directory (you're probably already there)
cd C:\Users\DELL\Desktop\Personal\NextJS\Portpolio-Front-End

# Set each secret (you'll be prompted to paste the value)
wrangler pages secret put MONGODB_URI --project-name=harsha-nawana
wrangler pages secret put EMAILJS_SERVICE_ID --project-name=harsha-nawana
wrangler pages secret put EMAILJS_TEMPLATE_ID --project-name=harsha-nawana
wrangler pages secret put EMAILJS_PUBLIC_KEY --project-name=harsha-nawana
wrangler pages secret put NEXT_PUBLIC_GOOGLE_MAPS_API_KEY --project-name=harsha-nawana
```

**For each command:**
1. It will prompt: `Enter the secret value for MONGODB_URI:`
2. Paste your value and press Enter
3. It will confirm: `✨ Success! Uploaded secret MONGODB_URI`

### Step 4: Verify Secrets Are Set

You can list all secrets:
```bash
wrangler pages secret list --project-name=harsha-nawana
```

This will show all secrets (but not their values, for security).

### Step 5: Trigger New Deployment

**CRITICAL**: Secrets only apply to NEW deployments!

1. Go to Cloudflare Dashboard → Your Project → **Deployments**
2. Click **Retry deployment** on the latest deployment
3. OR push a new commit to trigger automatic deployment

**Wait for deployment to complete**, then test your API endpoints.

### Method 2: Verify Variables Are Set Correctly

1. **Check in Cloudflare Dashboard**:
   - Go to Settings → Environment variables (or Variables/Secrets)
   - Verify all 5 variables are listed
   - Check that values are not empty

2. **Check variable names** (must be exact, case-sensitive):
   - ✅ `MONGODB_URI` (not `mongodb_uri` or `MONGO_URI`)
   - ✅ `EMAILJS_SERVICE_ID` (not `EMAILJS_SERVICEID`)
   - ✅ `EMAILJS_TEMPLATE_ID`
   - ✅ `EMAILJS_PUBLIC_KEY`
   - ✅ `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

### Method 3: Check Deployment Logs

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Check **Build logs** and **Function logs**
4. Look for errors mentioning environment variables

### Method 4: Test API Endpoint Directly

Visit: `https://harsha-nawana.pages.dev/api/emailjs-config`

- If you see a JSON response with `serviceId`, `templateId`, `publicKey` → Variables are working ✅
- If you see a 500 error with "missing environment variables" → Variables are NOT set correctly ❌

### Common Issues:

1. **Variables set but not accessible**:
   - Environment variables only apply to NEW deployments
   - You MUST trigger a new deployment after adding variables
   - Go to Deployments → Retry deployment

2. **Wrong project name**:
   - Make sure you're setting variables for the correct project
   - Check your project name in Cloudflare Dashboard

3. **Variables not accessible in Workers**:
   - For Next.js on Cloudflare Pages, variables should work via `process.env`
   - If using Wrangler secrets, they're automatically available as `process.env.VARIABLE_NAME`

### Still Not Working?

Try this diagnostic:

1. **Create a test API route** to check if variables are accessible:
   ```typescript
   // src/app/api/test-env/route.ts
   import { NextResponse } from 'next/server';
   
   export async function GET() {
     return NextResponse.json({
       mongodb: !!process.env.MONGODB_URI,
       emailjs_service: !!process.env.EMAILJS_SERVICE_ID,
       emailjs_template: !!process.env.EMAILJS_TEMPLATE_ID,
       emailjs_key: !!process.env.EMAILJS_PUBLIC_KEY,
       google_maps: !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
     });
   }
   ```

2. **Deploy and visit**: `https://harsha-nawana.pages.dev/api/test-env`
3. **Check which variables are `true`** (accessible) vs `false` (missing)

This will tell you exactly which variables are missing.

