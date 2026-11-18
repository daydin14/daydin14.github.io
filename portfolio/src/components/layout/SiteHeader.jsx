import { useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const homeLinks = [
  { to: '/#home', label: 'Home' },
  { to: '/#about', label: 'About' },
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

  const menu = (
    <>
      {homeLinks.map((link) => (
        <li key={link.to}>
          <Link to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
        </li>
      ))}
      {siteLinks.map((link) => (
        <li key={link.to}>
          <Link to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
        </li>
      ))}
    </>
  );

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
        <header className="site-header">
          <div className="navbar shell min-h-16 px-0">
            <div className="navbar-start gap-1">
              <button
                type="button"
                className="btn btn-ghost btn-circle drawer-button lg:hidden"
                aria-expanded={open}
                aria-controls={menuId}
                onClick={() => setOpen((current) => !current)}
              >
                <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                <span className="menu-bars" aria-hidden="true" />
              </button>
              <Link to="/" className="brand">David Aydin</Link>
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
              <ThemeToggle />
            </div>
          </div>
          <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
        </header>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor={drawerId} aria-label="Close menu" className="drawer-overlay" />
        <nav id={menuId} className="menu min-h-full w-72 bg-base-100 p-4 text-base-content" aria-label="Mobile">
          <p className="brand px-4 py-3">David Aydin</p>
          <ul>{menu}</ul>
        </nav>
      </div>
    </div>
  );
}
