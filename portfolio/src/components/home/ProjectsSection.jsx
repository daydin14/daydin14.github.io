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
            className={`btn btn-sm rounded-full ${selectedCategory === category ? 'btn-primary' : 'btn-ghost'}`}
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
          <article key={`${project.category}-${project.title}`} className="card project-card border border-base-300 bg-base-100 shadow-xl">
            <button type="button" className="project-open" aria-label={project.title} onClick={() => setSelectedProject(project)}>
              <figure>
                <img src={project.image} alt="" />
              </figure>
              <div className="card-body gap-2 text-left">
                <span className="badge badge-outline badge-sm w-fit">{project.category}</span>
                <h3 className="card-title">{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>
            </button>
            <div className="card-actions justify-end">
              <ProjectLinks project={project} />
            </div>
          </article>
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      <GitHubCity />
    </section>
  );
}
