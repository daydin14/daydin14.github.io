import Features from '../components/about/Features';
import ProjectStructure from '../components/about/ProjectStructure';
import Technologies from '../components/about/Technologies';

export default function AboutPage() {
  return (
    <div className="shell">
      <header className="page-intro">
        <p className="eyebrow">Notes</p>
        <h1>About this web application: </h1>
      </header>
      <div className="stack">
        <Features />
        <Technologies />
        <ProjectStructure />
      </div>
    </div>
  );
}
