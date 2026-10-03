export interface JourneyMilestone {
  number: string;
  phase: string;
  title: string;
  institutionOrFocus: string;
  description: string;
  skillsAcquired: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    number: "01",
    phase: "ACADEMIC FOUNDATION",
    title: "BSc in Computer Science & Engineering",
    institutionOrFocus: "Daffodil International University",
    description:
      "Built rigorous foundations in core computer science, discrete mathematics, object-oriented programming (C, C++, Java), and relational database systems.",
    skillsAcquired: ["C / C++", "Java", "Data Structures", "Database Management", "Algorithms"],
  },
  {
    number: "02",
    phase: "CORE ENGINEERING",
    title: "Practical Software & Web Development",
    institutionOrFocus: "Hands-On Engineering & Prototyping",
    description:
      "Transitioned theoretical concepts into production web systems, building dynamic clients with JavaScript, React, and server-side APIs in Node.js and PHP.",
    skillsAcquired: ["JavaScript (ES6+)", "React.js", "Node.js", "Express", "REST APIs"],
  },
  {
    number: "03",
    phase: "PRODUCT DESIGN",
    title: "UI/UX & Modern Web Development",
    institutionOrFocus: "User-Centered Product Craftsmanship",
    description:
      "Deepened expertise in design systems, visual hierarchy, Figma prototyping, and translating complex design mockups into accessible, responsive code.",
    skillsAcquired: ["Figma", "UI/UX Design", "Tailwind CSS", "Responsive Design", "Accessibility"],
  },
  {
    number: "04",
    phase: "ENTERPRISE SYSTEMS",
    title: "Business Software & ERP Architecture",
    institutionOrFocus: "Commercial Operations & Dashboard Engineering",
    description:
      "Engineered comprehensive operational platforms connecting CRM pipelines, inventory tracking, sales quotations, and double-entry bookkeeping ledgers.",
    skillsAcquired: ["ERP Architectures", "MySQL Ledgers", "Role-Based Access Control", "State Architecture"],
  },
  {
    number: "05",
    phase: "APPLIED RESEARCH",
    title: "Machine Learning & Research Prototype",
    institutionOrFocus: "Academic Investigation & Explainable AI",
    description:
      "Conducted machine learning research on university student eating patterns and lifestyle health risk prediction using ensemble classifiers and SHAP/LIME explainability.",
    skillsAcquired: ["Python", "FastAPI", "Machine Learning", "SHAP / LIME", "SMOTEN"],
  },
  {
    number: "06",
    phase: "ADVANCED SCHOLARSHIP",
    title: "MSc in Computer Science & Engineering",
    institutionOrFocus: "Daffodil International University · Fall 2026",
    description:
      "Continuing advanced postgraduate study and specialized engineering research, focusing on scalable software systems and intelligent computing.",
    skillsAcquired: ["Advanced Systems", "Intelligent Systems", "Applied ML", "Software Methodologies"],
  },
  {
    number: "07",
    phase: "CONTINUOUS GROWTH",
    title: "Full-Stack Professional Evolution",
    institutionOrFocus: "End-to-End Business Software Development",
    description:
      "Actively designing, developing, and architecting modern business websites, web applications, and digital products for businesses and tech teams.",
    skillsAcquired: ["Next.js", "TypeScript", "System Design", "Client Partnerships", "Full-Stack Delivery"],
  },
];
