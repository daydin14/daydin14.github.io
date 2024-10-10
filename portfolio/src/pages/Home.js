// Dependencies
import React from 'react';

// Components
import About from '../components/sections/About';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white">
            <section id="home" className="mb-16 p-8">
                <h1 className="text-4xl font-bold mb-4">Home</h1>
            </section>
            <section id="about" className="mb-16 p-8">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <About />
            </section>
            <section id="projects" className="mb-16 p-8">
                <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                <p>Here are some of my projects...</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">Project 1</h3>
                        <p className="mt-2">Description of project 1...</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">Project 2</h3>
                        <p className="mt-2">Description of project 2...</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">Project 3</h3>
                        <p className="mt-2">Description of project 3...</p>
                    </div>
                </div>
            </section>
            <section id="skills" className="mb-16 p-8">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <p>Here are some of my skills...</p>
                <ul className="list-disc pl-5">
                    <li className="mt-2">JavaScript</li>
                    <li className="mt-2">React</li>
                    <li className="mt-2">Node.js</li>
                    <li className="mt-2">CSS</li>
                    <li className="mt-2">HTML</li>
                </ul>
            </section>
            <section id="contact" className="mb-16 p-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                <p>Feel free to reach out to me...</p>
                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-2 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 border rounded"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="p-2 border rounded"
                        rows="4"
                    ></textarea>
                    <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Home