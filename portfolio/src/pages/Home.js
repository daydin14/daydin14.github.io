// Dependencies
import React from 'react';

// Components
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white">
                <section id="home" className="mb-16 p-8">
                    <Hero />
                </section>
                <section id="about" className="mb-16 p-8">
                    <About />
                </section>
                <section id="projects" className="mb-16 p-8">
                    <h2 className="text-4xl font-semibold mb-4">Projects</h2>
                    <Projects />
                </section>
                <section id="skills" className="mb-16 p-8">
                    <h2 className="text-4xl font-semibold mb-4">Skills</h2>
                    <Skills />
                </section>
                <section id="contact" className="mb-16 p-8">
                    <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default Home