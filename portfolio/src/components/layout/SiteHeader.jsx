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

  return (
    <header className="site-header">
      <div className="shell header-bar">
        <Link to="/" className="brand">David Aydin</Link>
        <nav className="desktop-nav" aria-label="Primary">
          {sectionLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link to={onAboutPage ? '/' : '/about'} className="nav-link" aria-current={onAboutPage ? 'page' : undefined}>
            {onAboutPage ? 'Portfolio' : 'About this site'}
          </Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="menu-bars" aria-hidden="true" />
          </button>
        </div>
        <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      </div>
      {open && (
        <div className="drawer-root">
          <button type="button" className="drawer-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
          <nav id={menuId} className="drawer" aria-label="Mobile">
            <div className="drawer-header">
              <span className="brand">David Aydin</span>
              <button type="button" className="icon-button" onClick={() => setOpen(false)} aria-label="Close menu">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {homeLinks.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
            {siteLinks.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
