// Dependencies
import React from 'react'

// Components
import ThemeToggle from '../components/ThemeToggle'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white">
            <h1 className="text-4xl font-bold mb-4">Home</h1>
            <ThemeToggle />
        </div>
    )
}

export default Home