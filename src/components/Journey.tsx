import { motion } from "framer-motion";
import { GraduationCap, Code2, Palette, Layers, Brain, BookOpen, Rocket } from "lucide-react";
import { journeyMilestones } from "../data/journey";

export default function Journey() {
  const iconList = [
    GraduationCap,
    Code2,
    Palette,
    Layers,
    Brain,
    BookOpen,
    Rocket,
  ];

  return (
    <section id="journey" className="py-24 sm:py-28 bg-[#FAF7F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="editorial-badge mb-4">
            <span>ENGINEERING TIMELINE</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
            Learning &amp; Professional Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#171717]/70 leading-relaxed font-normal">
            A continuous progression of technical mastery, academic scholarship, product craftsmanship, and enterprise application building.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-[#6E1423]/25 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {journeyMilestones.map((item, idx) => {
            const Icon = iconList[idx % iconList.length];

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Node Marker Dot on Timeline */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#6E1423] shadow-xs flex items-center justify-center text-[#6E1423] group-hover:scale-110 group-hover:bg-[#6E1423] group-hover:text-white transition-all duration-300">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Milestone Card */}
                <div className="editorial-card p-6 sm:p-7 bg-white group-hover:border-[#6E1423]/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-['Space_Grotesk'] text-xs font-bold text-[#6E1423] tracking-widest uppercase">
                      {item.phase}
                    </span>
                    <span className="text-xs font-mono text-[#171717]/40">
                      STEP {item.number}
                    </span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#171717] mb-1">
                    {item.title}
                  </h3>

                  <p className="font-['Space_Grotesk'] text-xs sm:text-sm font-semibold text-[#B08D57] mb-3">
                    {item.institutionOrFocus}
                  </p>

                  <p className="text-xs sm:text-sm text-[#171717]/70 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#171717]/6">
                    {item.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#FAF7F4] text-[#171717]/75 border border-[#171717]/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
