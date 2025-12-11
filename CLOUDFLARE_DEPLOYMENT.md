# Cloudflare Deployment Guide

This guide will help you deploy your Next.js portfolio to Cloudflare Pages (supports Next.js 16 with API routes via Workers integration).

## Prerequisites

1. A Cloudflare account (free tier works)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. MongoDB Atlas database (already set up)
4. EmailJS account (already set up)

## Step 1: Install Cloudflare Adapter

The `@opennextjs/cloudflare` package has been installed. This adapter allows Next.js 16 to run on Cloudflare Pages (which uses Workers under the hood for API routes and server-side functionality).

## Step 2: Configuration Files

The following files have been created/updated:
- `wrangler.toml` - Cloudflare Workers configuration
- `open-next.config.ts` - OpenNext Cloudflare adapter configuration (required for builds)
  - Includes `default` configuration with `cloudflare-node` wrapper
  - Includes `middleware` configuration with `cloudflare-edge` wrapper for proper Next.js middleware support
- `package.json` - Updated with deployment scripts

## Step 3: Deploy via Cloudflare Dashboard

### Option A: Deploy via Wrangler CLI (Recommended)

1. **Install Wrangler CLI globally** (if not already installed)
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```
   This will open your browser to authenticate with Cloudflare.

3. **Set Environment Variables as Secrets**
   ```bash
   wrangler secret put MONGODB_URI
   # Paste your MongoDB connection string when prompted
   
   wrangler secret put EMAILJS_SERVICE_ID
   # Paste your EmailJS service ID
   
   wrangler secret put EMAILJS_TEMPLATE_ID
   # Paste your EmailJS template ID
   
   wrangler secret put EMAILJS_PUBLIC_KEY
   # Paste your EmailJS public key
   ```

4. **Build and Deploy**
   ```bash
   npm run deploy
   ```
   This will:
   - Build your Next.js app
   - Convert it for Cloudflare Workers
   - Deploy to Cloudflare

5. **Your site will be live at**: `https://portpolio-harsha.YOUR_SUBDOMAIN.pages.dev` (for Pages) or `https://portpolio-harsha.YOUR_SUBDOMAIN.workers.dev` (for Workers)

### Option B: Deploy via Cloudflare Dashboard (Git Integration) - **Recommended for Pages**

1. **Go to Cloudflare Dashboard**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Create application** → **Pages**

2. **Connect Your Repository**
   - Click **Connect to Git**
   - Authorize Cloudflare to access your Git provider
   - Select your repository

3. **Configure Build Settings**
   - **Framework preset**: Select **None** or **Custom** (do NOT use "Next.js" preset as it uses deprecated `@cloudflare/next-on-pages`)
   - **Build command**: `npm run pages:build` (or `npm install && npm run pages:build`)
   - **Build output directory**: `.open-next/cloudflare-static` (This is where OpenNext Cloudflare generates the Pages-compatible output)
   - **Root directory**: `/` (leave empty if root)
   - **Note**: Use `pages:build` (build only), not `deploy` (build + deploy). Cloudflare Pages will handle deployment automatically.
   - **Important**: If Cloudflare auto-detects Next.js and uses `@cloudflare/next-on-pages`, you must manually override the build command to use `npm run pages:build` instead.

4. **Set Environment Variables**
   - Go to **Settings** → **Environment variables**
   - Add each environment variable for **Production**, **Preview**, and **Branch** environments:
     - `MONGODB_URI`
     - `EMAILJS_SERVICE_ID`
     - `EMAILJS_TEMPLATE_ID`
     - `EMAILJS_PUBLIC_KEY`
   - Click **Save** after adding each variable

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for the build to complete

## Step 4: Configure Custom Domain (Optional)

1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains**
3. Add your domain
4. Update your domain's DNS records as instructed by Cloudflare
   - Add a CNAME record pointing to your Pages subdomain

## Important Notes

### Environment Variables
- **Never commit** `.env.local` to Git
- All environment variables must be set in Cloudflare Pages dashboard
- Variables are encrypted and only available at build/runtime

### MongoDB Connection
- Ensure your MongoDB Atlas IP whitelist includes Cloudflare's IP ranges, or set it to `0.0.0.0/0` (allow all)
- Your connection string should be in the format:
  ```
  mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
  ```

### API Routes
- All API routes in `src/app/api/` will work on Cloudflare Pages
- They run as Cloudflare Workers (edge functions) automatically
- Pages integrates Workers seamlessly for serverless functions

### Build Output
- Your Next.js app runs on Cloudflare Workers (edge functions)
- API routes run on Cloudflare's edge network
- Full Next.js features are supported (SSR, API routes, etc.)

## Troubleshooting

### Build Fails
- Check build logs in Cloudflare dashboard
- Ensure all environment variables are set
- Verify Node.js version compatibility (Cloudflare uses Node 18+)
- **Missing `open-next.config.ts`**: If you see an error about missing config file, ensure `open-next.config.ts` exists in your project root. This file is required for the build process.

### API Routes Not Working
- Check that API routes are in `src/app/api/` directory
- Verify environment variables are set correctly
- Check Cloudflare Pages function logs

### MongoDB Connection Issues
- Verify MongoDB Atlas IP whitelist settings
- Check connection string format
- Ensure database user has proper permissions

### EmailJS Not Working
- Verify all three EmailJS environment variables are set
- Check EmailJS dashboard for correct service/template IDs
- Test the `/api/emailjs-config` endpoint

## Post-Deployment

1. **Test Your Site**
   - Visit your Cloudflare Pages URL
   - Test all features (navigation, contact form, project loading)

2. **Monitor Performance**
   - Check Cloudflare Analytics in dashboard
   - Monitor API route performance

3. **Set Up Custom Domain** (if desired)
   - Follow Step 4 above

## Continuous Deployment

Once connected via Git:
- Every push to your main branch triggers a new deployment
- Pull requests get preview deployments automatically
- You can rollback to previous deployments from the dashboard

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare Community](https://community.cloudflare.com/)

