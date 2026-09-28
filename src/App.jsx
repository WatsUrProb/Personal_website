import AnimatedBackground from "./components/AnimatedBackground";
import Navigation from "./components/Navigation";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import useOriginalInteractions from "./hooks/useOriginalInteractions";

export default function App() {
  useOriginalInteractions();

  return (
    <div id="container">
      <AnimatedBackground />
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <div className="last-text test"><p>Developed out of boredom by Jovan 2025</p></div>
      <a href="#container" className="top test">
        <i className="bx bxs-chevron-up-circle bx-tada" style={{ color: "rgba(7,243,164,0.99)" }} aria-hidden="true" />
      </a>
    </div>
  );
}
