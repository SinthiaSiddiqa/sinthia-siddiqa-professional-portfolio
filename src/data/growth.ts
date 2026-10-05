export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: "Certification" | "Training" | "Workshop" | "Specialization";
  year: string;
  skills: string[];
  credentialSummary: string;
  highlights: string[];
}

export const professionalGrowthData: CertificationItem[] = [
  {
    id: "fullstack-web-architecture",
    title: "Full-Stack Web Application Engineering",
    issuer: "Specialized Professional Training",
    category: "Specialization",
    year: "2025 – 2026",
    skills: ["React.js", "Node.js", "Express", "RESTful APIs", "State Management"],
    credentialSummary:
      "Advanced hands-on engineering track focusing on modern component lifecycle architecture, secure server-side API design, and client-server synchronization.",
    highlights: [
      "Modular frontend architectures using React and component design patterns",
      "Production REST API development with Express and secure authentication",
      "End-to-end integration with relational database backends",
    ],
  },
  {
    id: "database-design-ledgers",
    title: "Relational Database Design & Business Systems",
    issuer: "Enterprise Software Workshop",
    category: "Training",
    year: "2025",
    skills: ["MySQL", "Schema Normalization", "Query Optimization", "Data Integrity"],
    credentialSummary:
      "In-depth training on designing normalized relational schemas for business operations, transactional consistency, and double-entry bookkeeping ledgers.",
    highlights: [
      "Relational schema modeling and third normal form (3NF) architecture",
      "Transaction isolation, indexing strategies, and query performance tuning",
      "Audit logging and role-based data access models for ERP systems",
    ],
  },
  {
    id: "applied-ml-interpretability",
    title: "Applied Machine Learning & Explainable AI",
    issuer: "Research & Applied AI Lab",
    category: "Certification",
    year: "2025 – 2026",
    skills: ["Python", "XGBoost", "FastAPI", "SHAP / LIME", "SMOTEN"],
    credentialSummary:
      "Applied machine learning program emphasizing class imbalance mitigation, tree-based ensemble modeling, and interpretable AI for predictive decision support.",
    highlights: [
      "Implementation of SMOTEN oversampling for non-linear behavioral datasets",
      "Ensemble modeling with Soft Voting and Stacking classifiers",
      "Explainability integration using local (LIME) and global (SHAP) feature attributions",
    ],
  },
  {
    id: "uiux-design-systems",
    title: "UI/UX Design Systems & Usability Engineering",
    issuer: "Product Craftsmanship Workshop",
    category: "Workshop",
    year: "2024 – 2025",
    skills: ["Figma", "Design Tokens", "Wireframing", "WCAG Accessibility", "Tailwind CSS"],
    credentialSummary:
      "Comprehensive workshop on translating user journeys into scalable design systems, interactive prototypes, and accessible production code.",
    highlights: [
      "Atomic design principles, cohesive typography scales, and tokenized palettes",
      "Interactive high-fidelity prototyping and user flow ergonomics in Figma",
      "Translating Figma components into semantic, accessible Tailwind CSS interfaces",
    ],
  },
  {
    id: "business-software-erp",
    title: "Business ERP & Commercial Operations Architecture",
    issuer: "Industry Engineering Practices",
    category: "Training",
    year: "2025",
    skills: ["ERP Pipelines", "Inventory Tracking", "CRM Automation", "RBAC Security"],
    credentialSummary:
      "Hands-on program analyzing real-world enterprise operational bottlenecks and building automated multi-department software solutions.",
    highlights: [
      "Quotation-to-sales pipeline automation and live inventory synchronization",
      "Multi-tier Role-Based Access Control (RBAC) and user permission matrices",
      "Executive KPI dashboards and exportable financial reporting modules",
    ],
  },
  {
    id: "performance-seo-web",
    title: "Modern Frontend Performance & SEO Optimization",
    issuer: "Technical Development Lab",
    category: "Specialization",
    year: "2024 – 2025",
    skills: ["Core Web Vitals", "Next.js", "Semantic HTML", "Lighthouse", "SEO Metadata"],
    credentialSummary:
      "Advanced optimization training targeting sub-second page delivery, search engine discoverability, and responsive asset budgeting.",
    highlights: [
      "Optimizing Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)",
      "Structured JSON-LD schema markup and semantic open graph metadata",
      "Code-splitting, asset compression, and mobile-first responsiveness",
    ],
  },
];

export const continuousLearningStats = [
  { label: "Technical Competencies", value: "24+" },
  { label: "Engineering Projects", value: "10+" },
  { label: "Workshops & Training Tracks", value: "6+" },
  { label: "Academic Research Papers", value: "01" },
];
