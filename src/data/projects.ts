export type Project = {
  slug: string;
  title: string;
  subtitle: string;

  status?: 'in-progress' | 'live';

  role?: string;
  timeline?: string;
  tools?: string[];
  tags?: string[];

  // card / hero visuals
  coverImage?: string;

  // case study sections
  overview?: string;
  challenge?: string;
  process?: string[];
  results?: string[];
  reflection?: string;

  // main media
  heroVideo?: { type: 'file' | 'youtube'; src: string };

  // additional demo videos
  demoVideos?: {
    title: string;
    description?: string;
    video: { type: 'file' | 'youtube'; src: string };
  }[];

  // documents like personas, ML notebooks, PDFs
  documents?: { label: string; href: string }[];

  // before / after visuals
  beforeAfter?: {
    beforeLabel?: string;
    afterLabel?: string;
    beforeImage: string;
    afterImage: string;
  };

  // image gallery
  gallery?: { src: string; alt: string }[];

  // links (github, slides, live site)
  links?: { label: string; href: string }[];
};



export const projects: Project[] = [
  {
    slug: 'career-launch',
    title: 'Career Launch',
    subtitle:
      'A student-first redesign that made career resources clearer, more consistent, and easier to navigate across majors.',
    role: 'Website Designer / UX (Brightspot CMS)',
    timeline: '2024–2025',
    tools: [
      'Brightspot CMS',
      'Figma',
      'Content Strategy',
      'Stakeholder Collaboration',
      'User Feedback / Iteration'
    ],
    tags: ['UX', 'Web Design', 'Case Study'],

    coverImage: '/images/careerLaunch/byubcc.jpg',

    beforeAfter: {
      beforeLabel: 'Before',
      afterLabel: 'After',
      beforeImage: '/images/careerLaunch/before.png',
      afterImage: '/images/careerLaunch/after.png'
    },

    heroVideo: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/ZdTraEA0jE4?rel=0&modestbranding=1'
    },

    overview:
      "Career Launch is a student-facing website experience designed to help students quickly understand career pathways, deadlines, and next steps. My focus was building a clear student story—what a student is trying to do, what they need at each step, and how we can make that process feel simple instead of overwhelming.",

    challenge:
      "The biggest challenge was clarity at scale: the site needed to work across majors, stay consistent, and still feel intuitive. That meant simplifying content, streamlining navigation, and aligning with multiple stakeholders—while meeting the requirements needed for an outward-facing, officially approved experience.",

    process: [
      'Discovery: mapped the student journey and identified where students were getting stuck',
      'Content + IA: simplified language and restructured pages so key actions were easier to find',
      'Design: created an initial Figma draft to validate layout, hierarchy, and flow',
      'Implementation: built the final experience in Brightspot CMS with a consistent system across pages',
      'Alignment: presented the student story + design rationale for approval (including outward-facing launch requirements)'
    ],

    results: [
      'Created a clearer, more streamlined experience that supports multiple majors with consistent navigation',
      'Strengthened the “student story” so content is easier to understand and act on',
      'Earned stakeholder approval to move forward with outward-facing implementation'
    ],

    reflection:
      "This project taught me how much great UX is communication. The work wasn’t just designing pages—it was aligning people around a simple story: what students need, why it matters, and how we can remove friction. I loved the mix of strategy, design, and real implementation—and it reinforced that the best work is always about the people using it.",


    documents: [
      {
        label: 'Figma Prototype',
        href: 'https://www.figma.com/proto/nR4hsryywcg0JFffkt11zc/Untitled?t=0Pp6ko7rM5WaPnIa-1'
      },
      {
        label: 'Figma Dev Mode',
        href: 'https://www.figma.com/design/nR4hsryywcg0JFffkt11zc/Untitled?m=dev&t=0Pp6ko7rM5WaPnIa-1'
      }
    ],


    links: [
      { label: 'Live Site', href: 'https://careerlaunch.byu.edu/' }
    ]
  },

  {
    slug: 'blushing-blossoms',
    title: 'Blushing Blossoms',
    subtitle: 'An elegant floral website designed for weddings and events.',
    status: 'in-progress',
    tags: ['Web Design', 'Brand'],
    coverImage: '/images/blushingBlossoms/cover.png', // optional if you want it on the projects grid too
    overview:
      "Currently in development — I’m designing and building an editorial, timeless feel while keeping navigation clean and simple. Sharing a few early screens here while I finish the full build.",
    gallery: [
      { src: '/images/blushingBlossoms/home1.png', alt: 'Blushing Blossoms home section' },
      { src: '/images/blushingBlossoms/gallery.png', alt: 'Blushing Blossoms photo gallery' },
    ],
    links: []
  },

  {
    slug: 'intex-project-2',
    title: 'INTEX: CineNiche',
    subtitle:
      'A four-day sprint building a full-stack movie recommendation app with personalized pipelines and role-based security.',
    role: 'UX + Product Thinking, Full-Stack Delivery, Team Collaboration',
    timeline: 'BYU INTEX (4 days)',
    tools: [
      'React',
      '.NET (APIs + backend logic)',
      'Python (recommendation pipelines)',
      'Authentication + Role-based Access',
      'Cookies + personalization',
      'Azure Deployment',
      'Scrum'
    ],
    tags: ['UX', 'Full Stack', 'Recommenders', 'Case Study'],

    coverImage: '/images/cineNiche/cover_.png',

    heroVideo: { type: 'file', src: '/INTEX2.mov' },

    demoVideos: [
      {
        title: 'Feature Demo: Walkthrough',
        description:
          'High-level walkthrough of the CineNiche platform and its core functionality.',
        video: {
          type: 'youtube',
          src: 'https://www.youtube.com/embed/LkYsrLN4tV4?rel=0&modestbranding=1'
        }
      },
      {
        title: 'Feature Demo: Session Cookies',
        description:
          'Demonstrates the use of session cookies to maintain user state and preferences.',
        video: {
          type: 'youtube',
          src: 'https://www.youtube.com/embed/lG9MbH8SYfg?rel=0&modestbranding=1'
        }
      },
      {
        title: 'Feature Demo: Machine Learning Recommendations',
        description:
          'Shows personalized movie recommendations generated using machine learning models.',
        video: {
          type: 'youtube',
          src: 'https://www.youtube.com/embed/c-bcXAVqS_Q?rel=0&modestbranding=1'
        }
      },
      {
        title: 'Feature Demo: CRUD & User Functionality',
        description:
          'Demonstrates full CRUD functionality and user interactions across the platform.',
        video: {
          type: 'youtube',
          src: 'https://www.youtube.com/embed/-fVirIAGjnI?rel=0&modestbranding=1'
        }
      }
    ],

    gallery: [
        {
          src: '/images/cineNiche/intex2.jpeg',
          alt: 'INTEX team'
        }
      ],

    documents: [
      { label: 'Persona Document', href: '/images/cineNiche/Persona.docx' },
      {
        label: 'ML Notebook (Colab)',
        href: 'https://colab.research.google.com/drive/1-mhvS6snr59opOk3he2VGAXfL6YESoPm?usp=sharing'
      },
      {
        label: 'Figma Prototype (High Fidelity)',
        href: 'https://www.figma.com/proto/fXVzIFkYS2c9Gptyzr2mFN/INTEX?node-id=2021-382&t=8kFLwy5g6sjR2mNO-1&starting-point-node-id=2015%3A227'
      },
      {
        label: 'Figma Dev Mode',
        href: 'https://www.figma.com/design/fXVzIFkYS2c9Gptyzr2mFN/INTEX?m=dev&t=8kFLwy5g6sjR2mNO-1'
      },
      {
        label: 'SCRUM Board & Sprint Planning',
        href: 'https://www.figma.com/board/UZgcAN4gw9Qvrh8ehOdlCD/2-15-2025W-INTEX-Figma-template?node-id=0-1&t=6VbK3ZRc65bW6fsN-1'
      }
    ],


    overview:
      "INTEX is BYU’s four-day Integrated Experience where teams build full-stack solutions under serious time pressure. For CineNiche, our team built a movie recommendation app from scratch—designing a clean user experience with React, building APIs and backend logic in .NET, and creating personalized recommendation pipelines using Python.",

    challenge:
      "We needed to ship a polished, secure, and usable product in four days—balancing UX decisions with real backend logic, authentication, and deployment constraints.",

    process: [
      'Scrum-based planning and rapid iteration',
      'UX design focused on clean browsing and discovery',
      'API and backend logic built in .NET',
      'Python-based recommendation pipelines',
      'Cookies + personalization to improve continuity',
      'Role-based authentication and Azure deployment'
    ],

    results: [
      'Delivered a full-stack recommendation app in 4 days',
      'Implemented secure role-based authentication',
      'Created personalized recommendation pipelines',
      'Deployed and demoed the app to working professionals'
    ],

    reflection:
      "INTEX was an experience where everything came together. In just four days, we took months of learning and applied it to a real, working product. Building CineNiche pushed me to think end-to-end—designing a clean, intuitive user experience while also contributing to backend logic, security, and deployment. I’m especially grateful for my team and the opportunity to learn alongside them. This project strengthened my confidence in building people-first experiences while balancing real technical constraints.",

    links: [
      { label: 'View Slides', href: '/INTEX2Slides.pdf' },
      { label: 'GitHub', href: 'https://github.com/tchappy15/intex2025' }
    ]
  },

  {
    slug: 'intex-project-1',
    title: 'INTEX: Turtle Shelter Project',
    subtitle:
      'A four-day sprint delivering a people-first, full-stack website for a nonprofit supporting individuals experiencing homelessness.',
    role: 'UX + Web Design, Full-Stack Delivery, Team Collaboration',
    timeline: 'BYU INTEX (4 days)',
    tools: [
      'UX + UI Design',
      'JavaScript',
      'EJS (dynamic server-rendered views)',
      'Database Design (CRUD)',
      'PostgreSQL + pgAdmin',
      'Tableau (embedded dashboards)',
      'AWS Deployment',
      'GitHub Collaboration'
    ],
    tags: ['UX', 'Web Design', 'Full Stack', 'Case Study'],
    coverImage: '/images/turtle/cover.png',

    heroVideo: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/HjrtyC0hmoE?rel=0&modestbranding=1'
    },

    demoVideos: [
      {
        title: "Feature Demo: AWS Database & Deployment",
        description: "Shows how the app connects to the database and is deployed on AWS.",
        video: {
          type: "youtube",
          src: "https://www.youtube.com/embed/97YlE2ioDGE?rel=0&modestbranding=1",
        },
      },
      {
        title: "Feature Demo: Data Normalization & ERD",
        description: "Walkthrough of the normalized schema and ERD that guided our database structure.",
        video: {
          type: "youtube",
          src: "https://www.youtube.com/embed/e7aLZNtfnU8?rel=0&modestbranding=1",
        },
      },
      {
        title: "Feature Demo: UI + CRUD Functionality",
        description: "Demonstrates the user experience and full CRUD workflows built into the site.",
        video: {
          type: "youtube",
          src: "https://www.youtube.com/embed/l1UZOwGQl3U?rel=0&modestbranding=1",
        },
      },
      {
        title: "Feature Demo: Data Analysis → Tableau Dashboards",
        description: "Shows how we analyzed data in Colab and turned it into Tableau dashboards.",
        video: {
          type: "youtube",
          src: "https://www.youtube.com/embed/UVBww8KTQDg?rel=0&modestbranding=1",
        },
      },
    ],


    gallery: [
      {
        src: '/images/turtle/intex1.jpeg',
        alt: 'INTEX team'
      }
    ],

    documents: [
      { label: 'ERD', href: '/images/turtle/turtleShelterERD.pdf' },
      { label: 'Data Normalization', href: '/images/turtle/data-normalization.xlsx' },
      { label: 'Tableau Dashboards', href: '/images/turtle/tableau.twbx' },
      { label: 'Google Colab Analysis', href: '/images/turtle/google-colab.ipynb' }
    ],


    overview:
      "INTEX is a four-day, immersive experience where student teams design and ship real solutions for real organizations. For this project, our team partnered with The Turtle Shelter Project — a nonprofit supporting individuals experiencing homelessness. In just four days, we designed and deployed a full-stack website that balanced clarity and empathy with real functionality: a structured database for CRUD workflows and embedded Tableau dashboards to visualize key data in a way that was actually useful.",

    challenge:
      "We had to move fast while building something real: a site that felt welcoming and easy to navigate, while also handling data responsibly. The challenge was keeping the experience simple for users, even while the backend, database structure, and deployment were happening behind the scenes.",

    process: [
      'Research: aligned on users, goals, and what the organization needed most',
      'UX + UI Design: structured the site for clarity, readability, and easy navigation',
      'Build: implemented full-stack functionality with server-rendered views (EJS), database models, and CRUD workflows',
      'Data Visualization: embedded dynamic Tableau dashboards to make data easier to understand',
      'Deployment: shipped a working product to AWS under a tight deadline'
    ],

    results: [
      'Designed and deployed a full-stack site in 4 days',
      'Built database structure + CRUD functionality (PostgreSQL/pgAdmin)',
      'Embedded Tableau dashboards for dynamic data visualization',
      'Delivered a cleaner, more user-friendly experience focused on real people'
    ],

    reflection:
      "This project reinforced how much I love building for real people. It wasn’t just about shipping features — it was about making something clear, usable, and respectful, while still delivering real full-stack functionality under pressure.",

    links: [
      { label: 'View Slides', href: '/images/turtle/Turtle-Shelter-Slides.pdf' },
      { label: 'GitHub', href: 'https://github.com/tatematley/TurtleShelter' }
    ]
  },


  {
    slug: 'temple-scheduler',
    title: 'Temple Appointment Scheduler',
    subtitle:
      'A design sprint focused on simplifying scheduling through thoughtful UX and strong Scrum execution.',
    role: 'Product Design / UX, Scrum Team Member',
    timeline: 'Design Sprint',
    tools: [
      'Figma',
      'Scrum',
      'User Flow Design',
      'Team Collaboration'
    ],
    tags: ['UX', 'Product Design', 'Scrum'],

    coverImage: '/images/templescheduler/cover1.png',

    overview:
      "The Temple Scheduler project was a design-focused sprint centered on improving the appointment scheduling experience. While the product was not fully built, our team focused on creating a thoughtful, user-centered solution backed by strong UX decisions and Scrum practices.",

    challenge:
      "Scheduling can be confusing, time-consuming, and frustrating. Our challenge was to design a simplified, intuitive experience that reduced friction and made the process feel calm, clear, and accessible for users.",

    process: [
      'Mapped the end-to-end scheduling journey to identify friction points',
      'Designed user flows and interface concepts in Figma',
      'Worked through Scrum ceremonies including planning, retrospectives, and iteration',
      'Collaborated closely as a team to refine the experience'
    ],

    results: [
      'Recognized with the “Most Scrumptious Award” for strong Scrum execution',
      'Delivered a polished prototype and design solution',
      'Strengthened skills in product thinking, UX design, and team collaboration'
    ],

    reflection:
      "This project reminded me that strong products start with strong thinking. Even without building the final application, the process of aligning on user needs, collaborating through Scrum, and refining the experience was incredibly valuable—and a great example of how good design work happens before a single line of code is written.",

    gallery: [
      {
        src: '/images/templescheduler/teamAward.PNG',
        alt: 'Temple Scheduler project team'
      }
    ],

    documents: [
      {
        label: 'High-Fidelity Prototype (PDF)',
        href: '/images/templescheduler/HighFidelity.pdf'
      },
      {
        label: 'Low-Fidelity Wireframes (PDF)',
        href: '/images/templescheduler/lowFidelity.pdf'
      },
      {
        label: 'Figma Prototype',
        href: 'https://www.figma.com/proto/8UXJJGmTqrdXWkuQXJ3IOD/Temple-Scheduling?node-id=56-258&t=vxGCvLQf0FtKTABq-1'
      },
      {
        label: 'User Personas',
        href: '/images/templescheduler/Personas.pdf'
      },
      {
        label: 'User Journey Map',
        href: '/images/templescheduler/userJourneyMap.pdf'
      },
      {
        label: 'Sprint Retrospective',
        href: 'https://drive.google.com/file/d/1VwtFFEdJlwtFWBrysSHV08L3K2AllECN/view?usp=sharing'
      },

    ],

    links: []
  },

  {
  slug: 'als-windows',
  title: "Al’s Windows",
  subtitle:
    'Full-stack website for a local window cleaning business, built and deployed end-to-end.',

  role: 'Full-Stack Developer / Designer',
  timeline: 'June 2025 – Present',
  tools: [
    'JavaScript',
    'EJS',
    'PostgreSQL',
    'AWS',
    'CI/CD',
    'Authentication & Security'
  ],
  tags: ['Full-Stack', 'Web Design', 'Real Client'],

  coverImage: '/images/alswindows/cover.png',

  heroVideo: {
  type: 'youtube',
  src: 'https://www.youtube.com/embed/NrM8dYlnrCg'
  },

  overview:
    "Al’s Windows is a full-stack website built for a local window cleaning business to support real customers and real operations. I designed and developed the entire system end-to-end, focusing on a clean customer experience while building a secure backend to manage quotes, customers, and scheduling.",

  challenge:
    "The challenge was to create a professional, trustworthy site that could handle real customer data while remaining simple and approachable. The solution needed to support online scheduling, administrative workflows, and secure deployment.",

  process: [
    'Designed a clean, user-friendly interface focused on trust and clarity',
    'Built server-rendered views using JavaScript and EJS',
    'Designed and implemented a PostgreSQL database with full CRUD functionality',
    'Configured CI/CD pipelines and deployed securely on AWS with HTTPS'
  ],

  results: [
    'Delivered a production-ready site for a real business',
    'Implemented CRUD functionality for quotes and customer management',
    'Secured the application with authentication and access controls',
    'Handled design, development, and deployment independently'
  ],

  reflection:
    "This project pushed me to think beyond the interface and build something dependable for real people. Owning the full stack, from design to database to deployment, reinforced how much I enjoy creating solutions that balance thoughtful user experience with solid technical foundations.",

  links: [
    { label: 'GitHub', href: 'https://github.com/tatematley/als-windows' }
  ]
}

];
