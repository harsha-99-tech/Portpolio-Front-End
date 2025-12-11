# Landing Page Setup

## Photo Setup

To add your photo to the landing page:

1. Place your photo in the `public` folder
2. Name it `my-photo.png` (or update the path in `src/components/LandingPage.tsx`)
3. Recommended size: 800x800px or larger (square aspect ratio)
4. The image will be displayed as a circular profile picture

If the image is not found, a placeholder with initials "HN" will be shown.

## How It Works

1. **Landing Page** (`/`) - Shows the landing page with your photo and introduction
2. **Portfolio** (`/home`) - Shows the main portfolio with all sections

When users click "Continue" on the landing page, they'll be navigated to `/home` where your full portfolio is displayed.

## Customization

### Update Name and Quote

Edit `src/components/LandingPage.tsx`:
- Line 52: Update the name
- Line 55: Update the quote

### Update Photo Path

Edit `src/components/LandingPage.tsx`:
- Line 78: Change `/my-photo.png` to your image path

### Dark Mode

The landing page supports dark mode toggle. The theme preference is saved in localStorage and persists across page reloads.

## Animation

The landing page includes smooth animations:
- Text slides down and fades in
- Image scales up and fades in
- All animations trigger on page load

