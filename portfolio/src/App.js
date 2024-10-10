// Dependencies
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import './assets/styles/App.css';

// Routes
import AppRoutes from './AppRoutes';

// Contexts
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Utils
import FontAwesomeScript from './utils/FontAwesomeScript';

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
      <Header />
      <main className="flex-grow p-4 mt-44">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <FontAwesomeScript />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App