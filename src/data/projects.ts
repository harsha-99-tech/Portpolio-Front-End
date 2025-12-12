// Static projects data - replace with your actual project data

export interface StaticProject {
  _id: string;
  id: string;
  project: string;
  description: string;
  link: string;
  technologies: string[];
  tools: string[];
  image?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

// App Development Projects
export const appProjects: StaticProject[] = [
  {
    _id: "1",
    id: "1",
    project: "Sample Mobile App",
    description: "A beautiful mobile application built with React Native",
    link: "https://example.com/app",
    technologies: ["React Native", "TypeScript", "Firebase"],
    tools: ["VS Code", "Expo"],
    // Image options:
    // 1. Local file in public folder: "/images/projects/app-project-1.jpg"
    // 2. External URL: "https://example.com/image.jpg"
    // 3. Base64 data URI: "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
    image: "/images/projects/app-project-1.jpg", // Replace with your image path
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more app projects here
];

// Web Development Projects
export const webProjects: StaticProject[] = [
  {
    _id: "2",
    id: "2",
    project: "Sample Web App",
    description: "A modern web application built with Next.js",
    link: "https://example.com/web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    tools: ["VS Code", "Git"],
    image: "/images/projects/web-project-1.jpg", // Replace with your image path
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more web projects here
];

// Graphic Design Projects
export const graphicProjects: StaticProject[] = [
  {
    _id: "3",
    id: "3",
    project: "Sample Design",
    description: "A creative graphic design project",
    link: "https://example.com/design",
    technologies: ["Photoshop", "Illustrator"],
    tools: ["Adobe Creative Suite"],
    image: "/images/projects/graphic-project-1.jpg", // Replace with your image path
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more graphic design projects here
];

// UI Design Projects
export const uiProjects: StaticProject[] = [
  {
    _id: "4",
    id: "4",
    project: "Sample UI Design",
    description: "A modern UI/UX design project",
    link: "https://example.com/ui",
    technologies: ["Figma", "Adobe XD"],
    tools: ["Figma", "Sketch"],
    image: "/images/projects/ui-project-1.jpg", // Replace with your image path
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more UI design projects here
];

// Other Projects
export const otherProjects: StaticProject[] = [
  {
    _id: "5",
    id: "5",
    project: "Sample Other Project",
    description: "Another interesting project",
    link: "https://example.com/other",
    technologies: ["Various"],
    tools: ["Various"],
    image: "/images/projects/other-project-1.jpg", // Replace with your image path
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more other projects here
];

// Export projects by category
export const projectsByCategory: Record<string, StaticProject[]> = {
  app: appProjects,
  web: webProjects,
  graphic: graphicProjects,
  ui: uiProjects,
  ot: otherProjects,
};

