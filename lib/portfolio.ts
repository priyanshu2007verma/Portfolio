export interface Project {
  id: number;
  featured: boolean;

  title: string;
  tagline: string;
  image: string;
  description: string;

  technologies: string[];

  github: string;
  live: string;

  stats?: {
    features: string;
    category: string;
    year: string;
  };

  highlights?: string[];
}
export const hero = {}
export const about = {}
export const skills = [
  {
    category: "Frontend",
    color: "from-cyan-500 to-blue-600",
    technologies: [
      {
        name: "React",
        level: "Advanced",
        progress: 90,
        projects: 5,
      },
      {
        name: "Next.js",
        level: "Intermediate",
        progress: 80,
        projects: 2,
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        progress: 75,
        projects: 2,
      },
      {
        name: "JavaScript",
        level: "Advanced",
        progress: 90,
        projects: 8,
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        progress: 90,
        projects: 6,
      },
    ],
  },

  {
    category: "Backend",
    color: "from-violet-500 to-fuchsia-600",
    technologies: [
      {
        name: "Python",
        level: "Advanced",
        progress: 90,
        projects: 8,
      },
      {
        name: "Flask",
        level: "Intermediate",
        progress: 80,
        projects: 5,
      },
      {
        name: "Node.js",
        level: "Beginner",
        progress: 50,
        projects: 1,
      },
    ],
  },

  {
    category: "Database",
    color: "from-green-500 to-emerald-600",
    technologies: [
      {
        name: "MongoDB",
        level: "Intermediate",
        progress: 75,
        projects: 4,
      },
      {
        name: "SQL",
        level: "Intermediate",
        progress: 70,
        projects: 4,
      },
    ],
  },

  {
    category: "AI",
    color: "from-orange-500 to-red-500",
    technologies: [
      {
        name: "OpenAI API",
        level: "Advanced",
        progress: 90,
        projects: 5,
      },
      {
        name: "Gemini API",
        level: "Advanced",
        progress: 90,
        projects: 4,
      },
      {
        name: "Groq API",
        level: "Advanced",
        progress: 90,
        projects: 3,
      },
    ],
  },

  {
    category: "Tools",
    color: "from-slate-500 to-gray-600",
    technologies: [
      {
        name: "Git",
        level: "Intermediate",
        progress: 75,
        projects: 10,
      },
      {
        name: "GitHub",
        level: "Intermediate",
        progress: 80,
        projects: 10,
      },
      {
        name: "VS Code",
        level: "Advanced",
        progress: 95,
        projects: 20,
      },
      {
        name: "Vercel",
        level: "Intermediate",
        progress: 70,
        projects: 5,
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    featured: true,

    title: "Startup Judge",

    tagline: "AI Startup Validation Platform",

    image: "/projects/startup-judge.png",

    description:
      "Validate startup ideas using AI, analyze competition, estimate market opportunity and generate actionable insights.",

    technologies: [
      "HTML",
      "Flask",
      "MongoDB",
      "Groq",
      "Chart.js",
    ],

    stats: {
      features: "12+",
      category: "AI SaaS",
      year: "2025",
    },

    github: "https://github.com/priyanshu2007verma/Startup-Judge",
    live: "https://startup-judge.onrender.com",

    highlights: [
      "AI Startup Validation",
      "Competition Analysis",
      "Market Insights",
      "Modern Dashboard",
    ],
  },

  {
    id: 2,

    featured: false,

    title: "Internship Tracker Pro",

    tagline: "Productivity Dashboard",

    image: "/projects/internship-tracker.png",

    description:
      "Manage internship applications and monitor progress from one dashboard.",

    technologies: [
      "html",
      "MongoDB",
      "css",
      "Flask",
      "Chart.js",
    ],

    github: "https://github.com/priyanshu2007verma/internship-tracker-pro",

    live: "https://internship-tracker-pro.onrender.com",
  },

  {
    id: 3,

    featured: false,

    title: "Portfolio Website",

    tagline: "Interactive Portfolio",

    image: "/projects/portfolio.png",

    description:
      "Modern developer portfolio built using Next.js, Three.js and Framer Motion.",

    technologies: [
      "Next.js",
      "Three.js",
      "Framer Motion",
      "Tailwind",
    ],

    github: "https://github.com/priyanshu2007verma/Portfolio",

    live: "https://portfolio-qn36.vercel.app/",
  },
];

export const journey = [
  {
    year: "2024",
    title: "Started Programming",
    description:
      "Began learning Python, HTML, CSS and explored software development."
  },

  {
    year: "2025",
    title: "Built Startup Judge",
    description:
      "Created an AI-powered startup validation platform."
  },

  {
    year: "2025",
    title: "Internship Tracker Pro",
    description:
      "Built a dashboard for managing internship applications."
  },

  {
    year: "2026",
    title: "Interactive Portfolio",
    description:
      "Designed a premium portfolio using Next.js and Three.js."
  },

  {
    year: "Present",
    title: "Building Vayonix",
    description:
      "Working toward building AI products with real-world impact."
  }
];

export const milestones = [
  {
    icon: "⚽",
    title: "State Football Player",
    description:
      "Represented my state in competitive football tournaments.",
  },

  {
    icon: "🥈",
    title: "Karate Silver Medalist",
    description:
      "Won a silver medal in a district karate championship.",
  },

  {
    icon: "💻",
    title: "10+ Projects Built",
    description:
      "Developed AI, dashboard, portfolio and full-stack applications.",
  },

  {
    icon: "🚀",
    title: "Future Startup Founder",
    description:
      "Building AI-first products with the vision of creating Vayonix.",
  },
];
export const contact = {
  title: "Let's Build Something Amazing",

  subtitle:
    "Whether it's an internship, startup, freelance project or just a conversation about AI, I'd love to connect.",

  email: "priyanshu2007verma@gmail.com",

  github: "https://github.com/priyanshu2007verma",

  linkedin: "www.linkedin.com/in/priyanshu-verma-854774404",

  resume: "/resume.pdf"
};