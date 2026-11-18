import { FaCode, FaGithub, FaPlay, FaServer } from 'react-icons/fa';

function IconLink({ href, label, children }) {
  if (!href) return null;

  return (
    <a
      className="icon-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      onClick={(event) => event.stopPropagation()}
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}

export default function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      <IconLink href={project.githubRepoLinks?.frontend} label="Frontend">
        <FaCode aria-hidden="true" />
      </IconLink>
      <IconLink href={project.githubRepoLinks?.backend} label="Backend">
        <FaServer aria-hidden="true" />
      </IconLink>
      <IconLink href={project.githubRepoLink} label="GitHub Repo">
        <FaGithub aria-hidden="true" />
      </IconLink>
      <IconLink href={project.liveDemoLink} label="Live Demo">
        <FaPlay aria-hidden="true" />
      </IconLink>
    </div>
  );
}
