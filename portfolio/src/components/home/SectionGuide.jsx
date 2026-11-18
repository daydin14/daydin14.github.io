import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'github-city', label: 'GitHub City' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const ACTIVATION_LINE = 140;

function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const update = () => {
      let current = sections[0].id;
      sections.forEach((section) => {
        const node = document.getElementById(section.id);
        if (node && node.getBoundingClientRect().top <= ACTIVATION_LINE) {
          current = section.id;
        }
      });
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return [active, setActive];
}

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  const top = node.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function GuideButton({ section, active, onSelect }) {
  const isActive = active === section.id;
  return (
    <button
      type="button"
      className={`btn btn-xs ${isActive ? 'btn-primary' : 'btn-ghost'}`}
      aria-current={isActive ? 'true' : undefined}
      onClick={() => onSelect(section.id)}
    >
      {section.label}
    </button>
  );
}

export function SideGuide() {
  const [active, setActive] = useActiveSection();

  function onSelect(id) {
    setActive(id);
    scrollToSection(id);
  }

  return (
    <nav className="sticky top-0 hidden h-screen self-start xl:block" aria-label="On this page">
      <ul className="page-guide timeline timeline-compact timeline-vertical h-full py-16">
        {sections.map((section, index) => (
          <li key={section.id}>
            {index > 0 && <hr />}
            <div className="timeline-middle">
              <motion.span
                className={`block h-3 w-3 rounded-full ${active === section.id ? 'bg-primary' : 'bg-base-300'}`}
                animate={{ scale: active === section.id ? 1.45 : 1 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
              />
            </div>
            <div className="timeline-end">
              <GuideButton section={section} active={active} onSelect={onSelect} />
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function DockGuide() {
  const [active, setActive] = useActiveSection();

  function onSelect(id) {
    setActive(id);
    scrollToSection(id);
  }

  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 xl:hidden" aria-label="On this page">
      <ul className="flex gap-1 overflow-x-auto rounded-box bg-base-200 p-2 shadow-lg">
        {sections.map((section) => (
          <li key={section.id}>
            <GuideButton section={section} active={active} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
