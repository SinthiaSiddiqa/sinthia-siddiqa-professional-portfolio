import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Database, Layers, CheckCircle2 } from "lucide-react";
import portraitImg from "../assets/sinthia-portrait-master.png";
import ssLogo from "../assets/sinthia-logo.jpg";

export default function Hero() {
  const primaryFocusList = [
    "Full-Stack Web Development",
    "Business Websites",
    "Web Applications",
    "Business Software / ERP",
    "React / Next.js",
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden scroll-mt-24"
    >
      {/* Editorial Background Subtle Glows */}
      <div
        className="absolute top-1/4 right-5 w-96 h-96 rounded-full bg-[#6E1423]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-5 w-80 h-80 rounded-full bg-[#B08D57]/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Name, Title, Focus & CTAs (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Brand Tag with SS Monogram */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#6E1423]/6 border border-[#6E1423]/15 text-[#6E1423] text-xs font-semibold tracking-wider uppercase font-['Space_Grotesk'] mb-5 shadow-2xs">
              <img
                src={ssLogo}
                alt="SS Monogram"
                className="w-4 h-4 rounded-full object-cover ring-1 ring-[#B08D57]/60"
              />
              <span>Full-Stack Web Development &bull; Business Systems</span>
            </div>

            {/* Candidate Name */}
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#171717] leading-[1.08] tracking-tight mb-3">
              Sinthia Siddiqa
            </h1>

            {/* Professional Title */}
            <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl lg:text-[25px] font-semibold text-[#6E1423] tracking-tight leading-snug mb-5">
              Full-Stack Business Software Engineer{" "}
              <span className="text-[#171717]/80 block sm:inline font-normal">
                &amp; Web Application Developer
              </span>
            </h2>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-[#171717]/80 font-normal leading-relaxed max-w-2xl mb-6">
              I design and build modern, scalable web applications and business software that turn complex workflows into simple, high-performing digital experiences.
            </p>

            {/* Primary Focus Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {primaryFocusList.map((focus, idx) => (
                <span
                  key={focus}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border shadow-2xs ${
                    idx === 0 || idx === 4
                      ? "bg-[#6E1423]/8 border-[#6E1423]/20 text-[#6E1423] font-semibold"
                      : "bg-white border-[#171717]/10 text-[#171717]/85"
                  }`}
                >
                  {focus}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#6E1423] hover:bg-[#500D19] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 text-white/90" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#171717] bg-white hover:bg-[#FAF7F4] border border-[#171717]/15 hover:border-[#6E1423]/40 transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#6E1423]" />
              </a>
            </div>

            {/* Quick Specialization Proof Points */}
            <div className="mt-10 pt-6 border-t border-[#171717]/10 flex flex-wrap items-center gap-6 text-xs text-[#171717]/75">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#6E1423]" />
                <span className="font-medium">React / Next.js Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B08D57]" />
                <span className="font-medium">ERP &amp; Management Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#6E1423]" />
                <span className="font-medium">Relational Data &amp; APIs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Portrait Container (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative w-full mt-4 lg:mt-0"
          >
            {/* Visual Frame & Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
              {/* Outer subtle gold accent border */}
              <div
                className="absolute -inset-2.5 rounded-3xl border border-[#B08D57]/30 -rotate-1 pointer-events-none transition-transform duration-500 hover:rotate-0"
                aria-hidden="true"
              />

              {/* Burgundy soft glow backdrop */}
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#6E1423]/12 to-[#B08D57]/12 rotate-1 blur-xs pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Portrait Frame */}
              <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#6E1423]/25 shadow-xl shadow-black/8 group">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F4]">
                  <img
                    src={portraitImg}
                    alt="Sinthia Siddiqa — Full-Stack Business Software Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                </div>

                {/* Bottom Portrait Caption Pill */}
                <div className="absolute bottom-3 left-3 right-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#171717]/10 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={ssLogo}
                      alt="SS Monogram"
                      className="w-8 h-8 rounded-lg object-cover border border-[#B08D57]/40 shadow-2xs"
                    />
                    <div>
                      <p className="font-['Space_Grotesk'] font-bold text-xs text-[#171717]">
                        Sinthia Siddiqa
                      </p>
                      <p className="text-[10px] text-[#6E1423] font-medium">
                        Full-Stack &amp; Business Systems
                      </p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#6E1423] shadow-xs" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
