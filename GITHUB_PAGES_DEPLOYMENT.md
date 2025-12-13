# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Your repository pushed to GitHub
- GitHub Pages enabled (we'll set this up in the workflow)

## Setup Steps

### 1. Push Your Code to GitHub

If you haven't already, push your code to a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit - ready for GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Configure Environment Variables (Optional)

If you're using EmailJS or Google Maps, you'll need to add these as GitHub Secrets:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets if needed:
   - `EMAILJS_SERVICE_ID` - Your EmailJS service ID
   - `EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
   - `EMAILJS_PUBLIC_KEY` - Your EmailJS public key
   - `GOOGLE_MAPS_API_KEY` - Your Google Maps API key

Then, update `.github/workflows/deploy.yml` to uncomment and use these secrets in the build step.

### 3. Set Base Path (If Needed)

**Important:** If your repository name is NOT your GitHub username (e.g., `username.github.io`), you need to set a base path.

1. Update `.github/workflows/deploy.yml`
2. In the "Build with Next.js" step, uncomment and set:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: /your-repo-name
   ```
   Replace `your-repo-name` with your actual repository name.

**Example:**
- If your repo is `https://github.com/username/portfolio`, set `NEXT_PUBLIC_BASE_PATH: /portfolio`
- If your repo is `https://github.com/username/username.github.io`, you can leave it empty (root domain)

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to the `main` branch

### 5. Trigger Deployment

The deployment will automatically trigger when you:
- Push to the `main` branch
- Manually trigger it from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

## Updating Your Content

### Projects

Edit the project data in `src/data/projects.ts`:
- `appProjects` - App Development projects
- `webProjects` - Web Development projects
- `graphicProjects` - Graphic Design projects
- `uiProjects` - UI Design projects
- `otherProjects` - Other projects

### Testimonials

Edit the testimonials data in `src/data/testimonials.ts`.

### Images

Place project and testimonial images in:
- `public/images/projects/` - For project images
- `public/images/testimonials/` - For testimonial images

Then reference them in your data files (e.g., `/images/projects/my-project.jpg`).

## Local Testing

Before pushing, test the static build locally:

```bash
npm run build:static
```

This will:
1. Temporarily move API routes (which aren't supported in static export)
2. Build the static site
3. Restore the API routes

This will create an `out` folder with the static files. You can serve it locally using:

```bash
npx serve out
```

Or if you have Python installed:
```bash
cd out
python -m http.server 3000
```

Then visit `http://localhost:3000` (or with base path if configured).

## Troubleshooting

### Build Fails

- Check the GitHub Actions logs in the **Actions** tab
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Site Not Loading

- Check if the base path is correctly configured
- Verify GitHub Pages is enabled and set to use GitHub Actions
- Check the deployment logs in the **Actions** tab

### Images Not Showing

- Ensure image paths in your data files are correct
- Images should be in the `public` folder
- Use paths relative to the public folder (e.g., `/images/projects/image.jpg`)

### EmailJS Not Working

- Verify environment variables are set correctly in GitHub Secrets
- Check that the secrets are uncommented in `.github/workflows/deploy.yml`
- Ensure `NEXT_PUBLIC_` prefix is used for all EmailJS variables

## Notes

- API routes will NOT work on GitHub Pages (it's a static site)
- All data is now loaded from static files in `src/data/`
- The site is built as a static export, so all features must work client-side only
- MongoDB connections won't work - use static data files instead

