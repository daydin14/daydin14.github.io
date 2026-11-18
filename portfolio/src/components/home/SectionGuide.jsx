import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'github-city', label: 'GitHub City' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return active;
}

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function SideGuide() {
  const active = useActiveSection();

  return (
    <nav className="sticky top-28 hidden h-fit self-start px-2 xl:block" aria-label="On this page">
      <ul className="timeline timeline-compact timeline-vertical">
        {sections.map((section, index) => (
          <li key={section.id}>
            {index > 0 && <hr />}
            <div className="timeline-middle">
              <span className={`block h-3 w-3 rounded-full ${active === section.id ? 'bg-primary' : 'bg-base-300'}`} />
            </div>
            <div className="timeline-end pb-4">
              <button
                type="button"
                className={`btn btn-xs ${active === section.id ? 'btn-primary' : 'btn-ghost'}`}
                aria-current={active === section.id ? 'true' : undefined}
                onClick={() => go(section.id)}
              >
                {section.label}
              </button>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function DockGuide() {
  const active = useActiveSection();

  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 xl:hidden" aria-label="On this page">
      <ul className="flex gap-1 overflow-x-auto rounded-box bg-base-200 p-2 shadow-lg">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              className={`btn btn-xs whitespace-nowrap ${active === section.id ? 'btn-primary' : 'btn-ghost'}`}
              aria-current={active === section.id ? 'true' : undefined}
              onClick={() => go(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
