import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { APP, WEB, GRAPHIC, UI, OT } from '@/models/Project';

/**
 * Maps category names to their respective Mongoose models.
 */
const getModelByCategory = (category: string) => {
  switch (category) {
    case 'app':
      return APP;
    case 'web':
      return WEB;
    case 'graphic':
      return GRAPHIC;
    case 'ui':
      return UI;
    case 'ot':
      return OT;
    default:
      return null;
  }
};

const seedProjects = [
  // App Development Projects
  {
    project: "Mobile Task Manager",
    description: "A comprehensive task management mobile application with real-time synchronization.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    tools: ["VS Code", "Git", "Postman"],
    link: "https://example.com/task-manager",
    category: "app",
  },
  {
    project: "Fitness Tracker App",
    description: "Track your workouts and monitor your fitness progress with this intuitive app.",
    technologies: ["Flutter", "Firebase", "Dart"],
    tools: ["Android Studio", "Figma"],
    link: "https://example.com/fitness-tracker",
    category: "app",
  },
  // Web Development Projects
  {
    project: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    tools: ["VS Code", "Git", "MongoDB Compass"],
    link: "https://example.com/ecommerce",
    category: "web",
  },
  {
    project: "Social Media Dashboard",
    description: "Manage multiple social media accounts from one comprehensive dashboard.",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    tools: ["VS Code", "Git", "Figma"],
    link: "https://example.com/social-dashboard",
    category: "web",
  },
  // Graphic Design Projects
  {
    project: "Brand Identity Package",
    description: "Complete brand identity design including logo, color palette, and typography.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    tools: ["Adobe Creative Suite", "Figma"],
    link: "https://example.com/brand-identity",
    category: "graphic",
  },
  // UI Design Projects
  {
    project: "Mobile Banking App UI",
    description: "Modern and intuitive user interface design for a mobile banking application.",
    technologies: ["Figma", "Adobe XD"],
    tools: ["Figma", "Adobe XD", "Illustrator"],
    link: "https://example.com/banking-ui",
    category: "ui",
  },
];

export async function POST() {
  try {
    await connectDB();
    
    const results = [];
    
    // Group projects by category
    const projectsByCategory = seedProjects.reduce((acc, project) => {
      const category = project.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(project);
      return acc;
    }, {} as Record<string, typeof seedProjects>);
    
    // Insert projects into their respective collections
    for (const [category, projects] of Object.entries(projectsByCategory)) {
      const model = getModelByCategory(category);
      if (model) {
        // Remove category field before inserting (it's not part of the schema)
        const projectsToInsert = projects.map(({ category, ...rest }) => rest);
        const inserted = await model.insertMany(projectsToInsert);
        results.push(...inserted);
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: `Successfully seeded ${results.length} projects`,
        data: results 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error seeding projects:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to seed projects' },
      { status: 500 }
    );
  }
}

