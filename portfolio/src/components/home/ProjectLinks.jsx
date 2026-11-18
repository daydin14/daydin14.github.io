import { FaCode, FaGithub, FaPlay, FaServer } from 'react-icons/fa';

function TextLink({ href, label, children, variant }) {
  if (!href) return null;

  return (
    <a
      className={`btn btn-sm ${variant}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
    >
      {children}
      {label}
    </a>
  );
}

export default function ProjectLinks({ project }) {
  return (
    <>
      <TextLink href={project.githubRepoLinks?.frontend} label="Frontend" variant="btn-outline">
        <FaCode aria-hidden="true" />
      </TextLink>
      <TextLink href={project.githubRepoLinks?.backend} label="Backend" variant="btn-outline">
        <FaServer aria-hidden="true" />
      </TextLink>
      <TextLink href={project.githubRepoLink} label="GitHub" variant="btn-outline">
        <FaGithub aria-hidden="true" />
      </TextLink>
      <TextLink href={project.liveDemoLink} label="Live Demo" variant="btn-primary">
        <FaPlay aria-hidden="true" />
      </TextLink>
    </>
  );
}
