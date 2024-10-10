// Dependencies
import React, { useState } from 'react';

// Constants
import ProjectDetails from '../../constants/ProjectDetails';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All'
        ? ProjectDetails
        : ProjectDetails.filter(project => project.category === selectedCategory);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-8">
                <ul className="flex justify-evenly space-x-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg w-full max-w-4xl mx-auto">
                    {['Recent', 'All', 'Udemy', 'GA', 'SJU'].map((category) => (
                        <li
                            key={category}
                            className={`cursor-pointer p-2 rounded ${selectedCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'text-black dark:text-white'
                                }`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4 w-full max-w-6xl mx-auto">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                        <figure><img src={project.image} alt={project.title} /></figure>
                        <div className="card-body">
                            <h3 className="card-title">{project.title}</h3>
                            <p>{project.shortDescription}</p>
                            {project.githubRepoLink && <a href={project.githubRepoLink} target='_blank' rel='noopener noreferrer'>GitHub Repo</a>}
                            {project.liveDemoLink && <a href={project.liveDemoLink} target='_blank' rel='noopener noreferrer'>Live Demo</a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;