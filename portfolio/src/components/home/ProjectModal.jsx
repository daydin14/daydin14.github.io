import { useEffect, useRef } from 'react';
import ProjectLinks from './ProjectLinks';
import techBadges from './techBadges';

const todo = 'TODO: David has not written this yet.';

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
      <div className="modal-box w-11/12 max-w-3xl">
        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3" data-close onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 id="project-dialog-title" className="pr-10 text-3xl font-bold">{project.title}</h2>
        <img className="my-4 max-h-80 w-full rounded-box object-cover" src={project.image} alt={project.title} />
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="badge badge-primary badge-outline">{project.category}</span>
          {techBadges(project).map((tech) => (
            <span key={tech} className="badge badge-outline">{tech}</span>
          ))}
        </div>
        <p className="text-base-content/80">{project.longDescription}</p>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-lg font-bold">Problem</h3>
            <p className="text-warning">{todo}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Solution</h3>
            <p className="text-warning">{todo}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Challenges</h3>
            <p className="text-warning">{todo}</p>
          </div>
        </div>
        <div className="modal-action flex-wrap">
          <ProjectLinks project={project} />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </dialog>
  );
}
