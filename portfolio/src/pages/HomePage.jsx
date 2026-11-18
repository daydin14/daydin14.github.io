import Reveal from '../components/layout/Reveal';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import GitHubCity from '../components/home/GitHubCity';
import Hero from '../components/home/Hero';
import ProjectsSection from '../components/home/ProjectsSection';
import { DockGuide, SideGuide } from '../components/home/SectionGuide';
import SkillsSection from '../components/home/SkillsSection';

export default function HomePage() {
  return (
    <div className="xl:grid xl:grid-cols-[12rem_minmax(0,1fr)]">
      <SideGuide />
      <div className="pb-24 xl:pb-0">
        <Reveal><Hero /></Reveal>
        <Reveal><AboutSection /></Reveal>
        <Reveal><ProjectsSection /></Reveal>
        <Reveal><GitHubCity /></Reveal>
        <Reveal><SkillsSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </div>
      <DockGuide />
    </div>
  );
}
