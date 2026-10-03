import { useState, useEffect } from "react";
import Brand from "./Brand";
import Button from "./Button";
import { navigation } from "../data/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navigation.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Main Navigation">
          {navigation.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? "active-nav-link" : ""}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <Button href="#contact" variant="secondary">
            Let's Talk
          </Button>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav ${mobileMenuOpen ? "is-open" : ""}`}
        aria-label="Mobile Navigation"
      >
        {navigation.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;
          return (
            <a
              key={item.label}
              href={item.href}
              className={isActive ? "active-nav-link" : ""}
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          );
        })}
        <div className="mobile-nav-cta">
          <Button href="#contact" onClick={closeMobileMenu}>
            Let's Talk
          </Button>
        </div>
      </nav>
    </header>
  );
}