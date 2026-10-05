import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  HeartPulse,
  Activity,
  Globe,
  Database,
  ShieldCheck,
  Cpu,
  BarChart3,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects, type ProjectCategory, type Project } from "../data/projects";
import ProjectModal from "./ProjectModal";
import erpImg from "../assets/erp-showcase.png";

const categories: ProjectCategory[] = [
  "All",
  "Business Software",
  "Web Applications",
  "Research",
  "Websites",
];

// Helper to render realistic browser frame with domain-specific mockups
function ProjectThumbnail({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const urlSlugs: Record<string, string> = {
    "erp-system": "app.sinthia.dev / erp-dashboard",
    nutritrack: "research.sinthia.dev / nutritrack-ai",
    soulsync: "soulsync.sinthia.dev / portal",
    "unique-trade-line": "uniquetradeline.com / global-trade",
  };

  const currentSlug = urlSlugs[project.id] || "sinthia.dev / project";

  return (
    <div
      onClick={onOpen}
      className="relative aspect-[16/10] bg-[#121212] border-b border-[#171717]/10 overflow-hidden cursor-pointer flex flex-col group/thumb"
    >
      {/* Universal Browser Window Toolbar */}
      <div className="bg-[#1C1C1E] px-3.5 py-2 flex items-center justify-between border-b border-white/8 select-none z-10 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/85" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/85" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/85" />
        </div>

        <div className="px-3 py-0.5 rounded-md bg-white/8 text-[11px] font-mono text-[#FAF7F4]/75 max-w-[210px] truncate border border-white/6">
          {currentSlug}
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">LIVE</span>
        </div>
      </div>

      {/* Frame Visual Content */}
      <div className="relative flex-grow overflow-hidden bg-[#FAF7F4]">
        {project.id === "erp-system" && project.hasRealImage ? (
          <img
            src={erpImg}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-[1.02]"
          />
        ) : project.id === "nutritrack" ? (
          /* NutriTrack AI Health Risk Predictor UI Mockup */
          <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAF7F4] via-white to-[#F2EAE7] text-[#171717] select-none transition-transform duration-500 group-hover/thumb:scale-[1.01]">
            <div className="flex items-center justify-between pb-2 border-b border-[#171717]/8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#6E1423] text-white flex items-center justify-center">
                  <HeartPulse className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#171717]">
                    NutriTrack AI
                  </span>
                  <span className="text-[10px] text-[#6E1423] block font-medium">
                    Lifestyle Health Risk Engine
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                SMOTEN + XGBoost
              </span>
            </div>

            <div className="grid grid-cols-12 gap-3 my-auto py-2 items-center">
              {/* Risk Score Circle */}
              <div className="col-span-5 bg-white p-2.5 rounded-xl border border-[#171717]/8 shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-mono font-bold text-[#6E1423]">
                  RISK ASSESSMENT
                </span>
                <div className="font-['Space_Grotesk'] text-2xl font-bold text-emerald-600 my-0.5">
                  82<span className="text-sm font-semibold">%</span>
                </div>
                <span className="text-[10px] font-medium text-[#171717]/70">
                  Optimal / Low Risk
                </span>
              </div>

              {/* Progress Feature Metrics */}
              <div className="col-span-7 space-y-1.5 bg-white p-2.5 rounded-xl border border-[#171717]/8 shadow-2xs text-[10px]">
                <div>
                  <div className="flex justify-between font-medium text-[#171717]/80 mb-0.5">
                    <span>Dietary Regularity</span>
                    <span className="font-bold text-[#6E1423]">88%</span>
                  </div>
                  <div className="w-full bg-[#171717]/6 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#6E1423] h-1.5 rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-[#171717]/80 mb-0.5">
                    <span>Sleep Lifestyle Index</span>
                    <span className="font-bold text-[#B08D57]">74%</span>
                  </div>
                  <div className="w-full bg-[#171717]/6 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#B08D57] h-1.5 rounded-full w-[74%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-[#171717]/80 mb-0.5">
                    <span>Psychological Stress</span>
                    <span className="font-bold text-emerald-600">Low (22%)</span>
                  </div>
                  <div className="w-full bg-[#171717]/6 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-500 h-1.5 rounded-full w-[22%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#171717]/8 flex items-center justify-between text-[10px] text-[#171717]/65">
              <span>SHAP &amp; LIME Local Attributions Active</span>
              <span className="font-semibold text-[#6E1423]">FastAPI REST Engine</span>
            </div>
          </div>
        ) : project.id === "soulsync" ? (
          /* SoulSync Full-Stack Web App UI Mockup */
          <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAF7F4] via-white to-[#F5EFEA] text-[#171717] select-none transition-transform duration-500 group-hover/thumb:scale-[1.01]">
            <div className="flex items-center justify-between pb-2 border-b border-[#171717]/8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#6E1423] text-white flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#171717]">
                    SoulSync Application
                  </span>
                  <span className="text-[10px] text-[#6E1423] block font-medium">
                    Responsive Full-Stack Portal
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                MySQL Sync
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto py-2">
              <div className="bg-white p-2.5 rounded-xl border border-[#171717]/8 shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-semibold text-[#171717]/60">
                    USER SESSIONS
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="font-['Space_Grotesk'] text-lg font-bold text-[#171717]">
                  Connected
                </div>
                <p className="text-[10px] text-[#171717]/70 mt-0.5">
                  Real-time Node.js state pipeline
                </p>
              </div>

              <div className="bg-white p-2.5 rounded-xl border border-[#171717]/8 shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-semibold text-[#171717]/60">
                    RELATIONAL SCHEMA
                  </span>
                  <Database className="w-3.5 h-3.5 text-[#B08D57]" />
                </div>
                <div className="font-['Space_Grotesk'] text-lg font-bold text-[#6E1423]">
                  3,420+
                </div>
                <p className="text-[10px] text-[#171717]/70 mt-0.5">
                  Normalized database records
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#171717]/8 flex items-center justify-between text-[10px] text-[#171717]/65">
              <span>Latency: 42ms &bull; React Client</span>
              <span className="font-semibold text-[#6E1423]">Explore Case Study →</span>
            </div>
          </div>
        ) : (
          /* Unique Trade Line B2B Portal UI Mockup */
          <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAF7F4] via-white to-[#F0EBE5] text-[#171717] select-none transition-transform duration-500 group-hover/thumb:scale-[1.01]">
            <div className="flex items-center justify-between pb-2 border-b border-[#171717]/8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#6E1423] text-white flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#171717]">
                    Unique Trade Line
                  </span>
                  <span className="text-[10px] text-[#6E1423] block font-medium">
                    Corporate B2B Trade Platform
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-bold">
                SEO Optimized
              </span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#171717]/8 shadow-2xs my-auto py-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B08D57]">
                COMMERCIAL COMMERCE
              </span>
              <h5 className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-[#171717] mt-1 mb-1 leading-snug">
                Building a Stronger Digital Commerce Presence
              </h5>
              <p className="text-[10px] sm:text-[11px] text-[#171717]/70 line-clamp-2">
                Structured product catalog, verified B2B inquiry pipeline, and high-conversion commercial presentation.
              </p>
            </div>

            <div className="pt-2 border-t border-[#171717]/8 flex items-center justify-between text-[10px] text-[#171717]/65">
              <span>99+ Google Lighthouse Score</span>
              <span className="font-semibold text-[#6E1423]">Verified Business Website</span>
            </div>
          </div>
        )}

        {/* Hover Action Badge Overlay */}
        <div className="absolute inset-0 bg-[#6E1423]/12 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <span className="px-4 py-2 rounded-full bg-white/95 text-xs font-semibold text-[#6E1423] shadow-md border border-[#6E1423]/20 flex items-center gap-1.5">
            <span>View Case Study</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.filterCategories.includes(activeCategory as any));

  return (
    <section
      id="projects"
      className="py-24 sm:py-28 bg-[#FAF7F4] relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="editorial-badge mb-4">
              <span>FEATURED CASE STUDIES</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
              Real Software &amp; Business Systems
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#171717]/75 leading-relaxed font-normal">
              In-depth engineering case studies spanning enterprise ERP suites, full-stack web applications, predictive machine learning research, and commercial platforms.
            </p>
          </div>

          {/* Filtering Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#6E1423] text-white shadow-xs"
                    : "bg-white text-[#171717]/75 hover:text-[#171717] border border-[#171717]/10 hover:border-[#6E1423]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="editorial-card overflow-hidden flex flex-col justify-between group bg-white hover:border-[#6E1423]/35 transition-all duration-300"
              >
                {/* Visual Preview Header (Consistent Aspect Ratio 16/10 for all) */}
                <ProjectThumbnail
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />

                {/* Card Content Body */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#171717]/60 mb-3">
                      <span className="font-['Space_Grotesk'] font-bold text-[#6E1423] uppercase tracking-wider text-[11px]">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#171717]/50">
                        0{project.number}
                      </span>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-['Space_Grotesk'] text-2xl font-bold text-[#171717] tracking-tight mb-2 hover:text-[#6E1423] transition-colors cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] font-semibold text-[#6E1423] mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#171717]/75 leading-relaxed mb-6 line-clamp-3">
                      {project.problem}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#FAF7F4] text-[#171717]/80 border border-[#171717]/8"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[11px] font-medium px-2 py-1 rounded-md bg-[#FAF7F4] text-[#6E1423] border border-[#6E1423]/15">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-[#171717]/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6E1423] hover:text-[#500D19] transition-colors cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#171717]/70 hover:text-[#171717] transition-colors p-1.5 rounded-lg hover:bg-black/5"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
