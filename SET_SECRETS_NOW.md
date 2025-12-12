# Set Secrets Using Wrangler CLI - Follow These Steps

## ✅ Step 1: Login to Cloudflare

Run this command:
```bash
wrangler login
```

This will open your browser. Click "Allow" to authenticate.

## ✅ Step 2: Find Your Project Name

Your Cloudflare Pages project name is likely: **`harsha-nawana`** (based on your site URL `harsha-nawana.pages.dev`)

If different, check:
- Cloudflare Dashboard → Workers & Pages → Pages → Your Project Name
- Or your site URL: `https://YOUR-PROJECT-NAME.pages.dev`

## ✅ Step 3: Set Each Secret

Run these commands one by one. **You'll be prompted to paste each value:**

```bash
# MongoDB Connection String
wrangler pages secret put MONGODB_URI --project-name=harsha-nawana

# EmailJS Service ID
wrangler pages secret put EMAILJS_SERVICE_ID --project-name=harsha-nawana

# EmailJS Template ID
wrangler pages secret put EMAILJS_TEMPLATE_ID --project-name=harsha-nawana

# EmailJS Public Key
wrangler pages secret put EMAILJS_PUBLIC_KEY --project-name=harsha-nawana

# Google Maps API Key (optional)
wrangler pages secret put NEXT_PUBLIC_GOOGLE_MAPS_API_KEY --project-name=harsha-nawana
```

**For each command:**
1. It will ask: `Enter the secret value for VARIABLE_NAME:`
2. **Paste your value** (it won't show on screen for security)
3. Press **Enter**
4. You'll see: `✨ Success! Uploaded secret VARIABLE_NAME`

## ✅ Step 4: Verify Secrets

Check that all secrets are set:
```bash
wrangler pages secret list --project-name=harsha-nawana
```

You should see all 5 secrets listed (values are hidden for security).

## ✅ Step 5: Trigger New Deployment

**IMPORTANT**: Secrets only work on NEW deployments!

1. Go to: https://dash.cloudflare.com/
2. Navigate to: **Workers & Pages** → **Pages** → **harsha-nawana** (or your project name)
3. Click **Deployments** tab
4. Click **Retry deployment** on the latest deployment
5. Wait for deployment to complete (2-3 minutes)

## ✅ Step 6: Test

After deployment completes, test:
- Visit: `https://harsha-nawana.pages.dev/api/test-env`
- Should show all variables as `true`
- Visit: `https://harsha-nawana.pages.dev/api/emailjs-config`
- Should return JSON with serviceId, templateId, publicKey (not an error)

---

## Troubleshooting

### "Project not found" error?
- Check your project name: `wrangler pages project list`
- Use the exact name shown

### "Authentication required" error?
- Run `wrangler login` again

### Secrets set but still not working?
- Make sure you triggered a NEW deployment (Step 5)
- Check deployment logs for errors
- Verify secret names are exact (case-sensitive)

