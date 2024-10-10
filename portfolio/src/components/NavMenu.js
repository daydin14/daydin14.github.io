// Dependencies
import React from 'react';

// Components

const NavMenu = () => {
    return (
        <nav className="bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg">
            <ul className="menu menu-horizontal p-2">
                <li><a href="#home" className="btn btn-ghost text-black dark:text-white">Home</a></li>
                <li><a href="#about" className="btn btn-ghost text-black dark:text-white">About</a></li>
                <li><a href="#projects" className="btn btn-ghost text-black dark:text-white">Projects</a></li>
                <li><a href="#skills" className="btn btn-ghost text-black dark:text-white">Skills</a></li>
                <li><a href="#contact" className="btn btn-ghost text-black dark:text-white">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavMenu;