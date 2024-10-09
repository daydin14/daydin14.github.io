// Dependencies
import React from 'react'

// Components
import NavMenu from './NavMenu'

const Header = () => {
    return (
        <>
            <header className="bg-gray-200 dark:bg-gray-900 p-4">
                <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">David Aydin</h1>
                <NavMenu />
            </header>
        </>
    )
}

export default Header
