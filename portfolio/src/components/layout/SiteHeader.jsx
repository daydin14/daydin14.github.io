import { useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemePicker from './ThemePicker';

const homeLinks = [
  { to: '/#home', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#contact', label: 'Contact' },
];

const siteLinks = [
  { to: '/about#features', label: 'Features' },
  { to: '/about#technologies', label: 'Technologies' },
  { to: '/about#project-structure', label: 'Project Structure' },
];

export default function SiteHeader() {
  const location = useLocation();
  const drawerId = useId();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const onAboutPage = location.pathname === '/about';
  const sectionLinks = onAboutPage ? siteLinks : homeLinks;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const next = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, next)));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const linkItems = (links) => links.map((link) => (
    <li key={link.to}>
      <Link to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
    </li>
  ));

  return (
    <div className="drawer">
      <input
        id={drawerId}
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        onChange={(event) => setOpen(event.target.checked)}
      />
      <div className="drawer-content">
        <header className="navbar sticky top-0 z-40 border-b border-base-300 bg-base-100/90 shadow-sm backdrop-blur">
          <div className="navbar-start gap-1">
            <button
              type="button"
              className="btn btn-ghost btn-circle lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((current) => !current)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <Link to="/" className="btn btn-ghost px-2 text-xl font-display normal-case">David Aydin</Link>
          </div>
          <nav className="navbar-center hidden lg:flex" aria-label="Primary">
            <ul className="menu menu-horizontal px-1">
              {sectionLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link to={onAboutPage ? '/' : '/about'} aria-current={onAboutPage ? 'page' : undefined}>
                  {onAboutPage ? 'Portfolio' : 'About this site'}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="navbar-end">
            <ThemePicker />
          </div>
          <progress
            className="progress progress-primary absolute bottom-0 left-0 h-1 w-full rounded-none"
            value={progress}
            max="100"
            aria-hidden="true"
          />
        </header>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor={drawerId} aria-label="Close menu" className="drawer-overlay" />
        <nav id={menuId} className="menu min-h-full w-72 bg-base-200 p-4 text-base-content" aria-label="Mobile">
          <p className="px-4 py-3 font-display text-xl">David Aydin</p>
          <ul>
            {linkItems(homeLinks)}
            {linkItems(siteLinks)}
          </ul>
        </nav>
      </div>
    </div>
  );
}
