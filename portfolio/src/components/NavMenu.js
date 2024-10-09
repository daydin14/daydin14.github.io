// Dependencies
import React from 'react'
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {process.env.NODE_ENV === 'development' && (
                        <li><Link to="/sandbox">Sandbox</Link></li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default NavMenu
