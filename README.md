# Harsha's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and CSS Modules.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section (stored in MongoDB)
- 📧 Contact form
- 🌙 Dark theme optimized
- 🗄️ MongoDB integration for dynamic project data

## Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Personal information and technologies
3. **Skills** - Technical skills with progress indicators
4. **Projects** - Featured projects showcase
5. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- MongoDB database (MongoDB Atlas recommended for cloud hosting)

### Installation

1. Navigate to the project directory:
```bash
cd portpolio-harsha
```

2. Install dependencies:
```bash
npm install
```

3. Set up MongoDB:
   - Create a MongoDB database (use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for free cloud hosting)
   - Get your MongoDB connection string
   - Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
   Replace `username`, `password`, and `cluster` with your actual MongoDB credentials.

4. Seed the database with sample projects (optional):
   ```bash
   # Make a POST request to seed endpoint
   # You can use curl, Postman, or visit: http://localhost:3000/api/projects/seed
   # Or use this PowerShell command:
   Invoke-WebRequest -Uri http://localhost:3000/api/projects/seed -Method POST
   ```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

- Edit `src/components/Hero.tsx` - Update name and title
- Edit `src/components/About.tsx` - Update bio and technologies
- Edit `src/components/Skills.tsx` - Update skills list and proficiency levels
- Projects are now stored in MongoDB. Use the API to manage projects:
  - GET `/api/projects` - Fetch all featured projects
  - POST `/api/projects` - Create a new project
  - POST `/api/projects/seed` - Seed database with sample projects
- Edit `src/components/Contact.tsx` - Update social links and email

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Each component has its own `.module.css` file
- Color scheme: Update CSS variables in `globals.css`

### Add Your Photo

Replace the placeholder in `src/components/About.tsx` with your actual photo.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portpolio-harsha/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── projects/
│   │   │       ├── route.ts      # API route for projects (GET, POST)
│   │   │       └── seed/
│   │   │           └── route.ts   # API route to seed database
│   │   ├── layout.tsx            # Root layout with Navbar and Footer
│   │   ├── page.tsx              # Main page with all sections
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Hero.tsx              # Hero section
│   │   ├── About.tsx             # About section
│   │   ├── Skills.tsx            # Skills section
│   │   ├── Projects.tsx          # Projects section (fetches from API)
│   │   ├── Contact.tsx           # Contact section
│   │   └── Footer.tsx            # Footer
│   ├── lib/
│   │   └── mongodb.ts            # MongoDB connection utility
│   └── models/
│       └── Project.ts            # Project Mongoose model
├── public/                       # Static assets
├── .env.local                    # Environment variables (create this)
└── package.json
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Geist Font** - Modern typography
- **MongoDB** - Database for projects
- **Mongoose** - MongoDB object modeling

## Managing Projects

### Add a New Project

You can add projects via the API:

```bash
POST /api/projects
Content-Type: application/json

{
  "title": "Project Name",
  "description": "Project description",
  "tech": ["React", "Node.js", "MongoDB"],
  "github": "https://github.com/username/repo",
  "live": "https://project-demo.com",
  "featured": true
}
```

### Project Schema

```typescript
{
  title: string (required)
  description: string (required)
  tech: string[] (required)
  github: string (required)
  live: string (required)
  image?: string (optional)
  featured: boolean (default: true)
}
```

## License

This project is open source and available for personal use.
