// Dependencies
import React from 'react';

// Hooks
import { useLocation } from 'react-router-dom';

const NavMenu = () => {
    const location = useLocation();

    const renderMenuItems = () => {
        switch (location.pathname) {
            case '/':
                return (
                    <>
                        <li><a href="#home" className="btn btn-ghost text-black dark:text-white">Home</a></li>
                        <li><a href="#about" className="btn btn-ghost text-black dark:text-white">About</a></li>
                        <li><a href="#projects" className="btn btn-ghost text-black dark:text-white">Projects</a></li>
                        <li><a href="#skills" className="btn btn-ghost text-black dark:text-white">Skills</a></li>
                        <li><a href="#contact" className="btn btn-ghost text-black dark:text-white">Contact</a></li>
                    </>
                );
            case '/about':
                return (
                    <>
                        <li><a href="#features" className="btn btn-ghost text-black dark:text-white">Features</a></li>
                        <li><a href="#technologies" className="btn btn-ghost text-black dark:text-white">Technologies</a></li>
                        <li><a href="#project-structure" className="btn btn-ghost text-black dark:text-white">Project Structure</a></li>
                    </>
                );
            default:
                return (
                    <>
                    </>
                );
        }
    };

    return (
        <nav className="bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg">
            <ul className="menu menu-horizontal p-2">
                {renderMenuItems()}
            </ul>
        </nav>
    );
};

export default NavMenu