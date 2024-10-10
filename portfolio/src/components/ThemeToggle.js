// Dependencies
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// Contexts
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="btn btn-primary" onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
            {theme === 'dark' ? ' Light Mode' : ' Dark Mode'}
        </button>
    );
};

export default ThemeToggle;