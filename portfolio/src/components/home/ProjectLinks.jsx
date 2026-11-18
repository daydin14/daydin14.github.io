import { FaCode, FaGithub, FaPlay, FaServer } from 'react-icons/fa';

function IconLink({ href, label, children }) {
  if (!href) return null;

  return (
    <div className="tooltip" data-tip={label}>
      <a
        className="btn btn-ghost btn-sm btn-circle"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <span className="sr-only">{label}</span>
      </a>
    </div>
  );
}

export default function ProjectLinks({ project }) {
  return (
    <div className="flex justify-end gap-1">
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
