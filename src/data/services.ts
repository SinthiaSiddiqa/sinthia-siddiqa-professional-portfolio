export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: "business-website",
    number: "01",
    title: "Business Website Development",
    description:
      "Crafting high-conversion, responsive commercial websites tailored to communicate brand credibility and turn visitors into qualified clients.",
    details: ["Brand-Aligned UI/UX", "High Performance & Speed", "Mobile-First Responsiveness", "Clear Conversion Paths"],
  },
  {
    id: "web-apps",
    number: "02",
    title: "Web Application Development",
    description:
      "Engineering resilient full-stack applications with modern frontend architectures, reliable server-side APIs, and secure relational databases.",
    details: ["Component Architecture", "State Management", "REST API Integration", "Security & Validation"],
  },
  {
    id: "react-next",
    number: "03",
    title: "React / Next.js Development",
    description:
      "Building scalable single-page and server-rendered web applications with optimized Core Web Vitals, dynamic routing, and fast load speeds.",
    details: ["Server-Side Rendering (SSR)", "Static Site Generation (SSG)", "Tailwind Styling", "TypeScript Safety"],
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-commerce Development",
    description:
      "Developing seamless shopping experiences with frictionless product catalogs, cart logic, payment pathways, and operational inventory controls.",
    details: ["Catalog & Filtering", "Cart & Checkout Flows", "Order Tracking", "Admin Management"],
  },
  {
    id: "admin-erp",
    number: "05",
    title: "Admin Dashboard & ERP Interfaces",
    description:
      "Designing centralized operational portals, internal tools, and ERP modules that streamline day-to-day team workflows and business intelligence.",
    details: ["Modular Dashboards", "Role-Based Access Control", "Data Visualization", "Process Automation"],
  },
  {
    id: "uiux-development",
    number: "06",
    title: "UI/UX Design + Development",
    description:
      "Bridging the gap between creative visual design and production code, translating wireframes and design systems into pixel-perfect reality.",
    details: ["Figma Design Systems", "Interactive Prototyping", "Micro-Interactions", "Accessibility (a11y)"],
  },
  {
    id: "seo-friendly",
    number: "07",
    title: "SEO-Friendly Website Development",
    description:
      "Structuring websites for maximum search discoverability through semantic HTML, automated Open Graph tags, fast rendering, and metadata.",
    details: ["Semantic Markup", "Meta & Open Graph Tags", "Sitemap & Robots Setup", "Core Web Vitals Optimization"],
  },
];
