// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Styles
import './assets/styles/App.css';

// Pages
import Home from './pages/Home';

function App() {
  const companyName = 'daydin14';
  const year = new Date().getFullYear();
  const rights = 'All rights reserved.';
  const author = 'David Aydin';

  return (
    <Router>
      <div >
        {/* Header */}
        <header>
          <h1>David Aydin</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
        </header>
        {/* Main */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>
        {/* Footer */}
        <footer>
          <p>{companyName} &copy; {year} {rights}</p>
          <p>Created by {author}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
