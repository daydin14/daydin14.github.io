import { useCallback, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import ProjectDetails from '../../data/projects';
import ProjectLinks from './ProjectLinks';
import ProjectModal from './ProjectModal';
import techBadges from './techBadges';

const categories = ['Recent', 'All', 'Udemy', 'GA', 'SJU'];
const standoutTitles = new Set(['Chalkboard Games', 'JokerBlazor']);

function ProjectPreview({ project }) {
  if (!standoutTitles.has(project.title)) {
    return (
      <figure>
        <img className="h-44 w-full object-cover" src={project.image} alt="" />
      </figure>
    );
  }

  const address = project.liveDemoLink || project.githubRepoLink;

  return (
    <div className="mockup-browser border border-base-300 bg-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input truncate">{address}</div>
      </div>
      <img className="h-44 w-full bg-base-200 object-cover" src={project.image} alt="" />
    </div>
  );
}

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
        <div role="tablist" className="tabs tabs-boxed mb-8 w-full flex-nowrap overflow-x-auto" aria-label="Project categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              className={`tab ${selectedCategory === category ? 'tab-active' : ''}`}
              aria-selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {selectedCategory === 'Udemy' && (
          <div className="mb-6 flex items-center gap-3">
            <h3 className="text-2xl font-bold">Udemy Projects</h3>
            <a
              className="btn btn-outline btn-sm"
              href="https://github.com/daydin14/udemy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          </div>
        )}
        <div className="grid min-w-0 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={`${project.category}-${project.title}`} className="card card-bordered h-full min-w-0 overflow-hidden bg-base-200 shadow-md">
              <ProjectPreview project={project} />
              <div className="card-body">
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-primary badge-outline">{project.category}</span>
                  {techBadges(project).map((tech) => (
                    <span key={tech} className="badge badge-outline">{tech}</span>
                  ))}
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="line-clamp-4 text-base-content/80">{project.shortDescription}</p>
                <div className="card-actions mt-auto flex-wrap items-center justify-end">
                  <button type="button" className="btn btn-sm btn-ghost" onClick={() => setSelectedProject(project)}>
                    Details
                  </button>
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      </div>
    </section>
  );
}
