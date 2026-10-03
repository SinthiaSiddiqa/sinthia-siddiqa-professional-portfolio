import { motion } from "framer-motion";
import { Compass, Code, Briefcase, Brain, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

export default function About() {
  const iconMap: Record<string, typeof Compass> = {
    "01": Compass,
    "02": Code,
    "03": Briefcase,
    "04": Brain,
  };

  return (
    <section id="about" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-[#6E1423]/3 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="editorial-badge mb-4">
            <span>ABOUT &amp; PHILOSOPHY</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
            Engineering With Design Thinking
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#171717]/70 leading-relaxed font-normal">
            {profile.about}
          </p>
        </div>

        {/* Narrative & Perspective Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-7 bg-[#FAF7F4] p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#171717]/8 relative">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#6E1423]">
              THE APPROACH
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#171717] mt-3 mb-4">
              Building systems that people actually enjoy using.
            </h3>
            <p className="text-sm sm:text-base text-[#171717]/75 leading-relaxed mb-4">
              Too much software is built solely for developers or solely for visual presentations without regard for technical rigor. My core principle is balance: crafting user interfaces that are clean, empathetic, and intuitive, backed by architectures that are robust, testable, and maintainable.
            </p>
            <p className="text-sm sm:text-base text-[#171717]/75 leading-relaxed">
              Whether building an enterprise inventory dashboard, an interactive research prototype, or a commercial storefront, I translate business requirements into functional digital products with clear information architecture.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#6E1423] to-[#500D19] p-8 sm:p-10 rounded-2xl sm:rounded-3xl text-white shadow-lg shadow-[#6E1423]/10">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#E8D5D8]">
              CORE FOCUS
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mt-3 mb-4">
              Business Impact &amp; Scalability
            </h3>
            <ul className="space-y-3.5 text-sm text-[#FAF7F4]/90">
              <li className="flex items-start gap-2.5">
                <span className="text-[#B08D57] font-bold">✓</span>
                <span>Bridging Figma UI/UX prototypes directly into production code</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#B08D57] font-bold">✓</span>
                <span>Connecting CRM, sales, and accounting into unified workflows</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#B08D57] font-bold">✓</span>
                <span>Building resilient full-stack web applications with React &amp; Node</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#B08D57] font-bold">✓</span>
                <span>Integrating data models and machine learning pipelines</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/15">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FAF7F4] hover:text-[#B08D57] transition-colors"
              >
                <span>Explore Technical Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* "What I Bring" 4 Cards */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#171717]">
              What I Bring to Every Project
            </h3>
            <span className="text-xs text-[#171717]/50 font-medium">04 Foundational Pillars</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.whatIBring.map((item) => {
              const Icon = iconMap[item.number] || Compass;

              return (
                <div
                  key={item.number}
                  className="editorial-card p-6 sm:p-7 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-['Space_Grotesk'] text-xs font-bold text-[#6E1423] tracking-widest">
                        {item.number}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#6E1423]/6 flex items-center justify-center text-[#6E1423] group-hover:bg-[#6E1423] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#171717] mb-2 group-hover:text-[#6E1423] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#171717]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
