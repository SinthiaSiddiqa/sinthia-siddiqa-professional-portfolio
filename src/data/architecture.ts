export interface ArchitectureLayer {
  id: string;
  level: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  technologies: string[];
  keyHighlight: string;
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "user",
    level: "Tier 01",
    title: "Client & User Interface",
    subtitle: "End-User Device & Browser",
    role: "User Interaction & Presentation",
    description:
      "The client layer delivers responsive layouts, intuitive ergonomic interactions, and accessible design systems on desktop, tablet, and mobile browsers.",
    technologies: ["Chrome", "Safari", "Mobile Web", "Responsive Viewports"],
    keyHighlight: "Clean Ergonomics & Frictionless UX",
  },
  {
    id: "frontend",
    level: "Tier 02",
    title: "React / Next.js Frontend",
    subtitle: "Component-Driven Client Architecture",
    role: "Interactive user experience",
    description:
      "Manages client-side state, UI component lifecycle, optimistic data updates, client validation, and fluid micro-interactions with Tailwind CSS.",
    technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    keyHighlight: "Interactive user experience",
  },
  {
    id: "api",
    level: "Tier 03",
    title: "REST / HTTP API Layer",
    subtitle: "Asynchronous Communication Gateway",
    role: "Data communication",
    description:
      "Handles serialized JSON request/response payloads, authentication tokens, rate limiting, and structured endpoints connecting frontend to backend logic.",
    technologies: ["RESTful APIs", "JSON Payloads", "FastAPI Endpoints", "HTTP/HTTPS", "JWT Tokens"],
    keyHighlight: "Data communication",
  },
  {
    id: "backend",
    level: "Tier 04",
    title: "Backend & Business Logic",
    subtitle: "Domain Rules & Service Execution",
    role: "Application rules and workflows",
    description:
      "Executes core business algorithms, permission checks, workflow validations, automated invoicing calculations, and background queue jobs.",
    technologies: ["Node.js / Express", "PHP / Laravel", "Python / FastAPI", "Middleware & Auth"],
    keyHighlight: "Application rules and workflows",
  },
  {
    id: "database",
    level: "Tier 05",
    title: "Relational Database Layer",
    subtitle: "Persistent Structured Data Storage",
    role: "Structured data storage",
    description:
      "Guarantees ACID transactions, relational integrity across customers, orders, inventory, and accounts with indexed query performance.",
    technologies: ["MySQL", "Oracle", "SQL Queries", "Schema Normalization", "Backups & Logs"],
    keyHighlight: "Structured data storage",
  },
];
