import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Journey from "./components/Journey";
import Education from "./components/Education";
import SkillsMarquee from "./components/SkillsMarquee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F4] text-[#171717] selection:bg-[#6E1423]/15 selection:text-[#6E1423] font-['Inter',sans-serif] antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Workflow />
        <Projects />
        <Architecture />
        <Journey />
        <Education />
        <SkillsMarquee />
        <Contact />
      </main>

      {/* Footer & Back to top button */}
      <Footer />
      <BackToTop />
    </div>
  );
}