import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import ProjectDetails from '../../data/projects';
import {
  PROJECT_CATEGORIES,
  filterProjects,
  getTechOptions,
  parseCategory,
  parseSort,
  parseTechParam,
  sortProjects,
} from '../../lib/projectFilters';
import ProjectFilters from './ProjectFilters';
import ProjectLinks from './ProjectLinks';
import ProjectModal from './ProjectModal';

const standoutTitles = new Set(['File Converter', 'Drink Generator', 'Chalkboard Games', 'JokerBlazor']);
const pageSize = 6;

function ProjectBadges({ project, className = '' }) {
  const liveDemo = Boolean(project.liveDemoLink && project.liveDemoLink.trim());
  const labels = Array.isArray(project.badges) ? project.badges.filter(Boolean) : [];
  if (!liveDemo && labels.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {liveDemo && <span className="badge badge-success badge-sm">Live demo</span>}
      {labels.map((label) => (
        <span key={label} className="badge badge-warning badge-sm">{label}</span>
      ))}
    </div>
  );
}

function ProjectImage({ project, alt = '' }) {
  if (!project.image) {
    return <div className="skeleton aspect-video w-full" aria-hidden="true" />;
  }
  if (!project.imageMobile) {
    return <img className="aspect-video w-full object-cover" src={project.image} alt={alt} />;
  }
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={project.imageMobile} />
      <img className="aspect-video w-full object-cover" src={project.image} alt={alt} />
    </picture>
  );
}

function ProjectPreview({ project }) {
  if (!standoutTitles.has(project.title)) {
    return (
      <figure>
        <ProjectImage project={project} />
      </figure>
    );
  }

  const address = project.liveDemoLink || project.githubRepoLink;

  return (
    <div className="mockup-browser border border-base-300 bg-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input truncate">{address}</div>
      </div>
      <ProjectImage project={project} />
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
        <ProjectBadges project={project} />
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
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const techParam = searchParams.get('tech') || '';
  const sortParam = searchParams.get('sort');
  const category = parseCategory(categoryParam);
  const sort = parseSort(sortParam);
  const techSlugs = useMemo(() => parseTechParam(techParam), [techParam]);
  const [page, setPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);
  const drag = useRef({ x: 0 });
  const featuredOrder = useMemo(
    () => new Map(ProjectDetails.map((project, index) => [project.title, index])),
    [],
  );

  const categoryProjects = useMemo(
    () => filterProjects(ProjectDetails, { category, techSlugs: [] }),
    [category],
  );
  const techOptions = useMemo(
    () => getTechOptions(categoryProjects, techSlugs),
    [categoryProjects, techSlugs],
  );
  const filteredProjects = useMemo(() => {
    const matched = filterProjects(ProjectDetails, { category, techSlugs });
    return sortProjects(matched, sort, featuredOrder);
  }, [category, techSlugs, sort, featuredOrder]);

  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const safePage = Math.min(page, pageCount - 1);
  const pageProjects = filteredProjects.slice(safePage * pageSize, safePage * pageSize + pageSize);

  useEffect(() => {
    setPage(0);
  }, [category, techParam, sort]);

  function updateQuery(updates) {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      if (Object.prototype.hasOwnProperty.call(updates, 'category')) {
        if (!updates.category || updates.category === 'Recent') next.delete('category');
        else next.set('category', updates.category);
      }
      if (Object.prototype.hasOwnProperty.call(updates, 'tech')) {
        if (!updates.tech || updates.tech.length === 0) next.delete('tech');
        else next.set('tech', updates.tech.join(','));
      }
      if (Object.prototype.hasOwnProperty.call(updates, 'sort')) {
        if (!updates.sort || updates.sort === 'featured') next.delete('sort');
        else next.set('sort', updates.sort);
      }
      return next;
    }, { preventScrollReset: true });
  }

  function onCategoryChange(nextCategory) {
    if (nextCategory !== category) updateQuery({ category: nextCategory });
  }

  function onTechToggle(slug) {
    const next = techSlugs.includes(slug)
      ? techSlugs.filter((item) => item !== slug)
      : [...techSlugs, slug];
    updateQuery({ tech: next });
  }

  function onTechClear() {
    if (techSlugs.length > 0) updateQuery({ tech: [] });
  }

  function onSortChange(nextSort) {
    if (nextSort !== sort) updateQuery({ sort: nextSort });
  }

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

  const empty = (
    <p role="status" className="py-8 text-center text-base-content/70">
      No projects match these filters.
      <button type="button" className="btn btn-link btn-sm" onClick={onTechClear}>
        Clear technologies
      </button>
    </p>
  );

  return (
    <section id="projects" className="bg-base-100 px-4 py-16 md:py-24" aria-labelledby="projects-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="projects-heading" className="mb-6 text-4xl font-bold md:text-5xl">Projects</h2>
        <ProjectFilters
          categories={PROJECT_CATEGORIES}
          category={category}
          techOptions={techOptions}
          techSlugs={techSlugs}
          sort={sort}
          onCategoryChange={onCategoryChange}
          onTechToggle={onTechToggle}
          onTechClear={onTechClear}
          onSortChange={onSortChange}
        />
        {category === 'Udemy' && (
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
        {filteredProjects.length === 0 ? empty : (
          <>
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
                    key={`${category}-${techParam}-${sort}-${safePage}`}
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
          </>
        )}
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      </div>
    </section>
  );
}
