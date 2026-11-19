import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FaTimes } from 'react-icons/fa';
import ProjectLinks from './ProjectLinks';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog?.querySelector('[data-close]')?.focus();
    document.body.style.overflow = 'hidden';

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialog) return;
      const nodes = dialog.querySelectorAll('a[href], button:not([disabled]), textarea, input, select');
      const items = Array.from(nodes);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [onClose, project]);

  return (
    <dialog className="modal modal-open" ref={dialogRef} aria-labelledby="project-dialog-title">
      <motion.div
          className="modal-box w-11/12 max-w-3xl"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
        <button type="button" className="btn btn-circle btn-ghost absolute right-3 top-3 size-14 text-2xl" data-close onClick={onClose} aria-label="Close">
          <FaTimes aria-hidden="true" className="size-7" />
        </button>
        <h2 id="project-dialog-title" className="pr-16 text-3xl font-bold">{project.title}</h2>
        <div className="mt-3 flex flex-wrap gap-1">
          {project.liveDemoLink?.trim() ? <span className="badge badge-success badge-sm">Live demo</span> : null}
          {(project.badges || []).map((label) => (
            <span key={label} className="badge badge-warning badge-sm">{label}</span>
          ))}
        </div>
        {project.image ? (
          project.imageMobile ? (
            <picture>
              <source media="(max-width: 767px)" srcSet={project.imageMobile} />
              <img className="my-4 aspect-video w-full rounded-box object-cover" src={project.image} alt={project.title} />
            </picture>
          ) : (
            <img className="my-4 aspect-video w-full rounded-box object-cover" src={project.image} alt={project.title} />
          )
        ) : (
          <div className="skeleton my-4 aspect-video w-full" aria-hidden="true" />
        )}
        <p className="text-base-content/80">{project.longDescription}</p>
        <div className="modal-action flex-wrap">
          <ProjectLinks project={project} />
        </div>
      </motion.div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </dialog>
  );
}
