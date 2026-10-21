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

  // case study sections (blank lines in a string split it into paragraphs)
  overview?: string;
  challenge?: string;
  process?: string[];
  results?: string[];
  // paragraph version of results; shown instead of the bullet list when set
  impact?: string;
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
      "A web app and mobile app for a BYU research project that helps people study the character of Jesus Christ and take small, real steps to become more like Him.",
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
      "I work as a web developer and research assistant on BYU’s Character of Christ project, where we’re turning years of research on Christlike character into an experience people can actually use. The platform helps users explore 25 Christlike virtues, take a personalized assessment, and find meaningful ways to study and grow.\n\nI built much of the web experience in React and TypeScript, and I’m now building CLIMB, the project’s mobile app, using React Native and Expo.",

    challenge:
      "There is a lot of research behind Character of Christ, including thousands of scriptures and General Conference talks. The challenge was making all of that information feel approachable and personal rather than overwhelming.\n\nThat meant thinking carefully about how people move through the content, how assessment results become useful next steps, and how we could use AI to personalize the experience without letting it replace the research behind it.",

    process: [
      "Designed and built much of the web experience, including the Learn, Heal, Become, Share, and Profile sections.",
      "Built a three-part assessment that uses each person’s responses to generate personalized results and recommend areas for growth.",
      "Created Healing Tags, Study Journeys, and guided CLIMB experiences that help users move from learning about a virtue to actually practicing it.",
      "Redesigned mentoring, messaging, and notifications and improved the experience across mobile screen sizes.",
      "Helped organize more than 2,400 scripture and General Conference records into a consistent 25-virtue framework, identifying and correcting 874 records along the way.",
      "Began building CLIMB in React Native and Expo, bringing the experience to a dedicated mobile app for iOS and Android."
    ],

    impact:
      "The web experience brings years of research into one place where people can explore, reflect, and create a path for personal growth. Each assessment becomes a personalized experience based on the individual’s own responses, while the underlying content library is now more accurate and consistent across more than 2,400 records.\n\nThe next step is CLIMB, which brings that experience to mobile and makes it easier to continue learning and practicing throughout everyday life.",

    reflection:
      "This project combines two things I care a lot about: my faith and building things people can actually use.\n\nThe hardest part wasn’t the code. It was taking a huge amount of thoughtful research and making it simple enough that someone could open the platform and feel invited instead of overwhelmed. It also changed the way I think about AI. We didn’t want AI to replace the content or do the thinking for someone. We use it to help people navigate the research and find what is most relevant to them.",

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
      "A trusted marketplace for buying and selling horses, built around better information and more transparency.",
    status: 'live',
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

    coverImage: '/images/truebred/cover.png',

    overview:
      "Truebred is a horse marketplace I co-founded through Sandbox, BYU’s year-long entrepreneurship program, where I lead technical product development.\n\nBuying a horse is a big, high-trust purchase, but many horses are still sold through social media posts with limited information and no consistent process. We built Truebred to give sellers a professional place to list their horses and buyers a better way to understand what they’re looking at before starting a conversation.\n\nListings can include photos, videos, pedigree, competition history, health records, and other details that are often scattered across messages, documents, and social media.",

    challenge:
      "Trust is everything when you’re buying a horse. Buyers want enough information to feel confident moving forward, while sellers need a simple way to share a lot of detail without creating hours of extra work.\n\nWe also had to think carefully about what information had actually been verified, what came directly from the seller, and what needed to remain private. All of that had to feel straightforward for people who may not be especially comfortable with technology.",

    process: [
      "Interviewed horse owners, buyers, sellers, and trainers to understand how horses are currently bought and sold and identify where the biggest trust gaps existed.",
      "Designed and built detailed horse listings with photos, videos, pedigree, competition history, health information, and supporting records.",
      "Built marketplace search with discipline filters, location-based search, and nearest-first results to make finding the right horse easier.",
      "Created seller vetting, buyer applications, messaging, offers, reviews, and saved horses to support the process beyond simply finding a listing.",
      "Built the platform on AWS using CDK and GitHub Actions, creating an infrastructure that can grow with the marketplace.",
      "Used AI-assisted development throughout the process to move quickly from customer feedback to working features."
    ],

    impact:
      "Truebred is now live with user accounts, horse listings, photos and video, search, messaging, and other tools supporting the buying and selling process.\n\nMore importantly, our conversations with horse owners have shaped how the product works. Instead of treating every piece of information as equally trustworthy, Truebred is designed to clearly distinguish between what a seller has shared and what has actually been documented or verified.",

    reflection:
      "Truebred is my first experience building a company, not just a product. Talking with horse owners has changed what I build more than any spec could, and many of the features that matter most have come directly from those conversations.\n\nIt has taught me how much I enjoy the part of development that happens before the code: asking questions, understanding how people already do something, and figuring out where technology can actually make it better. It has also taught me how to move quickly without losing sight of what makes a marketplace work in the first place: people being able to trust each other.",

    links: [
      { label: 'Live Site', href: 'https://truebredhorses.com/' }
    ]
  },

  {
    slug: 'entrata-dashboards',
    title: 'Entrata: Internal Dashboards',
    subtitle:
      "Two internal dashboards I built from start to finish during my summer internship on Entrata's People Team.",
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
      "I spent the summer as a Technical Intern on Entrata’s People Team, working closely with Talent Acquisition. I came in wanting to understand how recruiting worked and where technology could make it better, and I ended up owning two internal products from the first conversation through deployment.\n\nI built a Facilities Ticket Dashboard that turns more than 1,000 Jira work orders into a live view of what needs attention, and a Recruiting Operations Dashboard that brings recruiting data together to help the team understand recruiter performance, interviews, offers, quality of hire, and other trends.",

    challenge:
      "Both teams had plenty of data. The problem was being able to actually use it.\n\nFacilities requests lived across individual Jira tickets, making it difficult to quickly identify old, urgent, or recurring work. Recruiting data was spread across several different systems, making it hard to see the full picture in one place.\n\nBuilding the dashboards was only part of the challenge. I also had to get them running securely inside a large company, which meant working with IT and CloudOps on authentication, permissions, internal network requirements, and deployment.",

    process: [
      "Met with Facilities, Talent Acquisition, and Recruiting Operations to understand how they worked, what they couldn’t easily see, and which information would actually help them make decisions.",
      "Built the Facilities Dashboard in Next.js using the Jira API, with views for ticket volume, age, priority, channel, and resolution trends, along with filters, drill-downs, and links to individual tickets.",
      "Built the Recruiting Operations Dashboard by bringing together data from Lever, GEM, and internal surveys into views for requisitions, interviews, offers, quality of hire, predictive insights, and individual recruiters.",
      "Implemented Okta SSO and role-based access so sensitive recruiting information was only available to the right people.",
      "Containerized both applications with Docker and created automated deployment pipelines through GitHub Actions and AWS ECS/Fargate.",
      "Demoed both products to the teams throughout development, incorporated their feedback, and presented the finished work as my end-of-internship capstone."
    ],

    impact:
      "By the end of the summer, I had taken two internal tools from initial conversations to production-ready applications.\n\nThe Facilities team gained one live view of more than 1,000 work orders, while Talent Acquisition gained a central place to understand recruiting activity and performance across multiple data sources. I also built reusable authentication and deployment patterns that could support future internal People Team projects.",

    reflection:
      "My biggest lesson at Entrata was the importance of making sure I was building the right thing.\n\nThe internship was initially framed around AI and automation, but the more I listened to the teams, the clearer it became that what they needed most was visibility into data they already had. The most technically exciting solution isn’t always the most useful one.\n\nI also learned how much happens after the code works on your laptop. Getting these tools into people’s hands meant thinking about security, infrastructure, deployment, and working across teams, and that experience made me a much more well-rounded developer.",

    links: []
  },

  {
    slug: 'sleepedge-advisory',
    title: 'SleepEdge Advisory',
    subtitle:
      "A website for a physician-led sleep medicine consulting practice that works with sleep centers, companies, and elite sports teams.",
    status: 'live',
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
      "SleepEdge Advisory is a consulting practice led by a board-certified sleep medicine physician. I designed and built the website from the client’s existing brand, creating an experience for three different audiences: sleep centers and clinics, companies, and elite athletic teams.\n\nEach audience has different needs, but the site is built around one clear goal: helping the right people understand the practice and easily book an informational session.",

    challenge:
      "The site needed to feel polished and credible to three very different audiences without making the experience feel complicated. I also needed to translate an existing brand kit into a complete web experience and make booking a session as simple as possible.",

    process: [
      "Translated the client’s existing brand into a consistent design system for the web.",
      "Designed dedicated pages for each audience, with services and messaging specific to their needs.",
      "Built the site in React and organized the content so future copy changes are simple to make.",
      "Integrated Calendly directly into the experience so visitors can book a session without leaving the site.",
      "Added subtle interactions and scroll animations while supporting users who prefer reduced motion.",
      "Designed responsive layouts across desktop, tablet, and mobile."
    ],

    impact:
      "The finished site gives SleepEdge Advisory a professional home for introducing the practice, explaining its services, and turning interested visitors into conversations.\n\nVisitors can reach the booking experience from anywhere on the site, while accessibility features like keyboard focus states and reduced-motion support are built into the experience from the start.",

    reflection:
      "This project was all about restraint. The brand was already strong, so my job was to give it room rather than add more to it. I focused on generous spacing, a few confident visual choices, and keeping the path to booking a session clear.\n\nIt reminded me that good design doesn’t always mean adding more. For a professional service like this, it’s often about creating clarity and earning trust quickly.",

    gallery: [
      { src: '/images/sleepEdge/sleepCenters.png', alt: 'SleepEdge Advisory sleep centers page' },
      { src: '/images/sleepEdge/mobile1.png', alt: 'SleepEdge Advisory mobile home page', size: 'third' }
    ],

    links: [
      { label: 'Live Site', href: 'https://www.sleepedgeadvisory.com/' }
    ]
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
      "I designed and built a website for my sister Devyn and her fiancé Jace’s wedding weekend in Waynesboro, Virginia. It gave guests one place to find everything they needed, including the weekend schedule, travel and lodging information, things to do nearby, FAQs, the registry, and RSVP.\n\nI designed the site around a warm summer garden-party feel that matched the wedding and felt personal to them.",

    challenge:
      "With events happening across multiple days, guests needed an easy way to know where to be, when to be there, and what they needed to know before arriving.\n\nThe couple also needed a simple way to collect and manage RSVPs without paying for a wedding platform or maintaining a database. The RSVP needed to work only for invited guests while still being easy for guests of any age to use.",

    process: [
      "Designed a custom visual identity inspired by the wedding’s summer garden-party style.",
      "Built seven responsive pages in React and TypeScript for the schedule, travel, recommendations, FAQs, registry, RSVP, and the couple’s story.",
      "Created a day-by-day schedule that guests could easily navigate and link directly to from other parts of the site.",
      "Built a guest-list RSVP where guests could search for their name, select the members of their party, and submit their response.",
      "Connected the RSVP to Google Sheets through Google Apps Script, giving the couple a simple way to manage responses without a traditional database.",
      "Continued updating the site as plans changed leading up to the wedding."
    ],

    impact:
      "Guests used the site throughout the wedding weekend as a central place for the schedule, travel information, recommendations, and FAQs.\n\nRSVPs went directly into a Google Sheet the couple could manage themselves, giving them the functionality they needed without paying for another platform or learning a new system.",

    reflection:
      "Building this for my sister was so much fun. It was a smaller project, but it had real users, a real deadline, and details that genuinely mattered to the people using it.\n\nIt also reinforced that the best technical solution doesn’t have to be the most complicated one. Using a Google Sheet as the backend kept things simple for the couple and let me spend more time making the experience feel personal to them.",

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
      "A website for a community Easter project where people write letters to Jesus and read what others have written.",
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
      "Letters to Jesus is a community Easter project inspired by Elder Gary E. Stevenson’s invitation to create more Christ-centered Easter traditions. People write letters to Jesus through prayers, poems, songs, drawings, or simply whatever is on their heart, and the letters are displayed in art galleries for others to read.\n\nI built the website to bring that experience online, giving people a place to submit their own letter and read what others have shared.",

    challenge:
      "The website needed to feel as warm and personal as the project itself. We wanted people to feel comfortable sharing something meaningful, while keeping the experience simple enough that the technology never got in the way.\n\nWe also needed a submission process we could rely on so every letter sent through the site reached our team without creating additional work behind the scenes.",

    process: [
      "Designed a simple, welcoming experience that reflects the spirit of the project.",
      "Built the website in React and JavaScript.",
      "Created an online letter submission experience and connected EmailJS so each submission is automatically delivered to our team.",
      "Built a space where visitors can read letters others have chosen to share.",
      "Deployed and launched the site in time for Easter 2026."
    ],

    impact:
      "Letters to Jesus launched online for Easter 2026, extending a project that had previously lived primarily in physical gallery spaces.\n\nThe website gives people a way to participate wherever they are, while automatically delivering each submission to our team and making it easier to share the project with more people.",

    reflection:
      "This is one of my favorite things I’ve built, not because of the technology, but because of what it’s for.\n\nGetting to use the skills I’ve been building on something I care this much about has been really meaningful. It reminded me that some of the best projects aren’t the most technically complicated. They’re the ones that help create an experience people genuinely care about.",

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
      "An AI talent platform my team built for the EY-sponsored AIS SCLC competition. It matches people to roles and explains every recommendation in plain language.",

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
      "Candid is an AI talent management platform my team built for the 2026 AIS SCLC competition, sponsored by EY. We were selected as finalists and presented the project at James Madison University.\n\nCandid helps companies understand the skills they already have, match employees and applicants to open roles, and identify opportunities for growth. On the team, I owned the React application, database, authentication, and UX.",

    challenge:
      "Hiring tools can make it easier to sort through candidates, but automation creates a new problem when no one understands why a recommendation was made.\n\nWe wanted Candid to go beyond simple keyword matching and learn from past hiring data while still making every recommendation understandable. Because we were working with workforce data, we also had to think carefully about privacy, bias, and how much trust we were asking users to place in the system.",

    process: [
      "Designed and built the React experience, including separate views and permissions for different types of users.",
      "Built authentication, role-based access, and workflows for managing jobs, employees, applicants, and users.",
      "Designed the PostgreSQL database around employee skills, candidate skills, and role requirements.",
      "Helped build a hybrid matching system that combines direct skill comparisons with a machine learning model trained on past hiring data.",
      "Added resume parsing that automatically identifies candidate skills and integrated Tableau dashboards for a broader view of hiring and workforce data.",
      "Integrated Claude to explain recommendations in plain language and create personalized, step-by-step upskilling plans."
    ],

    impact:
      "Candid was selected as a finalist in the 2026 AIS SCLC competition, where we presented a working full-stack prototype at James Madison University.\n\nThe platform could rank candidates using both skill alignment and historical hiring data while showing managers where each person met or missed a role’s requirements. It could also turn those gaps into personalized upskilling plans with recommended steps, time estimates, and downloadable reports.",

    reflection:
      "Candid taught me that an AI product is only useful if people can trust what it’s doing.\n\nThe matching algorithm mattered, but just as important was making it clear why someone was recommended for a role. Because I owned the application experience, database, authentication, and UX, I got to think about that problem from both sides: how the system makes a decision and how a person understands that decision.\n\nIt made me much more interested in building AI that doesn’t just give people an answer, but helps them understand where that answer came from.",

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
      "A redesign of BYU's Career Launch site that makes career resources clearer and easier to find for students in every major.",
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
      "Career Launch helps BYU students understand their career paths, deadlines, and next steps. I worked on it as a web designer at the BYU Marriott Business Career Center. I started by thinking through what a student is actually trying to do and what they need at each step, then designed the site around that so it feels simple instead of overwhelming.",

    challenge:
      "The site had to work for a lot of different majors, stay consistent, and still be easy to use. That meant simplifying the content, cleaning up the navigation, and getting several stakeholders on the same page, all while meeting the requirements for an official, public-facing BYU site.",

    process: [
      "Mapped the student journey to find where students were getting stuck",
      "Simplified the language and restructured pages so the most important actions were easy to find",
      "Made a first draft in Figma to test the layout, hierarchy, and flow",
      "Built the final site in Brightspot CMS with a consistent system across pages",
      "Presented the student journey and my design reasoning to stakeholders for approval"
    ],

    results: [
      "A clearer, simpler site that works across majors with consistent navigation",
      "Content organized around what students need to do next, so it's easier to understand and act on",
      "Approved by stakeholders and launched publicly at careerlaunch.byu.edu"
    ],

    reflection:
      "This project showed me how much of UX is communication. The work wasn't only designing pages. It was getting people to agree on a simple story: what students need, why it matters, and what's getting in their way. I loved getting to do the strategy, the design, and the actual build.",


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
      "A website for a wedding and event florist, with an elegant editorial look and a gallery that updates itself.",
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
      "Blushing Blossoms & Co. is a wedding and event floral studio run by a friend of mine. She wanted a website that felt as thoughtful and polished as the arrangements she creates.\n\nI led the design and front-end development, creating a warm, editorial experience that showcases her work and gives potential clients an easy way to explore her services, pricing, rentals, and past events.",

    challenge:
      "The site needed to feel timeless and professional, but it also needed to be easy for her to maintain.\n\nThe biggest challenge was the gallery. She is constantly photographing new arrangements and already had a system for organizing those photos. Rather than giving her another platform to learn and maintain, I wanted the website to fit naturally into the way she was already working.",

    process: [
      "Designed the visual direction of the site, including the color palette, typography, and editorial-style layouts.",
      "Built the front end in React and TypeScript with responsive layouts across the entire site.",
      "Connected the gallery to Google Drive so new photos can appear on the website simply by adding them to a folder.",
      "Designed the navigation and experience across the Home, Gallery, Rentals, Inquiry, and Pricing pages.",
      "Worked with another developer to connect the front end to the rentals and admin functionality."
    ],

    impact:
      "Blushing Blossoms now has a professional website that gives potential clients one place to explore the studio’s work and services.\n\nMore importantly, the gallery stays current without requiring the owner to touch the website. She can continue managing photos in Google Drive the way she already does, and the site takes care of the rest.",

    reflection:
      "This was one of the most satisfying projects I’ve worked on because I got to build something for someone I know and then watch it become part of her business.\n\nThe Google Drive gallery was my favorite problem to solve. I could have built a CMS or given her another admin tool, but neither would have made her life easier. Connecting the site to the place she already keeps her photos was simpler for her and ultimately made the website more useful.\n\nIt reinforced something I’ve learned across a lot of my projects: sometimes the best solution is the one that asks the least from the person using it.",

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
      "A movie recommendation app my team built from scratch in four days, with personalized recommendations and role-based security.",
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
      "INTEX is BYU's four-day Integrated Experience, where teams build a full-stack product under a lot of time pressure. For CineNiche, my team built a movie recommendation app from scratch: a React front end, APIs and backend logic in .NET, and recommendation pipelines in Python. I focused on the user experience and also helped with the backend logic, security, and deployment.",

    challenge:
      "We had four days to ship something polished, secure, and easy to use, which meant constantly balancing design decisions against backend logic, authentication, and deployment.",

    process: [
      "Planned and worked in quick Scrum sprints",
      "Designed the experience around easy browsing and discovering new movies",
      "Built APIs and backend logic in .NET",
      "Built recommendation pipelines in Python",
      "Used cookies to remember users and personalize what they see",
      "Added role-based authentication and deployed to Azure"
    ],

    results: [
      "Built and delivered a full-stack recommendation app in four days",
      "Secured the app with role-based authentication",
      "Built personalized recommendation pipelines",
      "Deployed the app and demoed it to working professionals"
    ],

    reflection:
      "INTEX was where a lot of what I'd learned finally came together. In four days we turned months of classes into a working product. It pushed me to think about the whole thing at once, designing an experience that felt simple while also working on the backend, security, and deployment. I learned a lot from my team, and I'm grateful I got to build it with them.",

    links: [
      { label: 'View Slides', href: '/INTEX2Slides.pdf' },
      { label: 'GitHub', href: 'https://github.com/tchappy15/intex2025' }
    ]
  },

  {
    slug: 'intex-project-1',
    title: 'INTEX: Turtle Shelter Project',
    subtitle:
      "A full-stack website my team built in four days for a nonprofit that supports people experiencing homelessness.",
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
      "INTEX is a four-day project where student teams design and ship real solutions for real organizations. Our team worked with The Turtle Shelter Project, a nonprofit supporting people experiencing homelessness. In four days we designed and deployed a full-stack website with a database for managing their records and embedded Tableau dashboards that made their data easier to understand.",

    challenge:
      "We had to move fast and still build something real. The site needed to feel welcoming and easy to navigate, and it also had to handle data responsibly. The goal was to keep things simple for users while the database, backend, and deployment came together behind the scenes.",

    process: [
      "Aligned as a team on who the users were and what the organization needed most",
      "Designed the site to be clear, readable, and easy to navigate",
      "Built server-rendered pages with EJS, database models, and workflows for creating and managing records",
      "Embedded Tableau dashboards to make the data easier to understand",
      "Deployed a working site to AWS before the deadline"
    ],

    results: [
      "Designed and deployed a full-stack site in four days",
      "Built the database structure and record management in PostgreSQL",
      "Embedded interactive Tableau dashboards",
      "Delivered a cleaner, easier-to-use site for the organization"
    ],

    reflection:
      "This project reminded me how much I like building for people with a real need. It wasn't just about shipping features. It was about making something clear and respectful for the people using it, while still getting the full stack working under a tight deadline.",

    links: [
      { label: 'View Slides', href: '/images/turtle/Turtle-Shelter-Slides.pdf' },
      { label: 'GitHub', href: 'https://github.com/tatematley/TurtleShelter' }
    ]
  },


  {
    slug: 'temple-scheduler',
    title: 'Temple Appointment Scheduler',
    subtitle:
      "A team design sprint to make scheduling a temple appointment simpler and less stressful.",
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
      "This was a design sprint focused on making it easier to schedule a temple appointment. We didn't build the final app. Instead, our team focused on understanding users, designing a thoughtful solution in Figma, and running a strong Scrum process.",

    challenge:
      "Scheduling can be confusing and frustrating. We wanted to design an experience that took the friction out and made the process feel calm, clear, and accessible.",

    process: [
      "Mapped the full scheduling journey to find the frustrating parts",
      "Created personas, a journey map, wireframes, and a high-fidelity prototype in Figma",
      "Worked through Scrum planning, retrospectives, and iterations",
      "Refined the design together as a team"
    ],

    results: [
      "Won the “Most Scrumptious Award” for strong Scrum execution",
      "Delivered a polished, high-fidelity prototype",
      "Grew my skills in product thinking, UX design, and teamwork"
    ],

    reflection:
      "This project reminded me that good products start with good thinking. Even without building the app, working through user needs, collaborating in Scrum, and refining the design together taught me a lot. Some of the most important design work happens before anyone writes code.",

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
    "A full-stack website for a local window cleaning business, which I designed, built, and deployed myself.",

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
    "Al's Windows is a local window cleaning business, and I built their website to support real customers and day-to-day operations. I designed and developed the whole thing: a clean site for customers and a secure backend for managing quotes, customers, and scheduling.",

  challenge:
    "The site needed to look professional and trustworthy while handling real customer data, and still be simple to use. It also had to support online scheduling, admin workflows, and secure deployment.",

  process: [
    "Designed a clean, easy-to-use interface that builds trust",
    "Built server-rendered pages with JavaScript and EJS",
    "Designed a PostgreSQL database and built the workflows to create, edit, and manage records",
    "Set up CI/CD and deployed securely on AWS with HTTPS"
  ],

  results: [
    "Delivered a production-ready site for a real business",
    "Built tools for managing quotes and customers",
    "Secured the app with authentication and access controls",
    "Handled the design, development, and deployment on my own"
  ],

  reflection:
    "This project pushed me to think beyond the interface and build something a real business could rely on. Owning everything from the design to the database to deployment showed me how much I enjoy work where good user experience and solid engineering go together.",

  links: [
    { label: 'GitHub', href: 'https://github.com/tatematley/als-windows' }
  ]
}

];
