import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  professionalGrowthData,
  continuousLearningStats,
  type CertificationItem,
} from "../data/growth";

const filterCategories = ["All", "Specialization", "Training", "Certification", "Workshop"] as const;

export default function ProfessionalGrowth() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems =
    activeCategory === "All"
      ? professionalGrowthData
      : professionalGrowthData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="growth"
      className="py-20 sm:py-24 bg-[#FAF7F4] relative overflow-hidden scroll-mt-24"
    >
      {/* Decorative Glow */}
      <div
        className="absolute top-1/3 left-0 w-80 h-80 bg-[#6E1423]/4 rounded-full blur-3xl pointer-events-none -translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none translate-x-1/2"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="editorial-badge mb-4">
              <span>CAREER &amp; TECHNICAL EXCELLENCE</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
              Professional Growth &amp; Certifications
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#171717]/75 leading-relaxed font-normal">
              Specialized industry training, practical engineering workshops, and career learning achievements focused on real-world business software delivery.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
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

        {/* Growth Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="editorial-card p-6 sm:p-7 bg-white flex flex-col justify-between group hover:border-[#6E1423]/30 transition-all duration-300"
              >
                <div>
                  {/* Card Header: Category & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6E1423] px-2.5 py-0.5 rounded-md bg-[#6E1423]/8 border border-[#6E1423]/15">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B08D57]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-[#171717] mb-1.5 group-hover:text-[#6E1423] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#171717]/65 mb-4">
                    {item.issuer}
                  </p>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#171717]/75 leading-relaxed mb-5">
                    {item.credentialSummary}
                  </p>

                  {/* Core Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#171717]/8">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#171717]/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6E1423] flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Acquired Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#171717]/8">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#FAF7F4] text-[#171717]/80 border border-[#171717]/8"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Continuous Learning KPI Summary Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#171717]/10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6E1423]/8 border border-[#6E1423]/20 flex items-center justify-center text-[#6E1423]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#171717]">
                  Commitment to Lifelong Engineering Mastery
                </h4>
                <p className="text-xs sm:text-sm text-[#171717]/70">
                  Continuous skill acquisition through rigorous engineering practice, workshops, and production deployments.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full md:w-auto">
              {continuousLearningStats.map((stat) => (
                <div key={stat.label} className="text-center md:text-right">
                  <div className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#6E1423]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-[#171717]/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
