// Dependencies
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// Styles
import './assets/styles/App.css';

// Routes
import AppRoutes from './AppRoutes';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <Router>
      <div >
        {/* Header */}
        <Header />
        {/* Main */}
        <main>
          <AppRoutes />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
