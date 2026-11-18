import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import Hero from '../components/home/Hero';
import ProjectsSection from '../components/home/ProjectsSection';
import SkillsSection from '../components/home/SkillsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
