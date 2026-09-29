export type Project = {
  slug: string;
  title: string;
  subtitle: string;

  status?: 'in-progress' | 'live';

  // short banner under the subtitle (e.g. "Demo Data" disclaimer)
  notice?: { label: string; text: string };

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
    // omit to show a "coming soon" placeholder
    video?: { type: 'file' | 'youtube'; src: string };
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
  gallery?: { src: string; alt: string; caption?: string; size?: 'third' }[];

  // links (github, slides, live site)
  links?: { label: string; href: string }[];
};



export const projects: Project[] = [
  {
    slug: 'character-of-christ',
    title: 'Character of Christ',
    subtitle:
      'A full-stack web app and companion mobile app that turn research on Christlike character into interactive assessments, study tools, and AI-powered growth plans.',
    status: 'live',
    role: 'Web Developer / Research Assistant (BYU)',
    timeline: 'April 2026 – Present',
    tools: [
      'React',
      'TypeScript',
      'ASP.NET Core (C#)',
      'PostgreSQL',
      'Claude AI (Anthropic API)',
      'Azure (App Service + Static Web Apps)',
      'React Native / Expo',
      'D3.js',
      'UX/UI Design'
    ],
    tags: ['Full Stack', 'AI', 'Mobile'],

    coverImage: '/images/characterOfChrist/cover.jpg',

    overview:
      "Character of Christ is a BYU research project that helps people study the character of Jesus Christ in scripture and General Conference talks, then take practical steps to become more like Him. The web app pairs a library of virtues, annotated scriptures, and prophetic teachings with a three-part assessment and AI-generated results that point each person toward the virtues they're ready to grow in. I then brought the experience to mobile as CLIMB, a React Native / Expo app built from the web app's design, content, and data.",

    challenge:
      "The research behind the project is deep, but it had to feel personal and approachable, not academic. The app needed to take thousands of scripture and conference records, organize them around a clear set of virtues, and turn a user's answers into guidance that feels thoughtful and trustworthy, then carry that same experience onto a phone.",

    process: [
      'Designed and built most of the front-end experience in React and TypeScript: Learn, Heal, Become, Share, and Profile',
      'Built the three-part assessment flow with AI-generated results using Claude',
      'Created Healing Tags, Study Journeys, and step-by-step CLIMB study guides for each virtue, with original artwork',
      'Redesigned mentoring and messaging, notifications, and responsive mobile layouts',
      'Built and curated the content data layer across 2,400+ scripture and General Conference records, applying a 25-virtue taxonomy and completing 874 data corrections',
      'Developed the React Native / Expo mobile app, translating the web experience, AI functionality, and curated datasets into a mobile-first product'
    ],

    results: [
      'Launched a live, full-stack web app on Azure at characterofchrist.org',
      'Delivered personalized, AI-generated assessment reports tied to each user\'s answers',
      'Improved the accuracy and consistency of the content library through large-scale data cleanup',
      'Built a mobile-first companion app that brings the full experience to iOS and Android'
    ],

    reflection:
      "This project sits right at the intersection of what I care about most: my faith and building things that help people. Working alongside a research team taught me how to take rich, complex material and make it simple enough that someone can open the app and actually feel invited to change. It's also been a great lesson in using AI thoughtfully: the goal was never to replace the content, but to help people find the part of it that speaks to them.",

    gallery: [
      { src: '/images/characterOfChrist/coc3.jpg', alt: 'Character of Christ home page', caption: 'Home: "Become a little more like Him each day"' },
      { src: '/images/characterOfChrist/coc1.jpg', alt: 'Character of Christ how it works section', caption: 'How it works: assess, build your CLIMB path, begin the climb' },
      { src: '/images/characterOfChrist/learn.jpg', alt: 'Character of Christ Learn library with 25 Christlike virtues', caption: 'Learn: library of Christlike virtues, scriptures, and teachings' },
      { src: '/images/characterOfChrist/coc2.jpg', alt: 'Character of Christ Heal page', caption: 'Heal: connecting burdens to aspects of Christ\'s character' },
      { src: '/images/characterOfChrist/coc4.jpg', alt: 'Character of Christ character circumplex', caption: 'Become: personal character circumplex from the assessment' }
    ],

    links: [
      { label: 'Live Site', href: 'https://www.characterofchrist.org/' }
    ]
  },

  {
    slug: 'truebred',
    title: 'Truebred',
    subtitle:
      'A trust-first marketplace for buying and selling performance horses, with vetted sellers, verified buyers, and every detail that matters up front.',
    status: 'in-progress',
    role: 'Co-Founder / Developer (Sandbox Venture Program)',
    timeline: 'August 2026 – Present',
    tools: [
      'React',
      'TypeScript',
      'AWS (Cognito, Aurora Serverless, S3, CloudFront, Lambda)',
      'AWS CDK',
      'Supabase',
      'GitHub Actions',
      'AI-Assisted Development',
      'Customer Discovery'
    ],
    tags: ['Startup', 'Full Stack', 'Product'],

    coverImage: '/images/truebred/cover.jpg',

    overview:
      "Truebred is a performance-horse marketplace I co-founded through Sandbox, BYU's year-long entrepreneurship program, where I lead technical product development. Buying a horse is a big, high-trust purchase, but most listings live in scattered social posts with little information. Truebred gives buyers the whole picture (photos, video, pedigree, competition results, and health records) and gives sellers a professional place to list.",

    challenge:
      "Trust is the product. The platform had to make it easy for sellers to share detailed information while being honest about what's actually been verified, keep private documents private, and still feel simple for people who don't spend their days on marketplaces.",

    process: [
      'Conducted customer interviews and industry research with horse owners, buyers, and sellers to identify pain points and validate requirements',
      'Designed a detailed horse profile and listing editor with photo and video guidance, pedigree, competition results, and health records',
      'Built marketplace search with discipline filters, radius search, and nearest-first sorting',
      'Added seller vetting, messaging between buyers and sellers, offers, reviews, and saved horses',
      'Migrated the backend to AWS with infrastructure as code (CDK) and automated deploys through GitHub Actions',
      'Used AI-assisted development to iterate quickly, turning customer insights into features'
    ],

    results: [
      'Shipped a working staging version on AWS with accounts, listings, media, and saved horses live',
      'Built honest trust labels so seller-entered records never appear as verified',
      'Created a cost-aware architecture that scales to zero when idle'
    ],

    reflection:
      "Truebred has been my first real taste of building a company, not just a product. Talking with horse owners changed what I built more than any spec could. The features that matter most came straight from those conversations. It's taught me to move fast without losing sight of the thing that makes a marketplace work: people trusting each other.",

    links: []
  },

  {
    slug: 'entrata-dashboards',
    title: 'Entrata: Internal Dashboards',
    subtitle:
      'Two internal products I owned end-to-end as a Technical Intern on Entrata\'s People Team: a Facilities Ticket Dashboard and a Recruiting Operations Dashboard.',
    notice: {
      label: 'Demo Data',
      text: 'These tools were built for internal use at Entrata. All screenshots and videos use fictional, dummy data. No real employee, candidate, or company information is shown.'
    },
    role: 'Technical Intern, People Team (Talent Acquisition)',
    timeline: 'May – August 2026 · Lehi, UT',
    tools: [
      'Next.js',
      'Jira API',
      'Lever + GEM data integrations',
      'Docker',
      'AWS (ECS / Fargate)',
      'GitHub Actions CI/CD',
      'OIDC',
      'Okta SSO + Role-Based Access',
      'Stakeholder Discovery'
    ],
    tags: ['Internship', 'Full Stack', 'Data'],

    coverImage: '/images/entrata/cover.jpg',

    demoVideos: [
      {
        title: 'Recruiting Operations Dashboard',
        description:
          'Walkthrough of the overview, personal recruiter dashboards, requisitions, interviews, offers, predictive analytics, and quality of hire (demo data).',
        video: {
          type: 'youtube',
          src: 'https://www.youtube.com/embed/L-Fbuu2skbI?rel=0&modestbranding=1'
        }
      },
      {
        title: 'Facilities Ticket Dashboard',
        description:
          'Walkthrough of live KPIs, drill-downs, trends, and the filterable ticket list (demo data).'
      }
    ],

    gallery: [
      { src: '/images/entrata/facilities-overview.jpg', alt: 'Facilities Ticket Dashboard overview', caption: 'Facilities Dashboard: KPIs, monthly volume, and request channels' },
      { src: '/images/entrata/facilities-trends.jpg', alt: 'Facilities ticket trends', caption: 'Facilities Dashboard: weekly volume, ticket age, priority, and resolution time' },
      { src: '/images/entrata/facilities-tickets.jpg', alt: 'Facilities ticket list', caption: 'Facilities Dashboard: needs-attention queue and filterable ticket list' },
      { src: '/images/entrata/recruiting-overview.jpg', alt: 'Recruiting Ops overview', caption: 'Recruiting Ops: overview KPIs and requisition trends' },
      { src: '/images/entrata/recruiting-my-dashboard.jpg', alt: 'Recruiting Ops personal dashboard', caption: 'Recruiting Ops: personal recruiter dashboard' },
      { src: '/images/entrata/recruiting-requisitions.jpg', alt: 'Recruiting Ops requisitions', caption: 'Recruiting Ops: requisition waterfall and aging' },
      { src: '/images/entrata/recruiting-hires-pacing.jpg', alt: 'Recruiting Ops new hires pacing', caption: 'Recruiting Ops: new hires pacing and all requisitions' },
      { src: '/images/entrata/recruiting-interviews.jpg', alt: 'Recruiting Ops interviews', caption: 'Recruiting Ops: interview metrics and stage conversions' },
      { src: '/images/entrata/recruiting-offers.jpg', alt: 'Recruiting Ops offers', caption: 'Recruiting Ops: offer acceptance and signed offers' },
      { src: '/images/entrata/recruiting-predictive.jpg', alt: 'Recruiting Ops predictive analytics', caption: 'Recruiting Ops: predictive analytics vs. GEM benchmark' },
      { src: '/images/entrata/recruiting-quality-of-hire.jpg', alt: 'Recruiting Ops quality of hire', caption: 'Recruiting Ops: quality of hire and recruiting feedback' }
    ],

    overview:
      "I spent the summer as a Technical Intern on Entrata's People Team, embedded with Talent Acquisition. I came in wanting to learn recruiting end-to-end and explore how technology and AI could improve it, and I ended up owning two internal products from business problem to production. The Facilities Ticket Dashboard turns live Jira data from 1,000+ work orders into an operational view for the Facilities team. The Recruiting Operations Dashboard consolidates recruiting data into 6+ analytics areas: recruiter performance, interviews, offers, quality of hire, predictive insights, and personal recruiter dashboards.",

    challenge:
      "Both teams had the data, but not the visibility. Facilities requests lived as individual Jira tickets, making it hard to spot aging or high-priority work. Recruiting information was spread across multiple systems. Beyond building the apps, I had to get them running securely inside an enterprise environment, handling authentication, role-based access, internal network restrictions, and deployment while working with IT and CloudOps along the way.",

    process: [
      'Discovery: met with Facilities, Talent Acquisition, and Recruiting Operations to understand workflows, gaps in visibility, and which metrics actually mattered',
      'Facilities Dashboard: built in Next.js on the Jira API with ticket volume, age, priority, channel, and resolution trends, plus filtering, drill-downs, and links back to Jira',
      'Recruiting Dashboard: combined Lever, GEM, and survey data into views for requisitions, interviews, offers, quality of hire, predictive analytics, and individual recruiter dashboards',
      'Security: implemented Okta SSO and role-based access so sensitive recruiting data is only visible to the right people',
      'Deployment: containerized both apps with Docker and built automated GitHub Actions pipelines to AWS ECS/Fargate using OIDC instead of long-lived credentials',
      'Iteration: demoed to users, gathered feedback, and refined the apps, then presented the full story in an end-of-internship capstone'
    ],

    results: [
      'Shipped two production-ready internal applications built end-to-end',
      'Gave a four-person Facilities team a live view across 1,000+ work orders',
      'Consolidated recruiting data into 6+ actionable analytics areas for Talent Acquisition',
      'Delivered secure authentication, role-based access, and automated deployments, with infrastructure reusable for future People Team projects'
    ],

    reflection:
      "The biggest lesson from Entrata was learning to build the right thing. The internship started out framed around AI and automation, but as I listened to the teams, it became clear the most valuable solution was giving them visibility into data they already had. The coolest technical idea isn't always the most useful one. I also learned what happens after code works on your laptop: security, infrastructure, and working across teams to get something into people's hands. It confirmed that I love working at the intersection of people, product, and technology.",

    links: []
  },

  {
    slug: 'sleepedge-advisory',
    title: 'SleepEdge Advisory',
    subtitle:
      'A refined, physician-led brand site for a sleep medicine consulting practice serving sleep centers, corporations, and elite teams.',
    status: 'in-progress',
    role: 'UI/UX Designer & Front-End Developer',
    timeline: 'September 2026',
    tools: [
      'React',
      'Vite',
      'React Router',
      'Calendly Integration',
      'UX/UI Design',
      'Responsive Web Design',
      'Accessibility'
    ],
    tags: ['Web Design', 'Real Client', 'React'],

    coverImage: '/images/sleepEdge/cover.jpg',

    overview:
      "SleepEdge Advisory is a consulting practice led by a board-certified sleep medicine physician. The site introduces the practice and speaks to three distinct audiences (sleep centers and clinics, corporations, and elite athletic teams), with every page leading to one clear next step: booking an informational session.",

    challenge:
      "The brand needed to feel premium and credible to three very different audiences, while keeping the message simple. I had to translate the client's brand kit into a web design system and make booking feel effortless without sending people away from the site.",

    process: [
      'Translated the brand kit into a web design system: deep navy and gold palette, uppercase grotesk labels, and an elegant serif for headings and body',
      'Designed a dedicated page for each audience with its own services and messaging',
      'Built the site in React with all copy managed from a single content file for easy updates',
      'Integrated Calendly in an in-page booking overlay that loads only when needed and returns focus when closed',
      'Added subtle scroll-reveal motion that turns off for users who prefer reduced motion',
      'Designed responsive layouts for desktop, tablet, and mobile'
    ],

    results: [
      'Delivered a cohesive four-page brand site built from client-approved copy',
      'Made booking a session possible from any page in one click',
      'Built with accessibility in mind, including keyboard focus states and reduced-motion support'
    ],

    reflection:
      "This project was all about restraint. With a strong brand to work from, my job was to let it breathe with generous spacing, a few confident colors, and nothing that distracts from the call to action. It reinforced that good design for a professional service is really about building trust quickly.",

    gallery: [
      { src: '/images/sleepEdge/sleepCenters.png', alt: 'SleepEdge Advisory sleep centers page' },
      { src: '/images/sleepEdge/mobile1.png', alt: 'SleepEdge Advisory mobile home page', size: 'third' }
    ],

    links: []
  },

  {
    slug: 'devyn-and-jace',
    title: 'Devyn & Jace Wedding',
    subtitle:
      'A custom wedding website for my sister, with a full weekend schedule, travel guide, and an RSVP system that writes straight to a Google Sheet.',
    status: 'live',
    role: 'Designer & Developer',
    timeline: 'April – September 2026',
    tools: [
      'React',
      'TypeScript',
      'Vite',
      'Google Apps Script',
      'Google Sheets',
      'Cloudflare Pages',
      'UX/UI Design'
    ],
    tags: ['Web Design', 'React', 'Real Client'],

    coverImage: '/images/devynAndJace/cover.jpg',

    overview:
      "I designed and built a wedding website for my sister Devyn and her fiancé Jace's wedding weekend in Waynesboro, Virginia. The site walks guests through everything they need, from the couple's story and a day-by-day schedule to travel and lodging, local activity and restaurant recommendations, registry, FAQ, and RSVP, all in a warm, summer garden-party style.",

    challenge:
      "Guests needed one place to find everything for a multi-day event, and the couple needed a simple way to collect RSVPs without paying for a wedding platform or managing a database. The RSVP flow also had to be limited to invited guests and easy for anyone, of any age, to use.",

    process: [
      'Designed a custom summer garden-party palette with Cormorant Garamond and Jost typography',
      'Built seven pages in React and TypeScript with hand-written CSS and a responsive mobile menu',
      'Created a tabbed day-by-day schedule that other pages can link directly into',
      'Built a guest-list RSVP: guests search for their names, select everyone in their party, and submit',
      'Used Google Apps Script as a lightweight backend that serves the guest list and writes every RSVP to a Google Sheet',
      'Deployed on Cloudflare Pages and kept content updated through the wedding'
    ],

    results: [
      'Launched a live site that guests used for the entire wedding weekend',
      'Collected RSVPs directly into a Google Sheet the couple could manage themselves, with no database or paid platform needed',
      'Gave guests one clear, mobile-friendly source for schedule, travel, and FAQs'
    ],

    reflection:
      "Building this for my sister was such a fun one. It's a small project, but it had real users on a real deadline, and every detail mattered to the people it was for. Using a Google Sheet as the backend was the right call. It kept things simple for the couple and let me focus on making the experience feel personal.",

    gallery: [
      { src: '/images/devynAndJace/dev1.jpg', alt: 'Devyn & Jace wedding site home page', caption: 'Home: hero with the couple and RSVP' },
      { src: '/images/devynAndJace/dev2.jpg', alt: 'Oak Hill venue details', caption: 'Venue: Oak Hill details and directions' },
      { src: '/images/devynAndJace/dev3.jpg', alt: 'Travel page with airport options', caption: 'Travel: flying in and getting around' },
      { src: '/images/devynAndJace/dev4.jpg', alt: 'Activity suggestions around the venue', caption: 'Activity suggestions: things to do in the Shenandoah Valley' }
    ],

    links: [
      { label: 'Live Site', href: 'https://devyn-and-jace.pages.dev/' },
      { label: 'GitHub', href: 'https://github.com/tatematley/devyn-and-jace' }
    ]
  },

  {
    slug: 'letters-to-jesus',
    title: 'Letters to Jesus',
    subtitle:
      'A React platform built to gather and display heartfelt letters to Jesus, bringing a community Easter tradition to life online.',
    status: 'live',
    role: 'Full-Stack Developer / Designer',
    timeline: 'March 2026',
    tools: [
      'React',
      'JavaScript',
      'EmailJS (automated letter delivery)',
      'UX/UI Design',
      'Responsive Web Design'
    ],
    tags: ['Full Stack', 'React', 'Web Design'],

    coverImage: '/images/lettersToJesus/cover.png',

    overview:
      "Letters to Jesus is a community Easter project inspired by Elder Gary E. Stevenson's invitation to build more Christ-centered Easter traditions. The idea is simple: people write letters to Jesus (prayers, poems, songs, drawings, or anything on their heart), and those letters are displayed in art galleries for others to read and reflect on. The website brings that experience online, making it easy for anyone to submit a letter and read what others have written. What makes it powerful is the range of voices: people from different backgrounds being genuinely honest about their lives, their questions, their fears, and their faith, and how they still turn to Jesus.",

    challenge:
      "The site needed to feel warm, personal, and accessible, matching the spirit of the project itself. It also needed a reliable submission system so that every letter sent through the site would actually reach us without manual follow-up.",

    process: [
      'Designed a clean, welcoming interface that reflects the spirit of the project',
      'Built the front-end with React and JavaScript',
      'Integrated EmailJS so every submitted letter is automatically delivered to our email with no backend server required',
      'Deployed and launched the live site in time for Easter 2026'
    ],

    results: [
      'Launched a live platform for the Letters to Jesus community project',
      'Automated letter submission and delivery via EmailJS',
      'Built and deployed end-to-end independently'
    ],

    reflection:
      "This is one of my favorite things I've built, not because of the tech, but because of what it's for. Getting to combine something I care deeply about with the skills I've been building has been really meaningful. It's a good reminder that the best projects are the ones that actually matter to people.",

    gallery: [
      { src: '/images/lettersToJesus/home1.png', alt: 'Letters to Jesus homepage' },
      { src: '/images/lettersToJesus/home2.png', alt: 'Letters to Jesus site' },
      { src: '/images/lettersToJesus/event1.jpeg', alt: 'Letters to Jesus event' },
      { src: '/images/lettersToJesus/event2.JPG', alt: 'Letters to Jesus event' },
    ],

    links: [
      { label: 'Live Site', href: 'https://www.letters-to-jesus.com/' },
      { label: 'GitHub', href: 'https://github.com/tatematley/LettersToJesus' }
    ]
  },

  {
    slug: 'candid',
    title: 'Candid',
    subtitle:
      'An AI-powered talent optimization platform that combines machine learning, LLM explanations, and full-stack workflows to make hiring and growth decisions more transparent.',

    role: 'Full-Stack Developer + UX/UI (React, Node, PostgreSQL)',
    timeline: 'AIS SCLC 2026 Competition (Sponsored by EY)',

    tools: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Authentication + Role-Based Access Control',
      'CRUD Workflows (Jobs, Employees, Applicants, Users)',
      'Resume Parsing (PDF → skill extraction)',
      'Weighted Skill Matching Algorithm',
      'Machine Learning (Logistic Regression Model)',
      'LLM Integration (Claude AI)',
      'Explainable AI (Human-Readable Recommendations)',
      'Privacy Policy + Governance-Aware Design',
      'Tableau Embed (Analytics Dashboard)',
      'UX/UI Design'
    ],

    tags: ['UX', 'Full Stack', 'AI', 'Machine Learning', 'Case Study'],

    coverImage: '/images/candid/cover.png',

    heroVideo: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/Gy-vn-v2pao?rel=0&modestbranding=1'
    },

    overview:
      "Candid is an AI-driven talent management platform built for the AIS SCLC competition sponsored by EY. It helps enterprises map employee skills to open roles, rank candidates using a hybrid ML scoring system, and generate personalized upskilling plans with clear, human-readable explanations. The platform balances intelligent automation with transparency and governance-minded design.",

    challenge:
      "Traditional HR systems are either manual and slow or automated without transparency. The challenge was building a system that goes beyond keyword matching, learns from historical hiring data, and still explains its decisions clearly. At the same time, we had to consider bias, privacy, and responsible handling of sensitive workforce data.",

    process: [
      'Designed and built the full React front-end with a clean, role-based experience (manager vs viewer)',
      'Implemented authentication, secure login, user creation, and role-based access control',
      'Built full CRUD workflows for jobs, employees, applicants, and platform management',
      'Designed and implemented the PostgreSQL database schema to support skill mapping and role requirements',
      'Developed a hybrid matching system combining weighted skill comparisons (70%) and a logistic regression model trained on historical hiring data (30%)',
      'Integrated resume PDF parsing to automatically extract candidate skills and reduce manual entry',
      'Embedded Tableau analytics for high-level hiring and workforce insights',
      'Integrated Claude AI to generate explainable recommendation summaries and structured upskilling plans',
      'Implemented privacy policy visibility and governance-aware UX to reinforce transparency'
    ],

    results: [
      'Delivered a working full-stack prototype using React, Node, and PostgreSQL',
      'Created ranked candidate recommendations based on hybrid ML + weighted scoring logic',
      'Built transparent skill breakdowns so managers can see exactly where candidates meet or miss requirements',
      'Generated personalized, sequenced upskilling plans with timeline estimates and downloadable PDFs',
      'Implemented secure role-based access so managers and viewers see appropriate functionality'
    ],

    reflection:
      "Candid reinforced that strong AI products depend on trust. The most important part wasn't just building a matching algorithm, it was designing clarity around it. From weighted scoring to AI-generated explanations, every decision needed to be understandable. Owning the React app, database, authentication system, and UX allowed me to ensure the product felt simple, secure, and genuinely useful.",

    documents: [
      { label: 'Presentation Slides', href: '/images/candid/CandidSlides.pdf' }
    ],

    links: [
      { label: 'GitHub', href: 'https://github.com/tatematley/AISComp' },
      { label: 'YouTube Walkthrough', href: 'https://youtu.be/Gy-vn-v2pao' }
    ]
  },
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
      "Career Launch is a student-facing website experience designed to help students quickly understand career pathways, deadlines, and next steps. My focus was building a clear student story: what a student is trying to do, what they need at each step, and how we can make that process feel simple instead of overwhelming.",

    challenge:
      "The biggest challenge was clarity at scale: the site needed to work across majors, stay consistent, and still feel intuitive. That meant simplifying content, streamlining navigation, and aligning with multiple stakeholders while meeting the requirements needed for an outward-facing, officially approved experience.",

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
      "This project taught me how much great UX is communication. The work wasn't just designing pages. It was aligning people around a simple story: what students need, why it matters, and how we can remove friction. I loved the mix of strategy, design, and real implementation, and it reinforced that the best work is always about the people using it.",


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
    title: 'Blushing Blossoms & Co.',
    subtitle:
      'A timeless, editorial floral website built for a real client, designed for elegance, ease of use, and a gallery that updates itself.',
    status: 'live',
    role: 'UI/UX Designer & Front-End Developer',
    timeline: 'January–March 2026',
    tools: [
      'React',
      'TypeScript',
      'Google Drive API',
      'UX/UI Design',
      'Responsive Web Design'
    ],
    tags: ['Web Design', 'Brand', 'Real Client'],
    coverImage: '/images/blushingBlossoms/cover.png',

    overview:
      "Blushing Blossoms & Co. is a wedding and event floral studio run by a friend. She needed a website that felt as elevated and intentional as her arrangements. I led the design and front-end development while her husband handled the rentals and admin backend. The result is a clean, editorial experience with a warm cream and burgundy palette, refined typography, and a gallery that stays current without any technical effort from the owner.",

    challenge:
      "The site needed to feel timeless and professional while being genuinely easy to maintain. The biggest UX challenge was building a gallery that could scale, since the client is constantly adding new photos and needed a way to keep the site updated without ever touching code.",

    process: [
      'Designed the full visual language: cream and burgundy palette, serif + script typography, editorial page layouts',
      'Built the front-end in React and TypeScript with a focus on consistency and responsiveness across all pages',
      'Integrated the Google Drive API so the gallery pulls photos automatically from Drive folders, so the owner drops photos in a folder and they appear on the site',
      'Structured and designed navigation across Home, Gallery, Rentals, Inquiry, and Pricing',
      'Collaborated with the client\'s husband on connecting the admin and rentals backend',
      'Designed mobile-first throughout with attention to how the layouts shift and scale'
    ],

    results: [
      'Delivered a live, production-ready website for a real client',
      'Built a self-updating gallery powered by the Google Drive API, with zero technical effort needed from the owner',
      'Created a consistent design system across all pages',
      'Launched at blushingblossoms.co'
    ],

    reflection:
      "This was one of the most satisfying projects I've worked on. There's something special about building for someone you know and watching it actually serve their business. The Google Drive gallery was a fun problem to solve: instead of building a CMS or teaching the client to manage uploads, we connected directly to where she already stores her photos. That's the kind of solution that just works.",

    gallery: [
      { src: '/images/blushingBlossoms/home1.png', alt: 'Blushing Blossoms home section' },
      { src: '/images/blushingBlossoms/gallery.png', alt: 'Blushing Blossoms photo gallery' },
      { src: '/images/blushingBlossoms/BBmobile1.png', alt: 'Blushing Blossoms mobile view', size: 'third' },
      { src: '/images/blushingBlossoms/BBmobile2.png', alt: 'Blushing Blossoms mobile view', size: 'third' },
      { src: '/images/blushingBlossoms/BBmobile3.png', alt: 'Blushing Blossoms mobile view', size: 'third' },
    ],

    links: [
      { label: 'Live Site', href: 'https://blushingblossoms.co/' }
    ]
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
      "INTEX is BYU's four-day Integrated Experience where teams build full-stack solutions under serious time pressure. For CineNiche, our team built a movie recommendation app from scratch, designing a clean user experience with React, building APIs and backend logic in .NET, and creating personalized recommendation pipelines using Python.",

    challenge:
      "We needed to ship a polished, secure, and usable product in four days while balancing UX decisions with real backend logic, authentication, and deployment constraints.",

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
      "INTEX was an experience where everything came together. In just four days, we took months of learning and applied it to a real, working product. Building CineNiche pushed me to think end-to-end, designing a clean, intuitive user experience while also contributing to backend logic, security, and deployment. I'm especially grateful for my team and the opportunity to learn alongside them. This project strengthened my confidence in building people-first experiences while balancing real technical constraints.",

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
      "INTEX is a four-day, immersive experience where student teams design and ship real solutions for real organizations. For this project, our team partnered with The Turtle Shelter Project, a nonprofit supporting individuals experiencing homelessness. In just four days, we designed and deployed a full-stack website that balanced clarity and empathy with real functionality: a structured database for CRUD workflows and embedded Tableau dashboards to visualize key data in a way that was actually useful.",

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
      "This project reinforced how much I love building for real people. It wasn't just about shipping features. It was about making something clear, usable, and respectful, while still delivering real full-stack functionality under pressure.",

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
      "This project reminded me that strong products start with strong thinking. Even without building the final application, the process of aligning on user needs, collaborating through Scrum, and refining the experience was incredibly valuable, and a great example of how good design work happens before a single line of code is written.",

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
        href: 'https://drive.google.com/uc?export=download&id=1VwtFFEdJlwtFWBrysSHV08L3K2AllECN'
      },

    ],

    links: []
  },

  {
  slug: 'als-windows',
  title: "Al's Windows",
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
    "Al's Windows is a full-stack website built for a local window cleaning business to support real customers and real operations. I designed and developed the entire system end-to-end, focusing on a clean customer experience while building a secure backend to manage quotes, customers, and scheduling.",

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
