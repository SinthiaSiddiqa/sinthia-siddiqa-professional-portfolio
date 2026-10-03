export interface MarqueeSkill {
  name: string;
  category: string;
  color: string;
  bgTint: string;
  iconType: string;
}

export const marqueeRow1: MarqueeSkill[] = [
  { name: "React", category: "Frontend", color: "#61DAFB", bgTint: "rgba(97, 218, 251, 0.12)", iconType: "react" },
  { name: "Next.js", category: "Frontend", color: "#171717", bgTint: "rgba(23, 23, 23, 0.08)", iconType: "nextjs" },
  { name: "TypeScript", category: "Frontend", color: "#3178C6", bgTint: "rgba(49, 120, 198, 0.12)", iconType: "typescript" },
  { name: "JavaScript", category: "Frontend", color: "#F7DF1E", bgTint: "rgba(247, 223, 30, 0.14)", iconType: "javascript" },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", bgTint: "rgba(6, 182, 212, 0.12)", iconType: "tailwind" },
  { name: "HTML5", category: "Frontend", color: "#E34F26", bgTint: "rgba(227, 79, 38, 0.12)", iconType: "html5" },
  { name: "CSS3", category: "Frontend", color: "#1572B6", bgTint: "rgba(21, 114, 182, 0.12)", iconType: "css3" },
  { name: "Bootstrap", category: "Frontend", color: "#7952B3", bgTint: "rgba(121, 82, 179, 0.12)", iconType: "bootstrap" },
  { name: "Node.js", category: "Backend", color: "#339933", bgTint: "rgba(51, 153, 51, 0.12)", iconType: "nodejs" },
  { name: "Express.js", category: "Backend", color: "#303030", bgTint: "rgba(48, 48, 48, 0.1)", iconType: "express" },
  { name: "PHP", category: "Backend", color: "#777BB4", bgTint: "rgba(119, 123, 180, 0.12)", iconType: "php" },
  { name: "Laravel", category: "Backend", color: "#FF2D20", bgTint: "rgba(255, 45, 32, 0.12)", iconType: "laravel" },
];

export const marqueeRow2: MarqueeSkill[] = [
  { name: "Python", category: "Programming", color: "#3776AB", bgTint: "rgba(55, 118, 171, 0.12)", iconType: "python" },
  { name: "MySQL", category: "Database", color: "#4479A1", bgTint: "rgba(68, 121, 161, 0.12)", iconType: "mysql" },
  { name: "Oracle", category: "Database", color: "#F80000", bgTint: "rgba(248, 0, 0, 0.1)", iconType: "oracle" },
  { name: "SQL", category: "Database", color: "#E48E00", bgTint: "rgba(228, 142, 0, 0.12)", iconType: "sql" },
  { name: "Flutter", category: "Mobile", color: "#02569B", bgTint: "rgba(2, 86, 155, 0.12)", iconType: "flutter" },
  { name: "Dart", category: "Programming", color: "#0175C2", bgTint: "rgba(1, 117, 194, 0.12)", iconType: "dart" },
  { name: "Java", category: "Programming", color: "#ED8B00", bgTint: "rgba(237, 139, 0, 0.12)", iconType: "java" },
  { name: "C++", category: "Programming", color: "#00599C", bgTint: "rgba(0, 89, 156, 0.12)", iconType: "cpp" },
  { name: "C", category: "Programming", color: "#A8B9CC", bgTint: "rgba(168, 185, 204, 0.15)", iconType: "c" },
  { name: "Git", category: "Tools", color: "#F05032", bgTint: "rgba(240, 80, 50, 0.12)", iconType: "git" },
  { name: "GitHub", category: "Tools", color: "#181717", bgTint: "rgba(24, 23, 23, 0.1)", iconType: "github" },
  { name: "Figma", category: "Design", color: "#F24E1E", bgTint: "rgba(242, 78, 30, 0.12)", iconType: "figma" },
  { name: "Machine Learning", category: "AI / ML", color: "#6E1423", bgTint: "rgba(110, 20, 35, 0.12)", iconType: "ml" },
  { name: "UI/UX", category: "Design", color: "#B08D57", bgTint: "rgba(176, 141, 87, 0.14)", iconType: "uiux" },
];

export interface SkillCategoryGroup {
  category: string;
  description: string;
  skills: { name: string; tag: string }[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    category: "Frontend",
    description: "Component-driven architectures and fluid user interfaces",
    skills: [
      { name: "React", tag: "UI Framework" },
      { name: "Next.js", tag: "SSR & Full-Stack" },
      { name: "JavaScript (ES6+)", tag: "Language" },
      { name: "TypeScript", tag: "Type Safety" },
      { name: "Tailwind CSS", tag: "Utility Styling" },
      { name: "Bootstrap", tag: "Responsive Grid" },
      { name: "HTML5 & Semantic Web", tag: "Markup" },
      { name: "CSS3 & Animations", tag: "Styling" },
    ],
  },
  {
    category: "Backend",
    description: "Server-side services, application logic, and REST APIs",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "Server Framework" },
      { name: "PHP", tag: "Server Language" },
      { name: "Laravel", tag: "Backend Framework" },
      { name: "FastAPI", tag: "Python Microservice" },
      { name: "RESTful API Design", tag: "Architecture" },
    ],
  },
  {
    category: "Database",
    description: "Relational modeling, transaction integrity, and queries",
    skills: [
      { name: "MySQL", tag: "Relational RDBMS" },
      { name: "SQL Query Optimization", tag: "Query Language" },
      { name: "Oracle Database", tag: "Enterprise RDBMS" },
      { name: "Schema Normalization", tag: "Data Modeling" },
    ],
  },
  {
    category: "Programming",
    description: "Core computer science fundamentals and multi-paradigm languages",
    skills: [
      { name: "Python", tag: "Data & Systems" },
      { name: "Java", tag: "OOP & Enterprise" },
      { name: "C", tag: "Foundations & Memory" },
      { name: "C++", tag: "Algorithms & OOP" },
      { name: "Dart", tag: "Mobile Systems" },
      { name: "JavaScript", tag: "Event-Driven Web" },
    ],
  },
  {
    category: "Mobile",
    description: "Cross-platform mobile application development",
    skills: [
      { name: "Flutter", tag: "Cross-Platform Framework" },
      { name: "Dart", tag: "Client Language" },
      { name: "Mobile UI Layouts", tag: "User Ergonomics" },
    ],
  },
  {
    category: "AI / ML",
    description: "Applied research pipelines and model interpretability",
    skills: [
      { name: "Machine Learning", tag: "Predictive Analytics" },
      { name: "Ensemble Learning", tag: "Voting & Stacking" },
      { name: "SHAP & LIME", tag: "Explainable AI (XAI)" },
      { name: "SMOTEN", tag: "Data Balancing" },
      { name: "Data Preprocessing", tag: "Feature Engineering" },
    ],
  },
  {
    category: "Design",
    description: "Design systems, ergonomic layouts, and product branding",
    skills: [
      { name: "UI/UX Design", tag: "Product Experience" },
      { name: "Figma", tag: "Prototyping & Systems" },
      { name: "Information Architecture", tag: "User Flows" },
      { name: "Design Systems", tag: "Visual Consistency" },
    ],
  },
  {
    category: "Tools",
    description: "Version control, workflow efficiency, and search discovery",
    skills: [
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "Collaboration & CI" },
      { name: "VS Code", tag: "Development Environment" },
      { name: "SEO Optimization", tag: "Search Performance" },
    ],
  },
];

// Compatibility exports
export const movingSkillsRowOne = marqueeRow1;
export const movingSkillsRowTwo = marqueeRow2;
export const skillGroups = skillCategories;