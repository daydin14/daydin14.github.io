import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import ProjectDetails from '../../data/projects';
import ProjectLinks from './ProjectLinks';
import ProjectModal from './ProjectModal';

const categories = ['Recent', 'All', 'Udemy', 'GA', 'SJU'];
const standoutTitles = new Set(['Chalkboard Games', 'JokerBlazor']);
const pageSize = 6;

function ProjectPreview({ project }) {
  if (!standoutTitles.has(project.title)) {
    return (
      <figure>
        <img className="aspect-video w-full object-cover" src={project.image} alt="" />
      </figure>
    );
  }

  const address = project.liveDemoLink || project.githubRepoLink;

  return (
    <div className="mockup-browser border border-base-300 bg-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input truncate">{address}</div>
      </div>
      <img className="aspect-video w-full bg-base-200 object-cover" src={project.image} alt="" />
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  const drag = useRef({ x: 0, moved: false });

  function onPointerDown(event) {
    drag.current = { x: event.clientX, moved: false };
  }

  function onPointerMove(event) {
    if (Math.abs(event.clientX - drag.current.x) > 10) drag.current.moved = true;
  }

  function onClick() {
    if (drag.current.moved) return;
    onOpen(project);
  }

  function onKeyDown(event) {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(project);
    }
  }

  return (
    <motion.div
      className="card card-border h-full min-w-0 cursor-pointer overflow-hidden bg-base-200 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      role="button"
      tabIndex={0}
      aria-label={`Details for ${project.title}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <ProjectPreview project={project} />
      <div className="card-body">
        <span className="badge badge-primary badge-outline w-fit">{project.category}</span>
        <h3 className="card-title">{project.title}</h3>
        <p className="line-clamp-4 text-base-content/80">{project.shortDescription}</p>
        <div className="card-actions mt-auto flex-wrap items-center justify-end">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Recent');
  const [page, setPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);
  const drag = useRef({ x: 0 });

  const filteredProjects = selectedCategory === 'All'
    ? ProjectDetails
    : ProjectDetails.filter((project) => project.category === selectedCategory);
  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const safePage = Math.min(page, pageCount - 1);
  const pageProjects = filteredProjects.slice(safePage * pageSize, safePage * pageSize + pageSize);

  useEffect(() => {
    setPage(0);
  }, [selectedCategory]);

  function showPage(next) {
    setPage(Math.min(pageCount - 1, Math.max(0, next)));
  }

  function onCarouselPointerDown(event) {
    drag.current.x = event.clientX;
  }

  function onCarouselPointerUp(event) {
    const delta = event.clientX - drag.current.x;
    if (delta > 48) showPage(safePage - 1);
    if (delta < -48) showPage(safePage + 1);
  }

  return (
    <section id="projects" className="scroll-mt-24 bg-base-100 px-4 py-16 md:py-24" aria-labelledby="projects-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="projects-heading" className="mb-6 text-4xl font-bold md:text-5xl">Projects</h2>
        <div role="tablist" className="tabs tabs-box mb-8 w-full flex-nowrap overflow-x-auto" aria-label="Project categories">
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
        <div className="grid min-w-0 items-stretch gap-6 sm:grid-cols-2 md:hidden">
          {filteredProjects.map((project) => (
            <ProjectCard key={`${project.category}-${project.title}`} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="btn btn-circle btn-outline"
              aria-label="Previous projects"
              onClick={() => showPage(safePage - 1)}
              disabled={safePage === 0}
            >
              ‹
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${safePage}`}
                className="grid min-w-0 flex-1 touch-pan-y grid-cols-3 items-stretch gap-6"
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.28 }}
                onPointerDown={onCarouselPointerDown}
                onPointerUp={onCarouselPointerUp}
              >
                {pageProjects.map((project, index) => (
                  <motion.div
                    key={`${project.category}-${project.title}-page`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.25 }}
                  >
                    <ProjectCard project={project} onOpen={setSelectedProject} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            <button
              type="button"
              className="btn btn-circle btn-outline"
              aria-label="Next projects"
              onClick={() => showPage(safePage + 1)}
              disabled={safePage >= pageCount - 1}
            >
              ›
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Project pages">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className="btn btn-ghost btn-xs px-1"
                aria-label={`Project page ${index + 1}`}
                aria-current={index === safePage ? 'true' : undefined}
                onClick={() => showPage(index)}
              >
                <span className={`status ${index === safePage ? 'status-primary animate-bounce' : ''}`} />
              </button>
            ))}
          </div>
        </div>
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      </div>
    </section>
  );
}
