# Environment Variables Setup for Cloudflare Pages

## ⚠️ CRITICAL: Your site requires these environment variables to function!

The following errors indicate missing environment variables:
- `500 Internal Server Error` on `/api/projects/*` - MongoDB connection failing
- `500 Internal Server Error` on `/api/testimonials` - MongoDB connection failing  
- `500 Internal Server Error` on `/api/emailjs-config` - EmailJS variables missing

## Step-by-Step: Setting Environment Variables in Cloudflare Pages

### Step 1: Access Your Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click on **Workers & Pages** in the left sidebar
3. Click on **Pages** 
4. Click on your project name (e.g., `portpolio-harsha` or `harsha-nawana`)

### Step 2: Navigate to Environment Variables

1. Click on **Settings** tab (top navigation)
2. Scroll down to find **Environment variables** section
3. **Note**: The interface may vary:
   - Some accounts show separate sections for Production/Preview/Branch
   - Some accounts show a single "Environment variables" section
   - If you don't see it, look for **Variables** or **Secrets** section

### Step 3: Add Environment Variables

**Note**: In Cloudflare Pages, you may see different options. The interface may show:
- A single "Environment variables" section (not separated by environment)
- Or separate sections for Production/Preview/Branch

**If you see a single section**: Add variables there - they will apply to all environments.

**If you see separate sections**: Add variables to each section (Production, Preview, Branch).

**Add the following variables:**

#### Required Variables:

1. **MONGODB_URI** (or **MONGO_URI**)
   - **Value**: Your MongoDB Atlas connection string
   - **Format**: `mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority`
   - **Example**: `mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`
   - **Note**: Get this from MongoDB Atlas → Connect → Connect your application

2. **EMAILJS_SERVICE_ID**
   - **Value**: Your EmailJS service ID
   - **Where to find**: EmailJS Dashboard → Email Services → Your Service → Service ID

3. **EMAILJS_TEMPLATE_ID**
   - **Value**: Your EmailJS template ID
   - **Where to find**: EmailJS Dashboard → Email Templates → Your Template → Template ID

4. **EMAILJS_PUBLIC_KEY**
   - **Value**: Your EmailJS public key
   - **Where to find**: EmailJS Dashboard → Account → API Keys → Public Key

5. **NEXT_PUBLIC_GOOGLE_MAPS_API_KEY** (Optional but recommended)
   - **Value**: Your Google Maps API key
   - **Where to find**: Google Cloud Console → APIs & Services → Credentials
   - **Note**: This variable starts with `NEXT_PUBLIC_` so it's exposed to the browser

### Step 4: How to Add Each Variable

**Option A: Via Cloudflare Dashboard (Recommended)**

1. In the Environment variables section, click **Add variable** or **Edit variables**
2. Enter the **Variable name** (e.g., `MONGODB_URI`)
3. Enter the **Value** (paste your actual connection string/key)
4. If you see environment checkboxes, enable:
   - ✅ **Production** (for live site)
   - ✅ **Preview** (for preview deployments)  
   - ✅ **Branch** (for branch deployments)
5. Click **Save** or **Add**

**Repeat this for all 5 variables listed above.**

**Option B: Via Wrangler CLI (Alternative Method)**

If the dashboard doesn't work, you can set secrets via Wrangler CLI:

```bash
# Install Wrangler globally (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Set each secret (you'll be prompted to enter the value)
wrangler secret put MONGODB_URI
wrangler secret put EMAILJS_SERVICE_ID
wrangler secret put EMAILJS_TEMPLATE_ID
wrangler secret put EMAILJS_PUBLIC_KEY
wrangler secret put NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
```

**Note**: For Cloudflare Pages, you need to specify the project:
```bash
wrangler pages secret put MONGODB_URI --project-name=your-project-name
```

### Step 5: Verify Variables Are Set

After adding all variables, you should see them listed in the Environment variables section:
- ✅ MONGODB_URI
- ✅ EMAILJS_SERVICE_ID
- ✅ EMAILJS_TEMPLATE_ID
- ✅ EMAILJS_PUBLIC_KEY
- ✅ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

### Step 6: Redeploy Your Site

**Important**: After setting environment variables, you need to trigger a new deployment:

1. Go to **Deployments** tab
2. Click **Retry deployment** on the latest deployment, OR
3. Push a new commit to your repository to trigger automatic deployment

**Note**: Environment variables are only available to new deployments. Existing deployments won't have access to newly added variables.

## Troubleshooting

### Variables Not Working After Deployment?

1. **Check variable names**: Make sure they match exactly (case-sensitive):
   - `MONGODB_URI` not `mongodb_uri`
   - `EMAILJS_SERVICE_ID` not `EMAILJS_SERVICEID`

2. **Verify variables are actually set**:
   - Go to Settings → Environment variables
   - Confirm all 5 variables are listed
   - Check that values are not empty

3. **Redeploy**: Environment variables only apply to new deployments. If you added variables after deployment:
   - Go to **Deployments** tab
   - Click **Retry deployment** on the latest deployment
   - OR push a new commit to trigger automatic deployment

4. **Check if variables are accessible in Workers**:
   - For Next.js on Cloudflare Pages, variables should be accessible via `process.env`
   - If using OpenNext adapter, ensure variables are passed correctly
   - Check deployment logs for any environment variable warnings

5. **Try Wrangler CLI method**:
   - If dashboard method doesn't work, try setting secrets via Wrangler CLI (see Option B above)

4. **Check MongoDB Atlas IP Whitelist**: 
   - Go to MongoDB Atlas → Network Access
   - Add `0.0.0.0/0` to allow all IPs (or add Cloudflare IP ranges)
   - This is required for Cloudflare Workers to connect

5. **Check EmailJS Configuration**:
   - Verify service ID, template ID, and public key are correct
   - Ensure EmailJS service is active

### Still Getting 500 Errors?

1. Check Cloudflare Pages **Function logs**:
   - Go to **Deployments** → Click on a deployment → **View logs**
   - Look for error messages that indicate which variable is missing

2. Test API endpoints directly:
   - Visit `https://your-site.pages.dev/api/emailjs-config`
   - Should return JSON (not 500 error) if variables are set correctly

## Security Notes

- ✅ **Never commit** `.env.local` to Git
- ✅ Environment variables in Cloudflare are encrypted
- ✅ Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- ✅ All other variables are server-side only

## Quick Checklist

Before your site will work, ensure:
- [ ] MONGODB_URI is set in all environments
- [ ] EMAILJS_SERVICE_ID is set in all environments
- [ ] EMAILJS_TEMPLATE_ID is set in all environments
- [ ] EMAILJS_PUBLIC_KEY is set in all environments
- [ ] NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set (optional)
- [ ] New deployment triggered after setting variables
- [ ] MongoDB Atlas IP whitelist allows Cloudflare IPs

---

**After completing these steps, your site should work correctly!** 🎉

