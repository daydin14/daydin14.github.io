// Dependencies
import React, { useState } from 'react'

// Components
import NavMenu from './NavMenu'
import LeftSidePanel from './LeftSidePanel';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className="bg-gray-200 dark:bg-gray-900 p-4">
                <div className='flex justify-start items-center'>
                    <button onClick={toggleSidebar} className="hamburger-menu text-black dark:text-white mr-4">
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                    </button>
                    <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">David Aydin</h1>
                </div>
                <NavMenu />
            </header>
            {/* Left Side Panel */}
            <LeftSidePanel isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </>
    )
}

export default Header
