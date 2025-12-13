# Image Fix for Cloudflare Pages

## Changes Made

1. **Updated `scripts/setup-pages.js`**:
   - Fixed path collection for public folder files
   - Added wildcard patterns for image file extensions (`/*.png`, `/*.jpg`, etc.)
   - Added `/images/*` pattern to exclude all images directory files

2. **Updated `next.config.ts`**:
   - Removed `output: 'export'` (OpenNext handles output configuration)
   - Kept `unoptimized: true` for images (required for Cloudflare Pages)

## How Images Work on Cloudflare Pages

- Images in the `public` folder are copied to `.open-next` during build
- Images are excluded from Worker routing via `_routes.json`
- Images are served directly by Cloudflare's CDN (faster and more reliable)
- Next.js Image component works with `unoptimized: true`

## Image Paths

Your images should be referenced as:
- `/my-photo.png` (for files in `public/` root)
- `/images/projects/project-1.jpg` (for files in `public/images/projects/`)
- `/images/testimonials/person.jpg` (for files in `public/images/testimonials/`)

## After Deployment

1. **Rebuild your project**:
   ```bash
   npm run pages:build
   ```

2. **Check `_routes.json`** in `.open-next/`:
   - Should include wildcard patterns like `/*.png`, `/*.jpg`
   - Should include `/images/*`
   - Should list all your specific image files

3. **Verify images are copied**:
   - Check `.open-next/my-photo.png` exists
   - Check `.open-next/images/` directory exists with your images

4. **Redeploy to Cloudflare Pages**

## Troubleshooting

If images still don't show:

1. **Check browser console** for 404 errors on image paths
2. **Verify image files exist** in `public/` folder
3. **Check Cloudflare Pages build logs** to see if images were copied
4. **Verify `_routes.json`** excludes your image paths
5. **Try accessing image directly**: `https://your-site.pages.dev/my-photo.png`

## Common Issues

- **404 errors**: Image paths might be incorrect or images not copied
- **Worker errors**: Images might not be excluded from routing (check `_routes.json`)
- **Next.js Image optimization errors**: Should be disabled with `unoptimized: true`

