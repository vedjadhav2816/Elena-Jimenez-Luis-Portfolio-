import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import VSLCaseStudy from "./components/VSLCaseStudy";
import AICaseStudy from "./components/AICaseStudy";  
import SocialContentCaseStudy from "./components/SocialContentCaseStudy";  
import PodcastCaseStudy from "./components/PodcastCaseStudy";
import CustomCursor from "./components/CustomCursor";
import GraphicDesignCaseStudy from "./components/GraphicDesignCaseStudy";
import UGCCaseStudy from "./components/UGCCaseStudy";
import Contact from "./components/Contact";
import CVPage from "./components/CVPage";
import Reviews from "./components/Reviews";   // <-- import

export default function App() {
  const location = useLocation();

  // Scroll to element based on hash when route changes
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
            <Footer />
            <CustomCursor />
          </>
        } />

        {/* Case Studies */}
        <Route path="/case-study/vsl" element={<VSLCaseStudy />} />
        <Route path="/case-study/ai" element={<AICaseStudy />} />
        <Route path="/case-study/social" element={<SocialContentCaseStudy />} />
        <Route path="/case-study/podcast" element={<PodcastCaseStudy />} />
        <Route path="/case-study/graphics" element={<GraphicDesignCaseStudy />} />
        <Route path="/case-study/ugc" element={<UGCCaseStudy />} />

        {/* New Routes */}
        <Route path="/cv" element={<CVPage />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}