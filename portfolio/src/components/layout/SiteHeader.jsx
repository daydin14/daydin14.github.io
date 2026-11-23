import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaCity,
  FaEnvelope,
  FaFolderOpen,
  FaHome,
  FaLaptopCode,
  FaListUl,
  FaSitemap,
  FaStar,
  FaUser,
} from 'react-icons/fa';
import ThemePicker from './ThemePicker';

const homeSections = [
  { id: 'home', label: 'Home', short: 'Home', icon: FaHome },
  { id: 'about', label: 'About', short: 'About', icon: FaUser },
  { id: 'projects', label: 'Projects', short: 'Projects', icon: FaFolderOpen },
  { id: 'github-city', label: 'GitHub City', short: 'City', icon: FaCity },
  { id: 'skills', label: 'Skills', short: 'Skills', icon: FaStar },
  { id: 'contact', label: 'Contact', short: 'Contact', icon: FaEnvelope },
];

const aboutSections = [
  { id: 'features', label: 'Features', short: 'Features', icon: FaListUl },
  { id: 'technologies', label: 'Technologies', short: 'Tech', icon: FaLaptopCode },
  { id: 'project-structure', label: 'Project Structure', short: 'Structure', icon: FaSitemap },
];

function headerOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--site-header-offset');
  const value = parseFloat(raw);
  return Number.isFinite(value) ? value : 84;
}

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  const top = node.getBoundingClientRect().top + window.scrollY - headerOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function onBrandClick(event, pathname) {
  if (pathname !== '/') return;
  event.preventDefault();
  scrollToSection('home');
}

export default function SiteHeader() {
  const location = useLocation();
  const stepsRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(homeSections[0].id);
  const onAboutPage = location.pathname === '/about';
  const sections = onAboutPage ? aboutSections : homeSections;
  const activeIndex = Math.max(0, sections.findIndex((section) => section.id === activeId));

  useEffect(() => {
    const header = document.querySelector('[data-site-header]');
    if (!header) return undefined;
    const apply = () => {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty('--site-header-height', `${height}px`);
      document.documentElement.style.setProperty('--site-header-offset', `${height + 12}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const next = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, next)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [location.pathname]);

  useEffect(() => {
    const updateActive = () => {
      const line = headerOffset() + 16;
      let current = sections[0].id;
      sections.forEach((section) => {
        const node = document.getElementById(section.id);
        if (node && node.getBoundingClientRect().top <= line) current = section.id;
      });
      setActiveId(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [location.pathname, sections]);

  useEffect(() => {
    const scroller = stepsRef.current;
    const current = scroller?.querySelector('[aria-current="step"]');
    if (!scroller || !current) return;
    const left = current.offsetLeft - (scroller.clientWidth - current.clientWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [activeId, location.pathname]);

  return (
    <div>
      <header data-site-header className="fixed inset-x-0 top-0 z-40 border-b border-base-300 bg-base-100/90 shadow-sm backdrop-blur">
        <div className="navbar min-h-14 w-full px-2">
          <div className="navbar-start">
            <Link
              to="/"
              className="btn btn-ghost px-2 text-lg font-display normal-case sm:text-xl"
              onClick={(event) => onBrandClick(event, location.pathname)}
            >
              David Aydin
            </Link>
          </div>
          <div className="navbar-end gap-1">
            <Link to={onAboutPage ? '/' : '/about'} className="btn btn-ghost btn-sm" aria-current={onAboutPage ? 'page' : undefined}>
              {onAboutPage ? 'Portfolio' : 'About this site'}
            </Link>
            <ThemePicker />
          </div>
        </div>
        <nav ref={stepsRef} className="hidden w-full overflow-x-auto px-3 pb-2 md:block" aria-label="Sections">
          <ul className="steps mx-auto w-max min-w-full">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <li
                  key={section.id}
                  className={`step relative whitespace-nowrap ${index <= activeIndex ? 'step-primary' : ''}`}
                  aria-current={section.id === activeId ? 'step' : undefined}
                >
                  <span className="step-icon">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <span className="px-1 text-sm font-medium">{section.label}</span>
                  <button
                    type="button"
                    className="absolute inset-0 z-10 cursor-pointer"
                    aria-label={section.label}
                    onClick={() => scrollToSection(section.id)}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
        <progress
          className="progress progress-primary absolute inset-x-0 bottom-0 h-1 rounded-none"
          value={progress}
          max="100"
          aria-hidden="true"
        />
      </header>
      <div aria-hidden="true" className="h-(--site-header-height)" />
      <nav className="section-dock dock md:hidden" aria-label="Sections">
        {sections.map((section) => {
          const Icon = section.icon;
          const active = section.id === activeId;
          return (
            <button
              key={section.id}
              type="button"
              className={active ? 'dock-active' : undefined}
              aria-current={active ? 'page' : undefined}
              onClick={() => scrollToSection(section.id)}
            >
              <Icon aria-hidden="true" className="size-5" />
              <span className="dock-label">{section.short}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
