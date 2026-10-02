import { useEffect, useRef, useState, type ReactNode } from "react"
import brandLogo from "./assets/sinthia-logo.jpg"

// Add verified public URLs and the CV file here when they are available.
const profileLinks: Record<string, string> = {
  Email: "",
  LinkedIn: "",
  GitHub: "",
  Facebook: "",
  CV: "",
}
type IconName = "arrow" | "external" | "download" | "code" | "grid" | "chart" | "layers" | "design" | "brain" | "database" | "globe" | "mail" | "github" | "check" | "menu" | "close"
function Icon({
  name = "arrow",
  className = "",
}: {
  name?: IconName
  className?: string
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    external: <path d="M6 18 18 6M6 6h12v12" />,
    download: (
      <>
        <path d="M12 3v12m-4-4 4 4 4-4M5 16v5h14v-5" />
      </>
    ),
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16" />,
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    chart: <path d="M3 3v18h18M7 15l4-5 4 3 6-8" />,
    layers: (
      <path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5" />
    ),
    design: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="m8 16 2-6 6-2-2 6-6 2Zm2-6 4 4" />
      </>
    ),
    brain: (
      <>
        <path d="M12 5c-4-6-9 0-7 3-5 2-3 8 0 8-1 5 6 6 7 2V5Zm0 0c4-6 9 0 7 3 5 2 3 8 0 8 1 5-6 6-7 2" />
        <path d="M8 8v4l-3 2m11-6v4l3 2M8 17l4-3 4 3" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    github: (
      <>
        <path d="M9 20c-4 1-4-2-6-2m13 3v-4c0-1-.4-2-1-2 4-.5 6-2 6-5 0-2-1-3-2-4 .3-1 .3-2 0-3-2 0-3 1-4 2a13 13 0 0 0-6 0C8 4 7 3 5 3c-.3 1-.3 2 0 3-1 1-2 2-2 4 0 3 2 4.5 6 5-.6 0-1 1-1 2v4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  }
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Sinthia Siddiqa home">
      <span className="brand-mark">
        <span className="monogram" aria-hidden="true">
          SS
        </span>
        <img className="brand-logo" src={brandLogo} alt="" />
      </span>
      <span className="brand-name">Sinthia Siddiqa</span>
    </a>
  )
}
function Button({
  children,
  href,
  onClick,
  secondary = false,
  icon = "arrow",
  className = "",
}: {
  children: ReactNode
  href?: string
  onClick?: () => void
  secondary?: boolean
  icon?: IconName
  className?: string
}) {
  const classes = `button ${
    secondary ? "button-secondary" : "button-primary"
  } ${className}`
  return href ? (
    <a className={classes} href={href} onClick={onClick}>
      {children}
      <Icon name={icon} />
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {children}
      <Icon name={icon} />
    </button>
  )
}
function SectionHeading({
  label,
  title,
  description,
  children,
}: {
  label: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span />
          {label}
        </div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  )
}
function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}
function Chart({ health = false }: { health?: boolean }) {
  return (
    <div className={`dashboard-chart ${health ? "health-chart" : ""}`}>
      <div className="chart-heading">
        <strong>
          {health ? "Eating pattern analysis" : "Revenue overview"}
        </strong>
        <span>
          <i />
          {health ? "Pattern score" : "Revenue"} <small>Last 6 months</small>
        </span>
      </div>
      <div className="graph">
        <div className="graph-labels">
          <span>{health ? "100" : "$30k"}</span>
          <span>{health ? "75" : "$20k"}</span>
          <span>{health ? "50" : "$10k"}</span>
          <span>0</span>
        </div>
        <svg
          viewBox="0 0 460 130"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="graph-grid"
            d="M0 10h460M0 47h460M0 84h460M0 121h460"
          />
          <path
            className="graph-fill"
            d="M0 108C25 105 25 88 45 92S75 118 95 88 120 76 142 81 170 62 190 72 220 91 242 56 267 68 290 42 313 54 340 30 370 54 393 26 431 34 460 8V130H0Z"
          />
          <path
            className="graph-line"
            d="M0 108C25 105 25 88 45 92S75 118 95 88 120 76 142 81 170 62 190 72 220 91 242 56 267 68 290 42 313 54 340 30 370 54 393 26 431 34 460 8"
          />
        </svg>
      </div>
      <div className="chart-months">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  )
}
function Dashboard({
  health = false,
  hero = false,
}: {
  health?: boolean
  hero?: boolean
}) {
  return (
    <div
      className={`dashboard ${health ? "health-dashboard" : ""} ${
        hero ? "hero-dashboard" : ""
      }`}
      aria-label={`${
        health ? "NutriTrack health analytics" : "Business ERP"
      } interface concept with illustrative demo data`}
    >
      <div className="browser-bar">
        <div>
          <i />
          <i />
          <i />
        </div>
        <span>
          <Icon name="globe" />
          {health ? "nutritrack.app / overview" : "workspace / dashboard"}
        </span>
        <span className="browser-more">•••</span>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <div className="app-brand">
            <span>
              <Icon name={health ? "brain" : "layers"} />
            </span>
            {health ? "NutriTrack" : "businessOS"}
            <small>®</small>
          </div>
          <div className="workspace-name">
            {health ? "Research workspace" : "My workspace"}
            <span>⌄</span>
          </div>
          <small className="sidebar-label">WORKSPACE</small>
          {(health
            ? [
                "Overview",
                "Participants",
                "Health insights",
                "Predictions",
                "Explainability",
                "Reports",
              ]
            : [
                "Overview",
                "CRM & Leads",
                "Sales & Orders",
                "Inventory",
                "Accounting",
                "Projects",
                "HR & Payroll",
                "Reports",
              ]
          ).map((n, i) => (
            <div
              key={n}
              className={`sidebar-item ${i === 0 ? "selected" : ""}`}
            >
              <Icon
                name={
                  ([
                    "grid",
                    "globe",
                    "chart",
                    "layers",
                    "database",
                    "design",
                    "code",
                    "chart",
                  ] as IconName[])[i]
                }
              />
              {n}
              {i === 0 && <span />}
            </div>
          ))}
          <div className="sidebar-bottom">
            <span className="avatar">SS</span>
            <div>
              Sinthia Siddiqa
              <small>{health ? "Researcher" : "Workspace admin"}</small>
            </div>
          </div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-top">
            <span>
              Workspace <b>/</b> Overview
            </span>
            <span>
              <Icon name="globe" />
              <span className="avatar">SS</span>
            </span>
          </div>
          <div className="dashboard-welcome">
            <div>
              <h3>
                {health ? "Health insights, at a glance." : "Business overview"}
              </h3>
              <p>
                {health
                  ? "Understanding eating patterns through data."
                  : "A clear picture of your business. All in one place."}
              </p>
            </div>
            <span className="date-control">
              Jun 1 – Jun 30 <span>⌄</span>
            </span>
          </div>
          <div className="dashboard-metrics">
            {(health
              ? [
                  ["Participants", "256", "Sample dataset"],
                  ["Models compared", "5", "Classification models"],
                  ["Data features", "18", "Eating patterns"],
                ]
              : [
                  ["Total revenue", "$24,580", "+12.8% this month"],
                  ["Active orders", "148", "+8.2% this month"],
                  ["New customers", "64", "+16.4% this month"],
                ]
            ).map(([label, value, detail]) => (
              <div key={label}>
                <div>
                  {label}
                  <Icon name="external" />
                </div>
                <strong>{value}</strong>
                <small>
                  {!health && <Icon name="chart" />}
                  {detail}
                </small>
              </div>
            ))}
          </div>
          <Chart health={health} />
          <div className="dashboard-table">
            <div className="table-title">
              <strong>
                {health ? "Model comparison" : "Recent transactions"}
              </strong>
              <span>
                View all <Icon name="arrow" />
              </span>
            </div>
            <div className="table-row table-header">
              <span>{health ? "Model" : "Customer"}</span>
              <span>{health ? "Method" : "Invoice"}</span>
              <span>Status</span>
              <span>{health ? "Output" : "Amount"}</span>
            </div>
            {(health
              ? [
                  ["Extra Trees", "Ensemble", "Evaluated", "Prediction"],
                  ["Random Forest", "Ensemble", "Evaluated", "Prediction"],
                  ["XGBoost", "Boosting", "Evaluated", "Prediction"],
                ]
              : [
                  ["Acme Studio", "INV-0024", "Paid", "$1,240.00"],
                  ["Nova Solutions", "INV-0023", "Paid", "$860.00"],
                  ["Vertex Digital", "INV-0022", "Pending", "$2,100.00"],
                ]
            ).map((row) => (
              <div className="table-row" key={row[0]}>
                <span>
                  <i />
                  {row[0]}
                </span>
                <span>{row[1]}</span>
                <span>
                  <b className={row[2] === "Pending" ? "pending" : "paid"}>
                    {row[2]}
                  </b>
                </span>
                <span>{row[3]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
function SoulArtwork() {
  return (
    <div className="soul-app">
      <div className="mini-nav">
        <strong>
          <span className="soul-symbol">s</span> SoulSync
        </strong>
        <span>Discover &nbsp; Community &nbsp; Your space</span>
        <span className="avatar">SS</span>
      </div>
      <div className="soul-copy">
        <span className="mini-eyebrow">A SPACE TO CONNECT</span>
        <h3>
          Find your people.
          <br />
          <em>Feel more like you.</em>
        </h3>
        <p>
          Meaningful conversations. Shared interests.
          <br />A little connection goes a long way.
        </p>
        <span className="mini-cta">
          Explore your community <Icon />
        </span>
      </div>
      <div className="soul-cards">
        <div>
          <div className="soul-card-art art-one">
            <span />
            <span />
            <span />
          </div>
          <small>PERSONAL GROWTH</small>
          <strong>Small steps, real change.</strong>
          <span>
            Explore the conversation <Icon name="external" />
          </span>
        </div>
        <div>
          <div className="soul-card-art art-two">
            <span />
            <span />
          </div>
          <small>CREATIVE CONNECTIONS</small>
          <strong>Make room for inspiration.</strong>
          <span>
            Find your community <Icon name="external" />
          </span>
        </div>
      </div>
    </div>
  )
}
function TradeArtwork() {
  return (
    <div className="trade-app">
      <div className="mini-nav">
        <strong>
          <Icon name="layers" /> UNIQUE<span>TRADE LINE</span>
        </strong>
        <span>About &nbsp; Products &nbsp; Solutions</span>
        <span className="trade-contact">
          Get in touch <Icon name="external" />
        </span>
      </div>
      <div className="trade-hero">
        <div>
          <span className="mini-eyebrow">YOUR PARTNER IN BUSINESS</span>
          <h3>
            Connecting business.
            <br />
            <em>Delivering possibilities.</em>
          </h3>
          <p>
            A clear, connected approach to trade.
            <br />
            Built around the needs of your business.
          </p>
          <span className="mini-cta">
            Explore our solutions <Icon />
          </span>
        </div>
        <div className="trade-sculpture">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="trade-bottom">
        <span>BUILT ON TRUST</span>
        <span>
          Business solutions <Icon name="arrow" />
        </span>
        <span>Quality. Consistency. Partnership.</span>
      </div>
    </div>
  )
}
type Project = {
  id: string
  name: string
  category: string
  description: string
  stack: string[]
  features: string[]
  detail: string
  primary: string
  secondary: string
}
const projects: Project[] = [
  {
    id: "nutritrack",
    name: "NutriTrack",
    category: "AI / ML · WEB APPLICATION",
    description:
      "A machine-learning-based platform exploring physical and mental health risks from eating patterns among university students.",
    stack: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "Next.js",
      "Data Analytics",
    ],
    features: [
      "Health risk prediction",
      "SHAP / LIME explainability",
      "Ensemble learning",
    ],
    detail:
      "The research workflow covers data cleaning, preprocessing, SMOTEN resampling, model comparison and ensemble learning. SHAP and LIME help explain model outputs. This is a research application, not a medical diagnostic tool.",
    primary: "View Case Study",
    secondary: "GitHub",
  },
  {
    id: "erp",
    name: "Business ERP / Management System",
    category: "BUSINESS SOFTWARE",
    description:
      "A centralized management solution connecting sales, CRM, inventory, accounting, HR and reporting in one workspace.",
    stack: ["Full-Stack", "Business Logic", "Database", "Dashboard UI"],
    features: [
      "Connected business modules",
      "Roles & permissions",
      "Reporting & audit trail",
    ],
    detail:
      "The system brings together CRM, leads and deals, sales, quotations, inventory, POS, suppliers, purchasing, accounting, cash and bank, projects, tasks, HR, payroll and reports. Roles, permissions and an audit trail support structured operations, alongside manufacturing and production workflows. The exact technology stack is not yet listed.",
    primary: "View Case Study",
    secondary: "Project Details",
  },
  {
    id: "soulsync",
    name: "SoulSync",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A database-driven web application bringing together responsive frontend development, backend integration and user interaction.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL"],
    features: [
      "Interactive web experience",
      "Backend integration",
      "Database-driven content",
    ],
    detail:
      "SoulSync demonstrates a connected web application architecture: an HTML, CSS and JavaScript frontend, a Node.js and Express backend, and MySQL persistence. The focus is a clean responsive interface, user interaction and database-driven functionality.",
    primary: "View Project",
    secondary: "GitHub",
  },
  {
    id: "trade",
    name: "Unique Trade Line",
    category: "BUSINESS WEBSITE",
    description:
      "A business-focused website built around clear presentation, considered user experience and an SEO-friendly structure.",
    stack: ["Responsive Design", "UI/UX", "Web Development", "SEO"],
    features: [
      "Responsive across devices",
      "Clear business presentation",
      "SEO-friendly structure",
    ],
    detail:
      "This business website focuses on translating business information into a clear, accessible web experience. Responsive layouts, thoughtful navigation and an SEO-friendly page structure support professional presentation across desktop and mobile.",
    primary: "View Website",
    secondary: "Case Study",
  },
]
function ProjectVisual({ id }: { id: string }) {
  return (
    <div className={`project-visual visual-${id}`}>
      <span className="visual-caption">
        INTERFACE CONCEPT · ILLUSTRATIVE DATA
      </span>
      {id === "nutritrack" ? (
        <Dashboard health />
      ) : id === "erp" ? (
        <Dashboard />
      ) : id === "soulsync" ? (
        <SoulArtwork />
      ) : (
        <TradeArtwork />
      )}
    </div>
  )
}
const skillGroups = [
  [
    "Frontend",
    "code",
    ["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap"],
  ],
  ["Backend", "layers", ["Node.js", "Express", "PHP", "Laravel"]],
  ["Database", "database", ["MySQL", "SQL"]],
  ["Programming", "code", ["Python", "Java", "C", "C++", "Dart"]],
  ["Mobile", "grid", ["Flutter"]],
  ["Design", "design", ["Figma", "UI/UX Design", "Graphic Design"]],
  ["Tools", "layers", ["Git", "GitHub", "VS Code"]],
  [
    "AI / Data",
    "brain",
    ["Machine Learning", "Data Analytics", "SHAP", "LIME", "FastAPI"],
  ],
] as const
const nav = ["About", "Projects", "Skills", "Research", "Education", "Contact"]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("")
  const [filter, setFilter] = useState("All Projects")
  const [selected, setSelected] = useState<Project | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const modalOpen = Boolean(selected || notice)
  useEffect(() => {
    if (modalOpen) {
      dialog.current?.showModal()
      document.body.style.overflow = "hidden"
    } else {
      dialog.current?.close()
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [modalOpen])
  useEffect(() => {
    document.title = "Sinthia Siddiqa | Full-Stack Business Software Engineer"
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Full-Stack Business Software Engineer and Web Application Developer specializing in business websites, web applications, business software, UI/UX and AI-driven solutions.",
      )
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-20% 0px -60% 0px" },
    )
    nav.forEach((n) => {
      const section = document.getElementById(n.toLowerCase())
      if (section) observer.observe(section)
    })
    const reveals = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            reveals.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    document.querySelectorAll(".reveal").forEach((el) => reveals.observe(el))
    return () => {
      observer.disconnect()
      reveals.disconnect()
    }
  }, [])
  function openLink(name: string) {
    const url = profileLinks[name]
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    } else setNotice(name)
  }
  function closeDialog() {
    setSelected(null)
    setNotice(null)
  }
  const visibleProjects = projects.filter(
    (p) =>
      filter === "All Projects" ||
      (filter === "Web & Business"
        ? p.id !== "nutritrack"
        : p.id === "nutritrack"),
  )
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav
            className={menuOpen ? "main-nav open" : "main-nav"}
            aria-label="Main navigation"
          >
            {nav.map((n) => (
              <a
                key={n}
                className={active === n.toLowerCase() ? "active" : ""}
                href={`#${n.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {n}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <Button
              secondary
              icon="download"
              onClick={() => openLink("CV")}
              className="header-cv"
            >
              Download CV
            </Button>
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span />
              DESIGN. DEVELOP. SOLVE.
            </div>
            <h1>
              Sinthia Siddiqa<span className="gold-dot">.</span>
            </h1>
            <h2>
              Full-Stack Business
              <br />
              Software Engineer{" "}
              <span>
                &<br />
                Web Application Developer
              </span>
            </h2>
            <p>
              I build modern web applications and business software that turn
              complex workflows into simple, scalable digital experiences.
            </p>
            <div className="hero-buttons">
              <Button href="#projects">View My Work</Button>
              <Button secondary icon="download" onClick={() => openLink("CV")}>
                Download CV
              </Button>
            </div>
            <div className="hero-credentials">
              <span>
                <Icon name="check" />
                CSE Graduate
              </span>
              <i />
              <span>MSc in CSE</span>
              <i />
              <span>Built with purpose</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-orbit" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="orbit-chip chip-interface" aria-hidden="true">
              <Icon name="design" /> Interface
            </div>
            <div className="orbit-chip chip-system" aria-hidden="true">
              <Icon name="database" /> Systems
            </div>
            <div className="orbit-chip chip-code" aria-hidden="true">
              <Icon name="code" /> Full-stack
            </div>
            <div className="hero-art-label">
              <span>
                <i />
                ENGINEERED FOR REAL-WORLD WORKFLOWS
              </span>
              <Icon name="code" />
            </div>
            <Dashboard hero />
            <div className="floating-note">
              <span className="note-icon">
                <Icon name="code" />
              </span>
              <div>
                From interface to infrastructure.
                <small>Design → Develop → Integrate</small>
              </div>
              <Icon name="check" />
            </div>
            <div className="hero-art-foot">
              <span>BUSINESS SOFTWARE · INTERFACE CONCEPT</span>
              <span>01 / 04</span>
            </div>
          </div>
        </section>
        <div className="identity-strip">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div
                className="marquee-group"
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
              >
                {[
                  "FULL-STACK DEVELOPMENT",
                  "BUSINESS SOFTWARE",
                  "WEB APPLICATIONS",
                  "UI/UX",
                  "AI & MACHINE LEARNING",
                ].map((name) => (
                  <span key={name}>
                    <i />
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <section id="about" className="section container about-section reveal">
          <div className="about-intro">
            <div>
              <div className="eyebrow">
                <span />
                THE PERSON BEHIND THE PRODUCT
              </div>
              <h2>
                Behind the Code<span className="gold-dot">.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I'm a Computer Science and Engineering graduate, currently
                pursuing an MSc in CSE. My focus is full-stack web development,
                business software and practical digital products.
              </p>
              <p>
                I combine software engineering, UI/UX and problem-solving to
                turn ideas and business requirements into functional,
                user-focused applications.
              </p>
            </div>
          </div>
          <div className="identity-cards">
            {[
              [
                "code",
                "Software Development",
                "Structured systems. Thoughtful implementation.",
              ],
              [
                "design",
                "UI/UX & Product Design",
                "Clear interfaces. Intuitive experiences.",
              ],
              [
                "brain",
                "AI / Machine Learning",
                "Research-led thinking. Data-driven solutions.",
              ],
            ].map(([icon, title, copy]) => (
              <div key={title}>
                <span className="identity-icon">
                  <Icon name={icon as IconName} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <Icon name="external" />
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className="projects-section section">
          <div className="container">
            <SectionHeading
              label="IDEAS TURNED INTO APPLICATIONS"
              title="Selected Work"
              description="Web applications, business solutions and research-driven projects."
            >
              <div className="filters" aria-label="Filter projects">
                {["All Projects", "Web & Business", "AI / Research"].map(
                  (f) => (
                    <button
                      key={f}
                      aria-pressed={filter === f}
                      className={filter === f ? "active" : ""}
                      onClick={() => setFilter(f)}
                    >
                      {f}
                    </button>
                  ),
                )}
              </div>
            </SectionHeading>
            <div className="project-grid">
              {visibleProjects.map((p) => (
                <article
                  className={`project-card ${
                    p.id === "erp" ? "featured-project" : ""
                  }`}
                  key={p.id}
                >
                  <ProjectVisual id={p.id} />
                  <div className="project-content">
                    <div className="project-category">
                      <span>
                        0{projects.indexOf(p) + 1} <i />
                        {p.category}
                      </span>
                      {p.id === "erp" && (
                        <span className="featured-label">FEATURED PROJECT</span>
                      )}
                      <Icon name="external" />
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <Tags items={p.stack} />
                    <div className="project-features">
                      {p.features.map((f) => (
                        <span key={f}>
                          <Icon name="check" />
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <button onClick={() => setSelected(p)}>
                        {p.primary}
                        <Icon name="external" />
                      </button>
                      <button
                        onClick={() =>
                          p.secondary === "GitHub"
                            ? setNotice(`${p.name} GitHub`)
                            : setSelected(p)
                        }
                      >
                        {p.secondary}
                        <Icon
                          name={p.secondary === "GitHub" ? "github" : "arrow"}
                        />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="work-footnote">
              <span>
                <Icon name="code" />
                Designed interfaces. Connected systems. Practical solutions.
              </span>
              <span>Project previews are illustrative interface concepts.</span>
            </div>
          </div>
        </section>
        <section className="section container build-section reveal">
          <SectionHeading
            label="FROM REQUIREMENTS TO REALITY"
            title="What I Build"
            description="Thoughtful digital products, built around the way people and businesses work."
          />
          <div className="build-grid">
            {([
              [
                "globe",
                "Business Websites",
                "Modern, responsive websites designed around business goals, usability and professional presentation.",
              ],
              [
                "code",
                "Web Applications",
                "Interactive web applications with structured frontend, backend and database systems.",
              ],
              [
                "grid",
                "Business Software",
                "Dashboards, ERP, CRM, inventory, POS and management solutions designed around business workflows.",
              ],
              [
                "design",
                "UI/UX → Development",
                "Turning Figma concepts into responsive, functional and production-ready web interfaces.",
              ],
            ] as const).map(([icon, title, text], i) => (
              <div className="build-card" key={title}>
                <div>
                  <Icon name={icon} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="build-card-line" />
              </div>
            ))}
          </div>
        </section>
        <section id="skills" className="section skills-section">
          <div className="container reveal">
            <SectionHeading
              label="THE TOOLS BEHIND THE WORK"
              title="Technical Expertise"
              description="A connected toolkit across interfaces, applications, data and design."
            />
            <div className="skills-grid">
              {skillGroups.map(([title, icon, skills]) => (
                <div className="skill-card" key={title}>
                  <h3>
                    <Icon name={icon} />
                    {title}
                  </h3>
                  <Tags items={[...skills]} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="research" className="research-section">
          <div className="container research-inner reveal">
            <div className="research-copy">
              <div className="eyebrow">
                <span />
                BEYOND THE INTERFACE
              </div>
              <h2>
                Research & AI<span className="gold-dot">.</span>
              </h2>
              <span className="research-badge">
                <Icon name="brain" />
                MACHINE LEARNING RESEARCH
              </span>
              <h3>
                Predicting Physical and Mental Health Risks Based on Eating
                Patterns
              </h3>
              <p>
                Exploring the relationship between eating patterns and physical
                and mental health risks among university students in Dhaka City
                using machine learning.
              </p>
              <p className="research-subtext">
                From careful data preparation to interpretable predictions—a
                research-driven approach to building useful AI applications.
              </p>
              <button
                className="text-link"
                onClick={() => setSelected(projects[0])}
              >
                Explore the research
                <Icon name="external" />
              </button>
            </div>
            <div className="research-diagram">
              <div className="pipeline-heading">
                <span>
                  <i />
                  THE RESEARCH PIPELINE
                </span>
                <span>INPUT → INSIGHT</span>
              </div>
              <div className="pipeline">
                {[
                  "Data",
                  "Data cleaning",
                  "Preprocessing",
                  "SMOTEN",
                  "Machine learning",
                  "Ensemble model",
                  "Prediction",
                  "Explainability",
                ].map((stage, i) => (
                  <div className={`pipeline-step step-${i}`} key={stage}>
                    <span className="pipeline-number">0{i + 1}</span>
                    <span>{stage}</span>
                    <Icon name={i === 7 ? "brain" : "arrow"} />
                  </div>
                ))}
              </div>
              <div className="model-tags">
                <span>MODELS & METHODS</span>
                <Tags
                  items={[
                    "Extra Trees",
                    "XGBoost",
                    "LightGBM",
                    "Random Forest",
                    "CatBoost",
                    "Stacking",
                    "Soft Voting",
                    "SHAP",
                    "LIME",
                    "FastAPI",
                    "Next.js",
                  ]}
                />
              </div>
              <div className="diagram-caption">
                <Icon name="check" />
                Research application · Not a medical diagnostic tool
              </div>
            </div>
          </div>
        </section>
        <section className="section container journey-section reveal">
          <SectionHeading
            label="A FOUNDATION BUILT THROUGH DOING"
            title="Professional Journey"
            description="Project-based development, academic research and continuous learning."
          />
          <div className="journey-grid">
            {[
              [
                "Software & Web Development",
                "Project-based development and application building—connecting interfaces, business logic and data.",
              ],
              [
                "UI/UX & Digital Product Design",
                "Designing interfaces and translating concepts into functional, responsive web experiences.",
              ],
              [
                "Academic & Machine Learning Research",
                "University research and final-year project work across data preparation, modeling and explainability.",
              ],
              [
                "Professional Learning",
                "Continuous development across full-stack technologies, AI/ML and modern software tools.",
              ],
            ].map(([title, text], i) => (
              <div className="journey-item" key={title}>
                <div className="journey-marker">
                  <span>0{i + 1}</span>
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="education" className="section education-section">
          <div className="container education-grid reveal">
            <div>
              <SectionHeading
                label="LEARNING WITH INTENTION"
                title="Education"
              />
              <div className="education-card">
                <div className="education-icon">
                  <Icon name="layers" />
                </div>
                <div>
                  <span className="education-date">
                    2026 – PRESENT <b>CURRENT</b>
                  </span>
                  <h3>MSc in Computer Science & Engineering</h3>
                  <p>Daffodil International University</p>
                </div>
                <Icon name="external" />
              </div>
              <div className="education-card">
                <div className="education-icon">
                  <Icon name="layers" />
                </div>
                <div>
                  <span className="education-date">COMPLETED 2026</span>
                  <h3>BSc in Computer Science & Engineering</h3>
                  <p>Daffodil International University</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section container reveal">
          <div className="contact-top">
            <div className="eyebrow">
              <span />
              GOOD WORK STARTS WITH A CONVERSATION
            </div>
            <span className="brand-mark contact-brand" aria-hidden="true">
              <img className="brand-logo" src={brandLogo} alt="" />
            </span>
          </div>
          <h2>
            Let's Build Something
            <br />
            <span>Meaningful.</span>
          </h2>
          <div className="contact-bottom">
            <p>
              Whether you're hiring, collaborating, or have a project idea,
              <br className="desktop-break" /> I'd love to connect.
            </p>
            <div className="contact-actions">
              <Button icon="mail" onClick={() => openLink("Email")}>
                Email Me
              </Button>
              {["LinkedIn", "GitHub", "Facebook"].map((s) => (
                <button
                  className="social-link"
                  key={s}
                  onClick={() => openLink(s)}
                >
                  {s}
                  <Icon name="external" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="container">
        <div className="footer-main">
          <div>
            <Brand />
            <p>
              Full-Stack Business Software Engineer
              <br />& Web Application Developer
            </p>
          </div>
          <div className="footer-links">
            <span>EXPLORE</span>
            {nav
              .filter((n) => n !== "Education")
              .map((n) => (
                <a key={n} href={`#${n.toLowerCase()}`}>
                  {n}
                </a>
              ))}
          </div>
          <div className="footer-links">
            <span>CONNECT</span>
            {["LinkedIn", "GitHub", "Facebook", "Email"].map((n) => (
              <button key={n} onClick={() => openLink(n)}>
                {n}
                <Icon name="external" />
              </button>
            ))}
          </div>
          <div className="footer-signoff">
            <span>
              DESIGN → DEVELOP
              <br />
              INTEGRATE → SOLVE
            </span>
            <a href="#home">
              Back to top <Icon name="external" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sinthia Siddiqa. All rights reserved.</span>
          <span>Thoughtfully designed. Purposefully built.</span>
        </div>
      </footer>
      <dialog
        ref={dialog}
        className={`detail-dialog ${notice ? "notice-dialog" : ""}`}
        onCancel={closeDialog}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog()
        }}
        aria-labelledby="dialog-title"
      >
        <button
          className="dialog-close"
          onClick={closeDialog}
          aria-label="Close dialog"
        >
          <Icon name="close" />
        </button>
        {selected && (
          <>
            <ProjectVisual id={selected.id} />
            <div className="dialog-content">
              <div className="eyebrow">
                <span />
                {selected.category}
              </div>
              <h2 id="dialog-title">{selected.name}</h2>
              <p>{selected.description}</p>
              <h3>Project approach</h3>
              <p>{selected.detail}</p>
              <Tags items={selected.stack} />
              <h3>Core focus</h3>
              <ul>
                {selected.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="dialog-disclaimer">
                The visual above is a concept preview, not a verified screenshot
                of the project. Live links and source repositories will be added
                when available.
              </div>
              <Button href="#contact" onClick={closeDialog}>
                Let's connect
              </Button>
            </div>
          </>
        )}
        {notice && (
          <div className="dialog-content notice-content">
            <span className="notice-icon">
              <Icon name={notice === "CV" ? "download" : "external"} />
            </span>
            <div className="eyebrow">
              <span />
              PORTFOLIO INFORMATION
            </div>
            <h2 id="dialog-title">
              {notice === "CV"
                ? "CV coming soon."
                : `${notice} link coming soon.`}
            </h2>
            <p>
              {notice === "CV"
                ? "A downloadable CV has not been added to this portfolio yet."
                : "The verified contact or project link has not been added yet. This placeholder will be replaced with the correct details."}
            </p>
            <Button onClick={closeDialog} icon="check">
              Got it
            </Button>
          </div>
        )}
      </dialog>
    </>
  )
}
