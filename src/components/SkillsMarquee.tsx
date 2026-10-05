import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  marqueeRow1,
  marqueeRow2,
  skillCategories,
  type MarqueeSkill,
} from "../data/skills";

// Helper renderer for recognizable brand icons
function BrandSkillIcon({ type }: { type: string }) {
  switch (type) {
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 fill-none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 180 180" className="w-5 h-5 fill-current text-black">
          <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <g mask="url(#mask0)">
            <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
            <rect fill="white" height="72" width="12" x="115" y="54" />
          </g>
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <rect width="128" height="128" fill="#3178C6" rx="16" />
          <path d="M68 62h12v42H68V62zm-28 0h12v42H40V62zm-8-12h44V38H32v12z" fill="#FFF" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 630 630" className="w-5 h-5">
          <rect width="630" height="630" fill="#F7DF1E" />
          <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.3 0-28.3 11-28.3 25.4 0 17.7 11 25 35.5 35.5l14.8 6.34c50.3 21.6 79.5 43.6 79.5 93 0 53.3-41.9 84.6-96.8 84.6-54.1 0-88.8-26.2-105.7-60.9zm-209.98 5.5c8.9 15.2 17.3 28.3 37.2 28.3 19 0 31.3-7.6 31.3-37.2v-198.8h56.7v200.5c0 57.5-33.8 83.3-84.6 83.3-45.7 0-72.7-24.1-86.7-52.9z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#06B6D4]">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.975,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.975,12,6.001,12z" />
        </svg>
      );
    case "html5":
      return (
        <svg viewBox="0 0 512 512" className="w-5 h-5">
          <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z" />
          <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z" />
          <path fill="#ECECEC" d="M256 208h-74l-5-58h79V94H114l15 170h127zm0 156l-67-18-4-49h-57l8 97 120 33zm0-85h-1-62l-4-44h67z" />
          <path fill="#FFF" d="M256 94v56h78l-7 84h-71v56h67l-7 74-60 16v58l120-33 16-181 3-30h-139z" />
        </svg>
      );
    case "css3":
      return (
        <svg viewBox="0 0 512 512" className="w-5 h-5">
          <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z" />
          <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z" />
          <path fill="#FFF" d="M256 208h74l5-58h-79V94h142l-15 170H256zm0 156l67-18 4-49h57l-8 97-120 33zm0-85h1 62l4-44h-67z" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg viewBox="0 0 512 512" className="w-5 h-5 fill-[#7952B3]">
          <path d="M416 112c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V112zm-128 240h-72v-64h72c17.67 0 32 14.33 32 32s-14.33 32-32 32zm0-96h-72v-64h72c17.67 0 32 14.33 32 32s-14.33 32-32 32z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 fill-[#339933]">
          <path d="M16 2.375L3.625 9.531v14.281L16 30.969l12.375-7.156V9.531L16 2.375zm0 2.313l10.375 6v12L16 26.688l-10.375-6v-12l10.375-6z" />
        </svg>
      );
    case "express":
      return (
        <span className="font-['Space_Grotesk'] font-bold text-xs text-[#262626]">
          EX
        </span>
      );
    case "php":
      return (
        <svg viewBox="0 0 128 128" className="w-5 h-5 fill-[#777BB4]">
          <ellipse cx="64" cy="64" rx="60" ry="34" />
          <path d="M40 76h8l4-16h-8zm32 0h8l4-16h-8zm24-8c4 0 7-3 7-8s-3-8-7-8h-8l-4 16zm-48-8c4 0 7-3 7-8s-3-8-7-8h-8l-4 16z" fill="#FFF" />
        </svg>
      );
    case "laravel":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF2D20]">
          <path d="M22.5 13.9c-.2-.3-.5-.4-.8-.4l-5.4.1-1.7-3.1 3.5-2.2c.3-.2.5-.5.5-.8 0-.4-.2-.7-.5-.9L13.8.3c-.3-.2-.7-.2-1 0L8.5 2.8c-.3.2-.5.5-.5.9 0 .4.2.7.5.9l3.5 2.2-1.7 3.1-5.4-.1c-.4 0-.7.2-.8.4-.2.3-.2.7 0 1l4.4 7.5c.2.3.5.5.8.5h9.3c.4 0 .7-.2.8-.5l4.4-7.5c.2-.3.2-.7 0-1z" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <path d="M63.5 12c-27.4 0-25.8 11.9-25.8 11.9l.1 12.3h26.3v3.7H29.3C13 39.9 12 55.4 12 55.4s-.9 19.3 15.6 19.3h9.3v-13c0-14.8 12.9-14.3 12.9-14.3h25.4s12.5.2 12.5-12.2V24.5S89.5 12 63.5 12zm-14.2 7.7a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z" fill="#3776AB" />
          <path d="M64.5 116c27.4 0 25.8-11.9 25.8-11.9l-.1-12.3H63.9V88.1h34.8c16.3 0 17.3-15.5 17.3-15.5s.9-19.3-15.6-19.3h-9.3v13c0 14.8-12.9 14.3-12.9 14.3H43.3s-12.5-.2-12.5 12.2v20.7s-1.8 12.5 23.7 12.5zm14.2-7.7a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z" fill="#FFD438" />
        </svg>
      );
    case "mysql":
      return (
        <span className="font-['Space_Grotesk'] font-bold text-xs text-[#00758F]">
          MySQL
        </span>
      );
    case "oracle":
      return (
        <span className="font-['Space_Grotesk'] font-bold text-xs text-[#F80000]">
          ORACLE
        </span>
      );
    case "sql":
      return (
        <span className="font-['Space_Grotesk'] font-bold text-xs text-[#E48E00]">
          SQL
        </span>
      );
    case "flutter":
      return (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <path d="M73.4 18.5L25.3 66.6l16.1 16.1 64.2-64.2zm0 48.2L49.5 90.6l23.9 23.9h32.2L73.4 82.3l32.2-32.2z" fill="#02569B" />
          <path d="M73.4 82.3l-16.1 16.1 8 8 24.2-24.1z" fill="#0175C2" />
        </svg>
      );
    case "dart":
      return (
        <svg viewBox="0 0 128 128" className="w-5 h-5 fill-[#0175C2]">
          <path d="M24 16l40 40-16 16-40-40zm40 40l48-40-48 96-24-24z" />
        </svg>
      );
    case "java":
      return (
        <span className="font-['Space_Grotesk'] font-bold text-xs text-[#ED8B00]">
          Java
        </span>
      );
    case "cpp":
      return (
        <span className="font-['Space_Grotesk'] font-bold text-xs text-[#00599C]">
          C++
        </span>
      );
    case "c":
      return (
        <span className="font-['Space_Grotesk'] font-bold text-xs text-[#A8B9CC]">
          C
        </span>
      );
    case "git":
      return (
        <svg viewBox="0 0 128 128" className="w-5 h-5 fill-[#F05032]">
          <path d="M124.7 57.6L70.4 3.3c-4.4-4.4-11.5-4.4-15.9 0L42.2 15.6l20.4 20.4c4.7-1.6 10.1-.5 13.8 3.2 3.7 3.7 4.8 9.1 3.2 13.8l19.7 19.7c4.7-1.6 10.1-.5 13.8 3.2 5.3 5.3 5.3 13.9 0 19.2s-13.9 5.3-19.2 0c-4.1-4.1-5-10.2-2.7-15.1L72.5 61.3v34.4c1.3 1.1 2.4 2.5 3.2 4.1 4.4 8.7.9 19.3-7.8 23.7s-19.3.9-23.7-7.8c-4.4-8.7-.9-19.3 7.8-23.7 3.5-1.8 7.5-2.2 11.2-1.5V54.4c-3.7.7-7.7.3-11.2-1.5-4.9-2.3-8.2-6.8-9.1-12.1L21.7 61.2c-4.4 4.4-4.4 11.5 0 15.9l54.3 54.3c4.4 4.4 11.5 4.4 15.9 0l32.8-32.8c4.4-4.4 4.4-11.5 0-15.9z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#181717]">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 38 57" className="w-5 h-5">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
        </svg>
      );
    case "ml":
      return (
        <span className="font-['Space_Grotesk'] font-bold text-xs text-[#6E1423]">
          AI/ML
        </span>
      );
    case "uiux":
      return (
        <span className="font-['Space_Grotesk'] font-bold text-xs text-[#B08D57]">
          UI/UX
        </span>
      );
    default:
      return <span className="w-2 h-2 rounded-full bg-[#6E1423]" />;
  }
}

export default function SkillsMarquee() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Frontend");

  // Triple items for seamless loop without visual jumps
  const loopRow1 = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
  const loopRow2 = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

  const currentCategoryData =
    skillCategories.find((cat) => cat.category === selectedCategory) ||
    skillCategories[0];

  return (
    <section id="skills" className="py-24 sm:py-28 bg-[#FAF7F4] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="editorial-badge mb-4">
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
            Proven modern web languages, frontend libraries, server frameworks, and relational databases.
          </p>
        </div>
      </div>

      {/* SIGNATURE TWO-ROW MARQUEE (Continuous Left→Right & Right→Left with Colorful Icons) */}
      <div className="w-full overflow-hidden marquee-pause py-4 space-y-4 relative">
        {/* Row 1: Moves Left → Right */}
        <div className="flex overflow-hidden">
          <div className="marquee-ltr-track flex gap-3 sm:gap-4 items-center">
            {loopRow1.map((skill, idx) => (
              <div
                key={`r1-${skill.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#171717]/8 shadow-2xs hover:shadow-md hover:border-[#6E1423]/30 transition-all duration-200 cursor-default flex-shrink-0"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: skill.bgTint }}
                >
                  <BrandSkillIcon type={skill.iconType} />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] text-sm font-bold text-[#171717] tracking-tight">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-[#171717]/65 font-semibold tracking-wide">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right → Left */}
        <div className="flex overflow-hidden">
          <div className="marquee-rtl-track flex gap-3 sm:gap-4 items-center">
            {loopRow2.map((skill, idx) => (
              <div
                key={`r2-${skill.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#171717]/10 shadow-2xs hover:shadow-md hover:border-[#6E1423]/30 transition-all duration-200 cursor-default flex-shrink-0"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: skill.bgTint }}
                >
                  <BrandSkillIcon type={skill.iconType} />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] text-sm font-bold text-[#171717] tracking-tight">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-[#171717]/65 font-semibold tracking-wide">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPACT SKILL CATEGORIES BELOW MARQUEE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="editorial-card p-8 sm:p-10 bg-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#171717]/8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E1423]">
                SYSTEMATIC TAXONOMY
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#171717] mt-1">
                Explore Skills by Domain
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((cat) => (
                <button
                  type="button"
                  key={cat.category}
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat.category
                      ? "bg-[#6E1423] text-white shadow-xs"
                      : "bg-[#FAF7F4] text-[#171717]/70 hover:text-[#171717] border border-[#171717]/8"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Skills List */}
          <motion.div
            key={currentCategoryData.category}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs sm:text-sm text-[#171717]/60 mb-5">
              {currentCategoryData.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {currentCategoryData.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-xl bg-[#FAF7F4] border border-[#171717]/6 flex flex-col justify-between"
                >
                  <span className="font-['Space_Grotesk'] text-sm font-bold text-[#171717]">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-medium text-[#6E1423] mt-1">
                    {skill.tag}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
