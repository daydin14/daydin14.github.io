import Reveal from '../components/layout/Reveal';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import GitHubCity from '../components/home/GitHubCity';
import Hero from '../components/home/Hero';
import ProjectsSection from '../components/home/ProjectsSection';
import SkillsSection from '../components/home/SkillsSection';
import LiveDemoSection from '../components/home/LiveDemoSection';

export default function HomePage() {
  return (
    <>
      <Reveal><Hero /></Reveal>
      <Reveal><AboutSection /></Reveal>
      <Reveal><ProjectsSection /></Reveal>
      <Reveal><LiveDemoSection/></Reveal>
      {/* <Reveal><GitHubCity /></Reveal> */}
      <Reveal><SkillsSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
    </>
  );
}
