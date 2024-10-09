// Dependencies
import React from 'react'
import { Link } from 'react-router-dom';

// Components
import ThemeToggle from './ThemeToggle';

const LeftSidePanel = ({ isOpen, toggleSidebar }) => {

    return (
        <div
            className={
                `fixed top-0 left-0 h-full 
                    bg-gray-200 dark:bg-gray-900
                    p-4 transition-transform transform
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
            }>
            {/* <h1 className="text-2xl font-bold mb-2 text-black dark:text-white">David Aydin</h1>
                <div className="flex justify-end items-center mb-4">
                    <button onClick={toggleSidebar} className="text-black dark:text-white mt-4 text-3xl">
                        &times;
                    </button>
                </div> */}
            <div className="flex flex-row justify-between items-baseline mb-4">
                <h1 className="text-2xl font-bold mb-2 mr-4 text-black dark:text-white">David Aydin</h1>
                <button onClick={toggleSidebar} className="text-black dark:text-white mt-4 text-3xl">
                    &times;
                </button>
            </div>
            <nav className="bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg">
                <ul className="menu mb-4">
                    <li onClick={toggleSidebar}><Link to="/" className="btn btn-ghost text-black dark:text-white">Home</Link></li>
                    <li onClick={toggleSidebar}><Link to="/about" className="btn btn-ghost text-black dark:text-white">About</Link></li>
                    {/* Development */}
                    {process.env.NODE_ENV === 'development' && (
                        <li onClick={toggleSidebar}><Link to="/sandbox" className="btn btn-ghost text-black dark:text-white">Sandbox</Link></li>
                    )}
                </ul>
            </nav>
            <ThemeToggle />
        </div>
    )
}

export default LeftSidePanel
