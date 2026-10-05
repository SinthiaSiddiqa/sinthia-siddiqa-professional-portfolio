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
      setScrolled(window.scrollY > 25);

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check for bottom of page (snap to contact)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // Check for top of page (snap to home)
      if (window.scrollY < 160) {
        setActiveSection("home");
        return;
      }

      // Active section detection based on section top offsets
      const sectionIds = navigation.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

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
            ? "bg-[#FAF7F4]/92 backdrop-blur-md border-b border-[#171717]/10 shadow-sm py-3"
            : "bg-[#FAF7F4]/40 backdrop-blur-xs py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Monogram & Candidate Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6E1423] rounded-xl"
            aria-label="Sinthia Siddiqa - Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[#B08D57]/40 bg-[#FAF7F4] shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#6E1423] ring-1 ring-black/5">
              <img
                src={ssLogo}
                alt="SS Monogram"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] font-bold text-base sm:text-lg text-[#171717] tracking-tight group-hover:text-[#6E1423] transition-colors leading-tight">
                Sinthia Siddiqa
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-[#6E1423]/90">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links (Responsive for lg and above) */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#171717]/10 shadow-xs"
            aria-label="Primary Navigation"
          >
            {navigation.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#6E1423] font-semibold bg-[#6E1423]/10"
                      : "text-[#171717]/75 hover:text-[#171717] hover:bg-black/4"
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

          {/* Right: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight text-white bg-[#6E1423] hover:bg-[#500D19] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-[#171717]/12 bg-white text-[#171717] hover:text-[#6E1423] hover:border-[#6E1423]/30 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-[#FAF7F4] border-b border-[#171717]/10 shadow-xl px-4 pt-3 pb-6"
            >
              <div className="flex flex-col gap-1 max-w-md mx-auto">
                {navigation.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeSection === id;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-[#6E1423]/10 text-[#6E1423] font-semibold"
                          : "text-[#171717]/80 hover:bg-black/4 hover:text-[#171717]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#6E1423]" />
                      )}
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-[#171717]/10">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
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
