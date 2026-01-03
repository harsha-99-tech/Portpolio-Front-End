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
    project: "TechBet – Community Q&A App",
    description:
      "A Stack Overflow-style mobile app where developers post questions, share answers, and discuss solutions in real time using Firebase auth and backend.",
    link: "https://github.com/TecBet/QnA_App", // replace with your live demo or GitHub URL
    technologies: ["Flutter", "Dart", "Firebase"],
    tools: ["Android Studio", "Firebase Console", "Git"],
    image: "/images/projects/techbet-community-qa.jpg",
    createdAt: new Date("2023-12-01").toISOString(),
    updatedAt: new Date("2024-02-01").toISOString(),
  },
  {
    _id: "2",
    id: "2",
    project: "ClipFlow – Video Sharing App",
    description:
      "A React Native video sharing app with user auth, video upload/playback, bookmarking, and topic-based search.",
    link: "https://github.com/harsha-99-tech/Video-App", // replace with your live demo or GitHub URL
    technologies: ["React Native", "Expo", "Appwrite", "NativeWind"],
    tools: ["VS Code", "Git", "Android Studio"],
    image: "/images/projects/clipflow-video-sharing-app.jpg",
    createdAt: new Date("2024-04-01").toISOString(),
    updatedAt: new Date("2024-07-01").toISOString(),
  },
  {
    _id: "3",
    id: "3",
    project: "E-Library Mobile App",
    description:
      "A React Native e-library app for uploading, reading, and sharing books with Firebase-backed storage and auth.",
    link: "https://github.com/harsha-99-tech/E-Library", // replace with your live demo or GitHub URL
    technologies: ["React Native", "Expo", "Firebase"],
    tools: ["VS Code", "Git", "Android Studio"],
    image: "/images/projects/e-library-mobile-app.jpg",
    createdAt: new Date("2024-05-01").toISOString(),
    updatedAt: new Date("2024-08-01").toISOString(),
  }
];

// Web Development Projects
export const webProjects: StaticProject[] = [
  {
    _id: "5",
    id: "5",
    project: "Expense Tracker Web App",
    description:
      "A Next.js web app for tracking personal expenses with local storage, import/export functionality, expense categorization, and data visualization using charts.",
    link: "https://novo-digital-sollutions.github.io/Expense-Tracker/", // replace with your real demo / GitHub link
    technologies: ["Next.js", "React.js", "HTML5", "CSS3", "JavaScript"],
    tools: ["VS Code", "Git"],
    image: "/images/projects/expense-tracker-web-app.jpg", // path to this screenshot in your project
    createdAt: new Date("2020-09-01").toISOString(),
    updatedAt: new Date("2020-10-01").toISOString(),
  },
    {
    _id: "6",
    id: "6",
    project: "Taste of Heaven – Restaurant Website",
    description:
      "A responsive restaurant website showcasing Taste of Heaven with a modern landing page, interactive food menu, and detailed restaurant locations across Sri Lanka (e.g., Colombo). Built to provide seamless food browsing and doorstep delivery information with engaging imagery and clear call-to-action sections.",
    link: "https://harsha-99-tech.github.io/Fav-Food-Rest/", // replace with your real demo / GitHub link
    technologies: ["HTML5", "CSS3", "JavaScript"],
    tools: ["VS Code", "Git"],
    image: "/images/projects/taste-of-heaven-restaurant.jpg", // path to this screenshot in your project
    createdAt: new Date("2020-09-01").toISOString(),
    updatedAt: new Date("2020-10-01").toISOString(),
  },
  {
    _id: "7",
    id: "7",
    project: "University Sports Management System",
    description:
      "A web-based system for managing university sports, including player registrations, schedules, notices, and equipment inventory with an admin dashboard.",
    link: "https://github.com/harsha-99-tech/Sport_Management_Site", // replace with your live demo or GitHub URL
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    tools: ["XAMPP", "phpMyAdmin", "VS Code", "Git"],
    image: "/images/projects/university-sports-management-system.jpg",
    createdAt: new Date("2022-01-01").toISOString(),
    updatedAt: new Date("2022-03-01").toISOString(),
  },
  {
    _id: "8",
    id: "8",
    project: "Harsha Nawana – Portfolio (Old)",
    description:
      "A React-based personal portfolio with smooth animations, project showcases, and an EmailJS-powered contact form.",
    link: "https://harshanawana.pages.dev", // replace with your live demo or GitHub URL
    technologies: ["React.js", "EmailJS", "HTML5", "CSS3"],
    tools: ["VS Code", "Git"],
    image: "/images/projects/harsha-nawana-portfolio-old.jpg",
    createdAt: new Date("2024-06-01").toISOString(),
    updatedAt: new Date("2024-08-01").toISOString(),
  },
  {
    _id: "9",
    id: "9",
    project: "World Vision Lanka – Rideegama AP",
    description:
      "A MERN-based web platform for visualizing Rideegama Area Programme projects, with Google Maps integration and EmailJS-powered contact.",
    link: "https://github.com/harsha-99-tech/WVL-Site", // replace with your live demo or GitHub URL
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Maps API", "EmailJS"],
    tools: ["Postman", "VS Code", "Git"],
    image: "/images/projects/world-vision-rideegama-ap.jpg",
    createdAt: new Date("2024-08-01").toISOString(),
    updatedAt: new Date("2025-01-01").toISOString(),
  },
  {
    _id: "10",
    id: "10",
    project: "Filet Gourmet – E‑Commerce Website",
    description:
      "A WordPress WooCommerce store for Filet Gourmet with custom React/TypeScript plugins for enhanced shopping and subscriptions.",
    link: "https://filetgourmet.empowerdigitaldata.com",
    technologies: ["WordPress", "WooCommerce", "React", "TypeScript", "JavaScript", "php"],
    tools: ["VS Code", "Git", "Figma"],
    image: "/images/projects/filet-gourmet-ecommerce.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust dates if you want
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "11",
    id: "11",
    project: "Maison Rolland – E‑Commerce Website",
    description:
      "A WordPress WooCommerce bakery store with custom React and PHP plugins for tailored product and order experiences.",
    link: "https://patisserie-rolland.empowerdigitaldata.com",
    technologies: ["WordPress", "WooCommerce", "React", "PHP"],
    tools: ["VS Code", "Git"],
    image: "/images/projects/maison-rolland-ecommerce.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "12",
    id: "12",
    project: "MedirAI – Marketing Website",
    description:
      "A WordPress site presenting MedirAI’s healthcare AI platform with product, clinician, and contact pages.",
    link: "https://medirai.com",
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    tools: ["Elementor", "VS Code"],
    image: "/images/projects/medirai-website.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "13",
    id: "13",
    project: "RaceData – Marketing Website",
    description:
      "A WordPress marketing site showcasing RaceData’s digital products, services, and solutions with lead‑generation contact flows.",
    link: "https://racedata.mdatazone.com",
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    tools: ["Elementor", "VS Code"],
    image: "/images/projects/racedata-website.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "14",
    id: "14",
    project: "Bar Figata – Restaurant Website",
    description:
      "A WordPress-powered website for Bar Figata featuring menu, reservations, and contact pages with a premium brand-focused design.",
    link: "https://barfigata.empowerdigitaldata.com",
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    tools: ["Elementor", "VS Code"],
    image: "/images/projects/bar-figata-website.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "15",
    id: "15",
    project: "Maison du Fort – Hotel Website",
    description:
      "A WordPress hotel site showcasing rooms, concept, and booking options with a high-end visual design.",
    link: "https://room-dev.empowerdigitaldata.com",
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    tools: ["Elementor", "VS Code"],
    image: "/images/projects/maison-du-fort-website.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "16",
    id: "16",
    project: "Empower – Agency Website",
    description:
      "A WordPress site for Empower, highlighting AI‑driven marketing services, case studies, and contact funnels.",
    link: "https://www.empower.social",
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    tools: ["Elementor", "VS Code"],
    image: "/images/projects/empower-agency-website.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  }
];

// Graphic Design Projects
export const graphicProjects: StaticProject[] = [
  {
    _id: "12",
    id: "12",
    project: "Brand Identity Design",
    description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup",
    link: "https://example.com/design1",
    technologies: ["Illustrator", "Photoshop", "InDesign"],
    tools: ["Adobe Creative Suite", "Figma"],
    image: "/images/projects/brand-identity.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "13",
    id: "13",
    project: "Poster Design Collection",
    description: "A series of modern poster designs for music festivals with vibrant colors and typography",
    link: "https://example.com/design2",
    technologies: ["Photoshop", "Illustrator"],
    tools: ["Adobe Creative Suite"],
    image: "/images/projects/poster-design.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "14",
    id: "14",
    project: "Packaging Design",
    description: "Creative packaging design for a premium coffee brand with sustainable materials focus",
    link: "https://example.com/design3",
    technologies: ["Illustrator", "Photoshop", "3D Rendering"],
    tools: ["Adobe Creative Suite", "Blender"],
    image: "/images/projects/packaging-design.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "15",
    id: "15",
    project: "Social Media Graphics",
    description: "A complete set of social media graphics and templates for brand consistency across platforms",
    link: "https://example.com/design4",
    technologies: ["Photoshop", "Illustrator", "Canva"],
    tools: ["Adobe Creative Suite", "Canva Pro"],
    image: "/images/projects/social-media-graphics.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "16",
    id: "16",
    project: "Magazine Layout Design",
    description: "Editorial design for a lifestyle magazine with creative layouts and typography",
    link: "https://example.com/design5",
    technologies: ["InDesign", "Photoshop", "Illustrator"],
    tools: ["Adobe Creative Suite"],
    image: "/images/projects/magazine-layout.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// UI Design Projects
export const uiProjects: StaticProject[] = [
  {
    _id: "35",
    id: "35",
    project: "World Vision Lanka – Rideegama UI Design",
    description:
      "A Figma UI concept for the Rideegama Area Programme site, featuring project tabs, galleries, map integration, and a contact section.",
    link: "https://www.figma.com/design/6izadiJOlTYYddwGhpMm57/WVL-Rideegama?node-id=0-1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/wvl-rideegama-ui-design.jpg",
    createdAt: new Date("2024-08-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "36",
    id: "36",
    project: "FCP Tires – Newsletter UI Design",
    description:
      "A Figma newsletter layout for FCP Tires, highlighting premium wheels with bold imagery and clean content sections.",
    link: "https://www.figma.com/proto/HWlmRcsfFV9ZzhTVI4NTpI/FCP?node-id=1-1605&p=f&t=DwPSH4LprTzpdZEg-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/fcp-tires-newsletter-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "37",
    id: "37",
    project: "Envisionarc – Push Notification UI",
    description:
      "A Figma UI for managing mobile push templates with live iOS/Android preview and platform-specific settings.",
    link: "https://www.figma.com/proto/rqWmY69ShfzT3q9SMgmPZC/Push-UI-UX-concepts?t=DwPSH4LprTzpdZEg-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/envisionarc-push-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "38",
    id: "38",
    project: "EnvisionARC – Filters UI",
    description:
      "A Figma dashboard UI for managing users with advanced multi-criteria filters, search, and inline actions.",
    link: "https://www.figma.com/proto/G40GZaHJM5Lgr56m6CxoWj/Filters?node-id=1-2&p=f&t=o8m2jMr5zb5MeBQw-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/envisionarc-filters-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "39",
    id: "39",
    project: "EnvisionARC – Contact Management UI",
    description:
      "A Figma dashboard UI for managing contacts with filters, bulk actions, pagination, and export options.",
    link: "https://www.figma.com/proto/66CUu33Y92C6J6nRgROy9d/EnvisionARC-Contact-Management?node-id=3-206&p=f&t=BRltRuBlqTXX6Faf-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/envisionarc-contact-management-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "40",
    id: "40",
    project: "Mondo Payments – Email Template UI",
    description:
      "A Figma marketing email template for Mondo Payments, featuring bold hero imagery, offer highlights, and clear CTAs.",
    link: "https://www.figma.com/proto/7vbWxAFlbIxwvITgDTPjv5/Mondo-Payments-Email-Template?node-id=196-24&p=f&t=6CWNI6CXZFEto6iv-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/mondo-payments-email-template-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "41",
    id: "41",
    project: "Maple Leaf Club – Privilege Card UI",
    description:
      "A Figma UI for the Maple Leaf Club digital privilege card with clear instructions and Google Wallet integration CTA.",
    link: "https://www.figma.com/proto/oCfyBgUFjjAs9Pnry0Gqvu/Maple-Leaf-Lounge?node-id=14-232&p=f&t=uj5759xJnbW5fzaq-0&scaling=min-zoom&content-scaling=fixed&page-id=14%3A231",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/maple-leaf-club-privilege-card-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "42",
    id: "42",
    project: "Mondo Payments – Website UI",
    description:
      "A Figma website UI for Mondo Payments highlighting POS solutions, pricing, and onboarding with a clean SaaS layout.",
    link: "https://www.figma.com/proto/QTtvghll2ieNl9RCT5pgpK/MondoPayments?node-id=4-44&p=f&t=OP5f9P0CgIgLUNBM-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A44&show-proto-sidebar=1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/mondo-payments-website-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "43",
    id: "43",
    project: "MedirAI – Email Template UI",
    description:
      "A Figma email template for MedirAI updates, featuring milestone highlights, timelines, and a clean healthcare-focused layout.",
    link: "https://www.figma.com/proto/6jsL0aRbrYHBCH6PjHSucw/MedirAI-Email-Template?node-id=1-2&p=f&t=O37BCjqiuPmkTsQW-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/medirai-email-template-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "44",
    id: "44",
    project: "MedirAI – Newsletter UI",
    description:
      "A Figma newsletter layout for MedirAI sharing product updates, insights, and training announcements in a clean editorial style.",
    link: "https://www.figma.com/proto/ffEuOPFhdZA6yMDzAbq530/MedirAI-Email-Template---2?node-id=1-2&p=f&t=JxSZpy0GCl6UWiUy-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/medirai-newsletter-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "45",
    id: "45",
    project: "RaceData – Website UI (Template 02)",
    description:
      "A Figma marketing site UI for RaceData showcasing analytics products, services, and meeting scheduling.",
    link: "https://www.figma.com/proto/U4P8Q5aXuGMQqitH61Tfw5/RACEDATA-WEB-Temp-02?node-id=6-24622&p=f&t=Ue5C0dLcIxoOW7tV-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/racedata-website-ui-template-2.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "46",
    id: "46",
    project: "E-Library – Mobile UI",
    description:
      "A Figma mobile UI for an e-library app, featuring an immersive onboarding screen and modern reading-focused layout.",
    link: "https://www.figma.com/proto/DnbMVomTl7pQZrw0SkMDtY/E-Library?node-id=4005-542&p=f&t=0pPaisSvpnd87rOp-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/e-library-mobile-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "47",
    id: "47",
    project: "ROST – Website UI",
    description:
      "A Figma website UI for the Robotic Society of Technology at Rajarata University, featuring a hero welcome section and news/community pages.",
    link: "https://www.figma.com/proto/8oq7khU72utLE53wPteyrT/ROST-Site?node-id=39-44&p=f&t=8xhz5CE3xrk1spVD-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    technologies: ["Figma"],
    tools: ["Figma"],
    image: "/images/projects/rost-website-ui.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  }
];

// Other Projects
export const otherProjects: StaticProject[] = [
  {
    _id: "50",
    id: "50",
    project: "Mondo Payments – Stripo Email Template",
    description:
      "A responsive promotional email for Mondo Payments, built in Stripo with custom HTML/CSS.",
    link: "https://viewstripo.email/7271cbc3-b131-43fa-80e9-b7f6e3e2473f1759337314473",
    technologies: ["HTML5", "CSS3", "Stripo"],
    tools: ["Stripo", "VS Code"],
    image: "/images/projects/mondo-payments-stripo-email.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "51",
    id: "51",
    project: "Parma Café – Stripo Email Template",
    description:
      "A festive promotional email for Parma Café, coded in Stripo with custom HTML/CSS and tested via Email on Acid.",
    link: "https://viewstripo.email/9066c81c-54a1-410e-9303-6ca652732d8e1763760902677",
    technologies: ["HTML5", "CSS3", "Stripo"],
    tools: ["Stripo", "Email on Acid", "VS Code"],
    image: "/images/projects/parma-cafe-stripo-email.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "52",
    id: "52",
    project: "Mondo Payments – Stripo Newsletter",
    description:
      "A responsive promotional newsletter for Mondo Payments, built in Stripo and validated with Email on Acid.",
    link: "https://viewstripo.email/c4990202-5204-46ba-bcdd-48688f48f22a1759770964971",
    technologies: ["HTML5", "CSS3", "Stripo"],
    tools: ["Stripo", "Email on Acid", "VS Code"],
    image: "/images/projects/mondo-payments-stripo-newsletter.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "53",
    id: "53",
    project: "Novartis Pro Portal – Stripo Email",
    description:
      "A Stripo-built healthcare newsletter promoting refreshed portal content, tested across clients with Email on Acid.",
    link: "https://viewstripo.email/0e5d681c-eb24-4e15-b5e5-a882af89da0f1764172009792",
    technologies: ["HTML5", "CSS3", "Stripo"],
    tools: ["Stripo", "Email on Acid", "VS Code"],
    image: "/images/projects/novartis-pro-portal-stripo-email.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  },
  {
    _id: "54",
    id: "54",
    project: "Maison l’étincelle – Stripo Email",
    description:
      "A Stripo-based newsletter for Maison l’étincelle highlighting services and community support for seniors.",
    link: "https://viewstripo.email/d8fe3144-1c7f-47ad-b88d-9cfbbdb4a31d1765554887185",
    technologies: ["HTML5", "CSS3", "Stripo"],
    tools: ["Stripo", "VS Code"],
    image: "/images/projects/maison-letincelle-stripo-email.jpg",
    createdAt: new Date("2024-01-01").toISOString(), // adjust if needed
    updatedAt: new Date("2024-12-01").toISOString(),
  }
];

// Export projects by category
export const projectsByCategory: Record<string, StaticProject[]> = {
  app: appProjects,
  web: webProjects,
  graphic: graphicProjects,
  ui: uiProjects,
  ot: otherProjects,
};

