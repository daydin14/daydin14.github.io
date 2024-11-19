// Dependencies
import React from 'react';

// Hooks
import useIsMobile from '../hooks/useIsMobile';

// Components
import Features from '../components/about/Features';
import Technologies from '../components/about/Technologies';
import ProjectStructure from '../components/about/ProjectStructure';

const About = () => {
    const { isMobile } = useIsMobile();
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white p-6">
            <h1 className="text-2xl font-bold mb-4">About this web application: </h1>
            <section id="features" className={`${isMobile ? 'mb-4' : 'mb-16 p-8'} card shadow-lg w-full max-w-3xl scroll-mt-20`}>
                <Features />
            </section>
            <section id="technologies" className={`${isMobile ? 'mb-4' : 'mb-16 p-8'} card shadow-lg w-full max-w-3xl scroll-mt-20`}>
                <Technologies />
            </section>
            <section id="project-structure" className={`${isMobile ? 'mb-4' : 'mb-16 p-8'} card shadow-lg w-full max-w-3xl scroll-mt-20`}>
                <ProjectStructure />
            </section>
        </div>
    );
}

export default About