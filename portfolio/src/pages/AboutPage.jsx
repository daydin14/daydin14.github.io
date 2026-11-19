import Features from '../components/about/Features';
import ProjectStructure from '../components/about/ProjectStructure';
import Technologies from '../components/about/Technologies';

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">About this web application: </h1>
      </header>
      <div className="grid gap-6">
        <Features />
        <Technologies />
        <ProjectStructure />
      </div>
    </div>
  );
}
