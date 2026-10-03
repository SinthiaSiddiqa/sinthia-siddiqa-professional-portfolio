import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "../data/projects";
import erpImg from "../assets/erp-showcase.png";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl border border-[#171717]/10 shadow-2xl p-6 sm:p-10 my-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#FAF7F4] border border-[#171717]/10 flex items-center justify-center text-[#171717] hover:text-[#6E1423] hover:border-[#6E1423]/30 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="editorial-badge text-xs">
                {project.category}
              </span>
              <span className="text-xs text-[#171717]/40 font-mono">
                CASE STUDY {project.number}
              </span>
            </div>

            <h2
              id="modal-project-title"
              className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] tracking-tight leading-snug"
            >
              {project.title}
            </h2>

            <p className="font-['Space_Grotesk'] text-sm sm:text-base font-semibold text-[#6E1423] mt-1.5">
              {project.subtitle}
            </p>
          </div>

          {/* Visual Showcase Block */}
          {project.hasRealImage && (
            <div className="mb-8 rounded-2xl overflow-hidden border border-[#171717]/10 bg-[#FAF7F4] shadow-sm flex items-center justify-center">
              <img
                src={erpImg}
                alt={`${project.title} Modern Dashboard Showcase`}
                className="w-full h-auto max-h-[440px] object-contain object-center"
              />
            </div>
          )}

          {/* Problem vs Solution Editorial Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-[#FAF7F4] border border-[#171717]/8">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#171717]/50 uppercase tracking-wider block mb-2">
                01 · THE PROBLEM
              </span>
              <p className="text-sm text-[#171717]/80 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#6E1423]/5 border border-[#6E1423]/15">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#6E1423] uppercase tracking-wider block mb-2">
                02 · ENGINEERED SOLUTION
              </span>
              <p className="text-sm text-[#171717]/80 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Connected Modules List (ERP-specific) */}
          {project.modules && (
            <div className="mb-8 p-6 rounded-2xl bg-white border border-[#171717]/8 shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-[#6E1423]" />
                <h3 className="font-['Space_Grotesk'] text-sm font-bold text-[#171717] uppercase tracking-wider">
                  Operational Modules Connected ({project.modules.length} Modules)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.modules.map((mod) => (
                  <span
                    key={mod}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#FAF7F4] border border-[#171717]/8 text-[#171717] font-medium"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Architectural Highlights / Features */}
          <div className="mb-8">
            <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#171717] mb-3">
              Key Capabilities &amp; Architecture
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]/75">
                  <CheckCircle2 className="w-4 h-4 text-[#6E1423] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Tag Cloud */}
          <div className="mb-8 pt-6 border-t border-[#171717]/8">
            <h3 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#171717]/50 mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F4] text-[#171717] border border-[#171717]/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Disclaimer if present (NutriTrack medical notice) */}
          {project.disclaimer && (
            <div className="mb-8 p-4 rounded-xl bg-[#FAF7F4] border-l-3 border-[#B08D57] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#171717]/70 leading-relaxed font-normal">
                {project.disclaimer}
              </p>
            </div>
          )}

          {/* Modal Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#171717]/8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#171717] hover:bg-[#333] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#171717] bg-[#FAF7F4] hover:bg-[#FAF7F4]/80 border border-[#171717]/10 transition-colors ml-auto"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}