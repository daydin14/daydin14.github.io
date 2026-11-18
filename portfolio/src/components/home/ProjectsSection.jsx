import { useCallback, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import ProjectDetails from '../../data/projects';
import GitHubCity from './GitHubCity';
import ProjectLinks from './ProjectLinks';
import ProjectModal from './ProjectModal';

const categories = ['Recent', 'All', 'Udemy', 'GA', 'SJU'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Recent');
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  const filteredProjects = selectedCategory === 'All'
    ? ProjectDetails
    : ProjectDetails.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="section shell" aria-labelledby="projects-heading">
      <div className="section-heading">
        <p className="eyebrow">02</p>
        <h2 id="projects-heading">Projects</h2>
      </div>
      <div className="filters" role="group" aria-label="Project categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="filter"
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory === 'Udemy' && (
        <div className="category-note">
          <h3>Udemy Projects</h3>
          <a
            className="icon-button"
            href="https://github.com/daydin14/udemy"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      )}
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article key={`${project.category}-${project.title}`} className="project-card">
            <button type="button" className="project-open" aria-label={project.title} onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt="" />
              <div className="project-copy">
                <span className="project-kicker">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>
            </button>
            <ProjectLinks project={project} />
          </article>
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      <GitHubCity />
    </section>
  );
}
