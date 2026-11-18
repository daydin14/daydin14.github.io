import { useEffect, useRef } from 'react';
import ProjectLinks from './ProjectLinks';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog?.querySelector('.modal-close')?.focus();
    document.body.style.overflow = 'hidden';

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialog) return;

      const nodes = dialog.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select',
      );
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
    <div className="modal-root">
      <button type="button" className="modal-backdrop" aria-label="Close project details" onClick={onClose} />
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        ref={dialogRef}
      >
        <button type="button" className="icon-button modal-close" onClick={onClose} aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <h2 id="project-dialog-title">{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <p>{project.longDescription}</p>
        <ProjectLinks project={project} />
      </div>
    </div>
  );
}
