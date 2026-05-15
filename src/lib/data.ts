export const personalInfo = {
  name: "Prabhav Setia",
  initials: "PS",
  roles: ["Software Engineer", "Full-Stack Developer", "AI Automation Engineer"],
};

export const aboutContent = {
  paragraphs: [
    "I'm a Software Engineer at Accenture with a focus on turning messy, manual enterprise workflows into clean, automated systems. Over the past 2.5 years, I've gone from writing my first React components to leading automation initiatives that handle hundreds of support tickets daily with minimal human intervention.",
    "My work sits at the intersection of full-stack development and intelligent automation. I've built enterprise CMS platforms, operational dashboards, and AI-driven workflow systems — always with an eye toward reducing the gap between what humans do repeatedly and what machines should handle instead.",
    "I believe in writing code that's clear enough to not need comments, building systems that are simple enough to not need documentation, and automating everything that wastes someone's time.",
  ],
  stats: [
    { number: "2.5+", label: "Years of enterprise engineering experience" },
    { number: "78+", label: "Person-hours saved per day through automation" },
    { number: "290+", label: "Tickets processed daily by AI workflows" },
    { number: "94%", label: "Reduction in ticket handling time" },
  ],
};

export interface ExperienceEntry {
  role: string;
  company: string;
  dateRange: string;
  highlights: string[];
  isCurrent: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    role: "Advanced App Engineering Analyst — Lead",
    company: "Accenture",
    dateRange: "Dec 2025 — Present",
    highlights: [
      "Leading automation initiatives and Admin Cockpit development for enterprise workflow systems",
      "Owning feature architecture, workflow modernization, and technical delivery",
      "Architecting full-stack solutions using Angular, React.js, Node.js, TypeScript, and Python",
      "Driving workflow automation that reduced repetitive manual processes",
    ],
    isCurrent: true,
  },
  {
    role: "Advanced App Engineering Associate",
    company: "Accenture",
    dateRange: "Sep 2023 — Nov 2025",
    highlights: [
      "Developed scalable enterprise applications using Angular, React.js, TypeScript, and Node.js",
      "Built reusable UI components and API integration layers",
      "Contributed to frontend architecture improvements and workflow optimization",
      "Implemented authentication workflows and role-based access control",
    ],
    isCurrent: false,
  },
  {
    role: "B.Tech Computer Science (IoT)",
    company: "Chandigarh University",
    dateRange: "Jun 2019 — Jun 2023",
    highlights: [
      "Specialized in Internet of Things and software development",
      "Built full-stack projects and gained foundation in system design",
    ],
    isCurrent: false,
  },
];

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  metrics?: ProjectMetric[];
  isFeatured: boolean;
  modal: {
    badge: string;
    problem: string;
    approach: string;
    impactMetrics: ProjectMetric[];
    techStack: string[];
  };
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "ai-automation",
    name: "AI-Driven Workflow Automation",
    description:
      "Led development of AI automation for enterprise L1 support — handling 290+ tickets daily across 32 business services in a 24x7 environment.",
    tags: ["Python", "TypeScript", "Node.js", "AI Workflows"],
    metrics: [
      { value: "16m → 1m", label: "Handling time" },
      { value: "78+ hrs", label: "Saved daily" },
      { value: "290+", label: "Tickets/day" },
    ],
    isFeatured: true,
    modal: {
      badge: "Featured Project",
      problem:
        "Enterprise L1 support operations were handling 290+ tickets per day across 32 business services in a 24x7 environment. Each ticket required approximately 16 minutes of manual effort — queue analysis, assignment, knowledge-base research, work-note generation, response drafting, and resolution handling.",
      approach:
        "Designed automated ticket-processing workflows capable of performing queue analysis, ticket assignment, knowledge-base research, work-note generation, response drafting, and resolution/escalation handling with minimal human intervention. Integrated multiple enterprise knowledge systems including KB repositories, Wiki platforms, Confluence, and SharePoint.",
      impactMetrics: [
        { value: "94%", label: "Handling time reduction" },
        { value: "78+ hrs", label: "Saved per day" },
        { value: "290+", label: "Tickets processed daily" },
        { value: "32", label: "Business services" },
      ],
      techStack: [
        "Python",
        "TypeScript",
        "Node.js",
        "REST APIs",
        "AI Automation",
        "Knowledge Systems",
      ],
    },
  },
  {
    id: "admin-cockpit",
    name: "Enterprise Admin Cockpit",
    description:
      "Enterprise administration and operational management system with workflow governance, monitoring dashboards, and data-driven decision tools.",
    tags: ["React.js", "TypeScript", "REST APIs", "Azure"],
    isFeatured: false,
    modal: {
      badge: "Enterprise Project",
      problem:
        "Enterprise operations lacked a unified view for managing workflows, monitoring system health, and making data-driven decisions. Administrators relied on fragmented tools and manual processes to govern business operations across multiple teams and services.",
      approach:
        "Built a centralized administration and operational management platform with workflow governance capabilities, real-time monitoring dashboards, and data-driven decision tools. Designed modular UI components with role-based access control and integrated REST APIs for cross-system data aggregation.",
      impactMetrics: [
        { value: "RBAC", label: "Role-based access control" },
        { value: "Real-time", label: "Monitoring dashboards" },
        { value: "Modular", label: "Component architecture" },
      ],
      techStack: [
        "React.js",
        "TypeScript",
        "REST APIs",
        "Azure",
        "Role-Based Auth",
      ],
    },
  },
  {
    id: "cms-platform",
    name: "SDC Cloud CMS Platform",
    description:
      "Content management and self-service publishing platform for Siemens' Data & AI ecosystem — onboarding services like Siemens GPT, Snowflake, and LLM Gateway.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    isFeatured: false,
    modal: {
      badge: "Enterprise Project",
      problem:
        "Siemens' Data & AI ecosystem needed a centralized content management and self-service publishing platform to onboard and manage services like Siemens GPT, Snowflake, and LLM Gateway. Existing processes for service onboarding were manual and inconsistent across teams.",
      approach:
        "Developed a full-stack content management system with self-service publishing workflows, enabling service teams to onboard, document, and manage their offerings independently. Built with a MERN stack architecture, featuring rich content editing, approval workflows, and service catalog management.",
      impactMetrics: [
        { value: "Self-serve", label: "Service onboarding" },
        { value: "CMS", label: "Content management" },
        { value: "Catalog", label: "Service discovery" },
      ],
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "REST APIs",
      ],
    },
  },
  {
    id: "shubhjyotish",
    name: "ShubhJyotish Service Platform",
    description:
      "Production-grade full-stack service platform with user interaction workflows, service management, and end-to-end lifecycle ownership.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    isFeatured: false,
    modal: {
      badge: "Personal Project",
      problem:
        "Needed a production-grade platform to manage service bookings, user interactions, and end-to-end service lifecycle — from discovery to fulfillment — with a clean, reliable user experience.",
      approach:
        "Built a full-stack service platform from scratch with user authentication, service catalog, booking workflows, and admin management. Designed RESTful APIs with Node.js and Express, a responsive React frontend, and MongoDB for flexible data modeling.",
      impactMetrics: [
        { value: "Full-stack", label: "End-to-end ownership" },
        { value: "Auth", label: "User authentication" },
        { value: "Live", label: "Production deployed" },
      ],
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "REST APIs",
        "JWT Auth",
      ],
    },
    links: [
      { label: "Live Demo", href: "https://shubhjyotish.vercel.app/" },
    ],
  },
];

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    items: ["Angular", "React.js", "TypeScript", "JavaScript", "HTML5 / CSS3", "State Mgmt"],
  },
  {
    name: "Backend & APIs",
    items: ["Node.js", "Express.js", "Python", "REST APIs", "JWT Auth", "Microservices"],
  },
  {
    name: "Data & Cloud",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Azure", "AWS", "Docker"],
  },
  {
    name: "AI & Automation",
    items: [
      "AI Workflows",
      "LLM Integration",
      "Ticket Automation",
      "Knowledge Systems",
      "Workflow Orchestration",
      "Prompt Engineering",
    ],
  },
  {
    name: "Tools & Methods",
    items: ["Git / GitHub", "Jira", "Postman", "Agile / Scrum", "CI/CD", "Release Mgmt"],
  },
];

export const contactLinks = [
  { label: "Email", href: "mailto:prabhav.setia@gmail.com", icon: "mail" },
  { label: "LinkedIn", href: "https://linkedin.com/in/prabhavsetia", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/prabhavsetia", icon: "github" },
];
