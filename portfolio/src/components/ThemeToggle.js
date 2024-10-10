// Dependencies
import React, { useContext } from 'react';

// Contexts
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="btn btn-primary" onClick={toggleTheme}>
            Toggle to {theme === 'dark' ? 'light' : 'dark'} mode
        </button>
    );
};

export default ThemeToggle