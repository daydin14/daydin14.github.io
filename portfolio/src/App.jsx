import { useEffect, useRef } from 'react';
import { MotionConfig } from 'motion/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import SiteHeader from './components/layout/SiteHeader';
import SiteFooter from './components/layout/SiteFooter';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './context/ThemeContext';
import { initAnalytics, trackPageView } from './lib/analytics';

function AppShell() {
  const location = useLocation();
  const previousLocation = useRef({ pathname: '', hash: '' });

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`);
    const pathChanged = previousLocation.current.pathname !== location.pathname;
    const hashChanged = previousLocation.current.hash !== location.hash;
    previousLocation.current = { pathname: location.pathname, hash: location.hash };

    if ((pathChanged || hashChanged) && location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    if (pathChanged) window.scrollTo(0, 0);
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      <a className="btn btn-primary btn-sm skip-link" href="#content">Skip to content</a>
      <SiteHeader />
      <main id="content" className="main-flow">
        <AppRoutes />
      </main>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <BrowserRouter basename="/">
          <AppShell />
        </BrowserRouter>
      </ThemeProvider>
    </MotionConfig>
  );
}
