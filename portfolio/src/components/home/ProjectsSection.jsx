import { useCallback, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import ProjectDetails from '../../data/projects';
import GitHubCity from './GitHubCity';
import ProjectLinks from './ProjectLinks';
import ProjectModal from './ProjectModal';
import techBadges from './techBadges';

const categories = ['Recent', 'All', 'Udemy', 'GA', 'SJU'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Recent');
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  const filteredProjects = selectedCategory === 'All'
    ? ProjectDetails
    : ProjectDetails.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="scroll-mt-24 bg-base-100 px-4 py-16 md:py-24" aria-labelledby="projects-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="projects-heading" className="mb-6 text-4xl font-bold md:text-5xl">Projects</h2>
        <div className="join mb-8 flex flex-wrap" role="group" aria-label="Project categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`btn join-item btn-sm ${selectedCategory === category ? 'btn-primary' : 'btn-ghost'}`}
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {selectedCategory === 'Udemy' && (
          <div className="mb-6 flex items-center gap-3">
            <h3 className="text-2xl font-bold">Udemy Projects</h3>
            <div className="tooltip" data-tip="GitHub">
              <a
                className="btn btn-ghost btn-sm btn-circle"
                href="https://github.com/daydin14/udemy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={`${project.category}-${project.title}`}
              className="card border border-base-300 bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1"
            >
              <button type="button" className="text-left" aria-label={project.title} onClick={() => setSelectedProject(project)}>
                <figure>
                  <img className="h-40 w-full object-cover" src={project.image} alt="" />
                </figure>
                <div className="card-body gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-primary badge-outline">{project.category}</span>
                    {techBadges(project).map((tech) => (
                      <span key={tech} className="badge badge-ghost">{tech}</span>
                    ))}
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="text-base-content/80">{project.shortDescription}</p>
                </div>
              </button>
              <div className="card-actions justify-end px-4 pb-4">
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
        <GitHubCity />
      </div>
    </section>
  );
}
