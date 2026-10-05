import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import SkillsMarquee from "./components/SkillsMarquee";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Education from "./components/Education";
import ProfessionalGrowth from "./components/ProfessionalGrowth";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F4] text-[#171717] selection:bg-[#6E1423]/15 selection:text-[#6E1423] font-['Inter',sans-serif] antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections with Deterministic DOM Order */}
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <SkillsMarquee />
        <Services />
        <Workflow />
        <Projects />
        <Architecture />
        <Education />
        <ProfessionalGrowth />
        <Contact />
      </main>

      {/* Footer & Back to top button */}
      <Footer />
      <BackToTop />
    </div>
  );
}