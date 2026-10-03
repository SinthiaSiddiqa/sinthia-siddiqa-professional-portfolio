import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, Activity, Globe, HeartPulse } from "lucide-react";
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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.filterCategories.includes(activeCategory as any));

  return (
    <section id="projects" className="py-24 sm:py-28 bg-[#FAF7F4] relative overflow-hidden">
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
            <p className="mt-4 text-base text-[#171717]/70 leading-relaxed font-normal">
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
                    : "bg-white text-[#171717]/70 hover:text-[#171717] border border-[#171717]/8 hover:border-[#6E1423]/30"
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
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="editorial-card overflow-hidden flex flex-col justify-between group"
              >
                {/* Visual Preview Header */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] bg-[#FAF7F4] border-b border-[#171717]/8 overflow-hidden cursor-pointer"
                >
                  {project.hasRealImage ? (
                    <img
                      src={erpImg}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-104"
                    />
                  ) : (
                    /* Abstract Architectural UI Mockup */
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-white to-[#FAF7F4]">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-widest text-[#6E1423] uppercase font-bold">
                          {project.category}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
                      </div>

                      <div className="my-auto py-4">
                        <div className="flex items-center gap-2 mb-2">
                          {project.id === "nutritrack" && (
                            <HeartPulse className="w-6 h-6 text-[#6E1423]" />
                          )}
                          {project.id === "soulsync" && (
                            <Activity className="w-6 h-6 text-[#6E1423]" />
                          )}
                          {project.id === "unique-trade-line" && (
                            <Globe className="w-6 h-6 text-[#6E1423]" />
                          )}
                          <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#171717]">
                            {project.title}
                          </h4>
                        </div>
                        <p className="text-xs text-[#171717]/60 line-clamp-2">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Mock Code / Data Snippet Footer */}
                      <div className="p-2.5 rounded-lg bg-black/3 border border-black/5 flex items-center justify-between text-[11px] font-mono text-[#171717]/60">
                        <span>pipeline: verified</span>
                        <span className="text-[#6E1423] font-semibold">explore case study →</span>
                      </div>
                    </div>
                  )}

                  {/* Overlay trigger */}
                  <div className="absolute inset-0 bg-[#6E1423]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white/95 text-xs font-semibold text-[#6E1423] shadow-md">
                      View Case Study
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#171717]/50 mb-3">
                      <span className="font-['Space_Grotesk'] font-bold text-[#6E1423]">
                        {project.category}
                      </span>
                      <span className="font-mono">0{project.number}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-['Space_Grotesk'] text-2xl font-bold text-[#171717] tracking-tight mb-2 hover:text-[#6E1423] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#6E1423] mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#171717]/70 leading-relaxed mb-6 line-clamp-3">
                      {project.problem}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#FAF7F4] text-[#171717]/70 border border-[#171717]/6"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[11px] font-medium px-2 py-1 rounded-md bg-[#FAF7F4] text-[#6E1423]">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-[#171717]/8 flex items-center justify-between">
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
                        className="text-[#171717]/60 hover:text-[#171717] transition-colors p-1"
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
