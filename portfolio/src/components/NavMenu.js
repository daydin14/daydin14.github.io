// Dependencies
import React from 'react'
import { Link } from 'react-router-dom';

// Components

const NavMenu = () => {
    return (
        <>
            <nav className="bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg">
                <ul className="menu menu-horizontal p-2">
                    <li><Link to="/" className="btn btn-ghost text-black dark:text-white">Home</Link></li>
                    <li><Link to="/about" className="btn btn-ghost text-black dark:text-white">About</Link></li>
                    {process.env.NODE_ENV === 'development' && (
                        <li><Link to="/sandbox" className="btn btn-ghost text-black dark:text-white">Sandbox</Link></li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default NavMenu
