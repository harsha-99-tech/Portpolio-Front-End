# Images Directory

This directory contains all static images for your portfolio.

## Folder Structure

```
public/images/
├── projects/          # Project images
│   ├── app-project-1.jpg
│   ├── web-project-1.jpg
│   ├── graphic-project-1.jpg
│   ├── ui-project-1.jpg
│   └── other-project-1.jpg
└── testimonials/     # Testimonial profile images
    ├── john-doe.jpg
    ├── jane-smith.jpg
    └── mike-johnson.jpg
```

## How to Add Images

1. **Place your image files** in the appropriate folder:
   - Project images → `public/images/projects/`
   - Testimonial images → `public/images/testimonials/`

2. **Update the data files** with the correct image paths:
   - Projects: Edit `src/data/projects.ts`
   - Testimonials: Edit `src/data/testimonials.ts`

3. **Image path format**:
   - Local files: `/images/projects/your-image.jpg` (starts with `/`)
   - External URLs: `https://example.com/image.jpg`
   - Base64: `data:image/jpeg;base64,/9j/4AAQSkZJRg...`

## Image Requirements

- **Recommended formats**: JPG, PNG, WebP
- **Project images**: Recommended size 800x600px or similar aspect ratio
- **Testimonial images**: Recommended size 200x200px (square, will be displayed as circles)

## Example

If you add an image file `my-app-screenshot.jpg` to `public/images/projects/`, 
reference it in `src/data/projects.ts` as:

```typescript
image: "/images/projects/my-app-screenshot.jpg"
```

