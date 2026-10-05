import erpImg from "../assets/erp-showcase.png";

export type ProjectCategory =
  | "All"
  | "Business Software"
  | "Web Applications"
  | "Research"
  | "Websites";

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  filterCategories: Exclude<ProjectCategory, "All">[];
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  modules?: string[];
  previewType: "nutritrack" | "erp" | "soulsync" | "trade";
  hasRealImage?: boolean;
  image?: string;
  github?: string;
  live?: string;
  disclaimer?: string;
}

export const projects: Project[] = [
  {
    id: "nutritrack",
    number: "01",
    title: "NutriTrack",
    subtitle:
      "Predicting Physical and Mental Health Risks Based on Eating Patterns Using Machine Learning",
    category: "Research / Machine Learning / Web Application",
    filterCategories: ["Research", "Web Applications"],
    problem:
      "University students frequently experience compounding dietary irregularities and psychological stress, yet conventional tools offer only rigid calorie trackers without actionable risk insights or algorithmic interpretability.",
    solution:
      "Engineered an applied research web application prototype that applies SMOTEN class balancing and an ensemble of advanced tree-based classifiers (Extra Trees, XGBoost, CatBoost, LightGBM, Random Forest, Stacking, Soft Voting) to predict lifestyle health risks. Integrated SHAP and LIME explainable AI layers served through a FastAPI engine and an intuitive Next.js frontend.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "Machine Learning",
      "Ensemble Models",
      "SHAP & LIME",
      "SMOTEN",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "University student-focused dietary lifestyle research prototype",
      "SMOTEN oversampling pipeline for class-imbalanced behavioral data",
      "Multi-model ensemble framework with soft voting & stacking",
      "Explainable AI visualization featuring local (LIME) and global (SHAP) feature attributions",
      "Decoupled REST API backend in FastAPI paired with a responsive Next.js client",
    ],
    previewType: "nutritrack",
    github: "https://github.com/SinthiaSiddiqa",
    disclaimer:
      "Research prototype developed for academic decision-support analysis. Not intended as a clinical or medical diagnostic tool.",
  },
  {
    id: "erp-system",
    number: "02",
    title: "Business ERP & Management System",
    subtitle: "One Business. One Connected System.",
    category: "Business Software & ERP",
    filterCategories: ["Business Software", "Web Applications"],
    problem:
      "Growing companies frequently suffer from siloed spreadsheets, fractured communications between sales and warehouse teams, untracked inventory leaks, and slow manual bookkeeping.",
    solution:
      "Architected a centralized business operations suite that connects all primary commercial functions into a unified, role-based platform. Integrates CRM lead pipelines, quotation-to-sales automation, real-time inventory management, POS registers, automated supplier purchases, and financial balance ledgers into real-time executive dashboards.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "REST APIs",
      "Tailwind CSS",
      "Business Intelligence",
    ],
    keyFeatures: [
      "Unified commercial architecture: 'One Business. One Connected System.'",
      "18 integrated functional modules covering full operational lifecycles",
      "Role-Based Access Control (RBAC) with secure multi-tier user permissions",
      "Live inventory tracking with automated stock reorder thresholds",
      "Comprehensive double-entry accounting ledgers and exportable financial reports",
    ],
    modules: [
      "CRM",
      "Leads & Deals",
      "Customers",
      "Sales",
      "Quotations",
      "Inventory",
      "POS",
      "Suppliers",
      "Purchase",
      "Accounting",
      "Cash & Bank",
      "Projects",
      "Tasks",
      "HR",
      "Payroll",
      "Reports",
      "Roles & Permissions",
      "Audit Trail",
      "Manufacturing",
    ],
    previewType: "erp",
    hasRealImage: true,
    image: erpImg,
    github: "https://github.com/SinthiaSiddiqa",
  },
  {
    id: "soulsync",
    number: "03",
    title: "SoulSync",
    subtitle: "Full-Stack Responsive Web Application",
    category: "Web Application",
    filterCategories: ["Web Applications"],
    problem:
      "Modern digital users require web platforms that pair thoughtful, uncluttered user experiences with robust backend synchronization, secure authentication, and persistent relational data storage.",
    solution:
      "Engineered an interactive full-stack web application featuring structured component hierarchies, intuitive UI ergonomics, responsive cross-device views, RESTful Node.js API endpoints, and a structured MySQL relational schema.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "RESTful API",
    ],
    keyFeatures: [
      "Mobile-first responsive interface with consistent visual ergonomics",
      "Modular Node.js / Express backend with secure request handling",
      "Normalized relational database schemas with optimized query performance",
      "Stateful user session workflows and dynamic interface feedback",
    ],
    previewType: "soulsync",
    github: "https://github.com/SinthiaSiddiqa",
  },
  {
    id: "unique-trade-line",
    number: "04",
    title: "Unique Trade Line",
    subtitle: "High-Conversion Commercial Business Website",
    category: "Business Website",
    filterCategories: ["Websites", "Business Software"],
    problem:
      "A commercial trading company required an authoritative digital presence to establish market credibility, showcase product lines, and capture verified B2B buyer inquiries.",
    solution:
      "Designed and developed a business website emphasizing corporate branding, clean visual hierarchy, fast load performance, and search-engine-optimized structure to support client acquisition and commercial outreach.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "UI/UX Design",
      "SEO Architecture",
      "Performance Tuning",
    ],
    keyFeatures: [
      "Tailored commercial brand presentation reflecting trust and authority",
      "Structured search-engine-optimized metadata and semantic schema markup",
      "Optimized Core Web Vitals with instantaneous response times",
      "Frictionless lead-capture points and direct business inquiry pathways",
    ],
    previewType: "trade",
    github: "https://github.com/SinthiaSiddiqa",
  },
];