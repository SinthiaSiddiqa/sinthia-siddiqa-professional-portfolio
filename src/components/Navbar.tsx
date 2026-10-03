import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ssLogo from "../assets/sinthia-logo.jpg";
import { navigation } from "../data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background elevation on scroll
      setScrolled(window.scrollY > 30);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section detection
      const sections = navigation.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F4]/90 backdrop-blur-md border-b border-[#171717]/8 shadow-sm py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6E1423]"
            aria-label="Sinthia Siddiqa - Home"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#B08D57]/40 bg-[#FAF7F4] shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#6E1423] ring-1 ring-black/5">
              <img
                src={ssLogo}
                alt="SS Monogram"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] font-bold text-base sm:text-lg text-[#171717] tracking-tight group-hover:text-[#6E1423] transition-colors">
                Sinthia Siddiqa
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-[#6E1423]/80">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Center / Right: Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1.5 lg:gap-2.5 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#171717]/6 shadow-xs"
            aria-label="Primary Navigation"
          >
            {navigation.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-full text-[13px] font-medium tracking-tight transition-all duration-200 ${
                    isActive
                      ? "text-[#6E1423] font-semibold bg-[#6E1423]/8"
                      : "text-[#171717]/70 hover:text-[#171717] hover:bg-[#171717]/4"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-full border border-[#6E1423]/25"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight text-white bg-[#6E1423] hover:bg-[#500D19] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center border border-[#171717]/10 bg-white text-[#171717] hover:text-[#6E1423] hover:border-[#6E1423]/30 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="xl:hidden overflow-hidden bg-[#FAF7F4] border-b border-[#171717]/10 shadow-lg px-4 pt-3 pb-6"
            >
              <div className="flex flex-col gap-1 max-w-md mx-auto">
                {navigation.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeSection === id;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-[#6E1423]/10 text-[#6E1423] font-semibold"
                          : "text-[#171717]/80 hover:bg-black/4 hover:text-[#171717]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6E1423]" />
                      )}
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-[#171717]/10">
                  <a
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#6E1423] hover:bg-[#500D19] transition-colors"
                  >
                    <span>Let's Work Together</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
