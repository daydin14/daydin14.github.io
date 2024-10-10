// Dependencies
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// Contexts
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                    <input
                        type='checkbox'
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        className='toggle toggle-primary h-8 w-16'
                    />
                    <div className='dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform transform-gpu' style={{ transform: theme === 'dark' ? 'translateX(32px)' : 'translateX(0)' }}>
                        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className='text-blue-700 dark:text-yellow-500' />
                    </div>
                </div>
            </label>
        </>
    );
};

export default ThemeToggle;