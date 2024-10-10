// Dependencies
import React from 'react'

// Components

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white">
            <h1 className="text-4xl font-bold mb-4">Home</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                <p>Here are some of my projects...</p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <p>Here are some of my skills...</p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
                <p>Feel free to reach out to me...</p>
            </section>
        </div>
    )
}

export default Home