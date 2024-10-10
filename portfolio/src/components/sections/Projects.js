// Dependencies
import React, { useState } from 'react';

// Constants
import ProjectDetails from '../../constants/ProjectDetails';

// Images
import GitHubMark from '../../assets/images/github-mark/github-mark.png';
import GitHubMarkWhite from '../../assets/images/github-mark/github-mark-white.png';

// Icons
import { faPlay } from '@fortawesome/free-solid-svg-icons';

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
                    <div key={index} className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-100 overflow-hidden">
                        <figure className="h-32 overflow-hidden">
                            <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                        </figure>
                        <div className="card-body p-4">
                            <h3 className="card-title text-lg font-semibold truncate">{project.title}</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 overflow-hidden overflow-ellipsis">{project.shortDescription}</p>
                            {project.githubRepoLink && (
                                <a href={project.githubRepoLink} target='_blank' rel='noopener noreferrer'>
                                    <img src={GitHubMark} alt="GitHub" className="w-8 h-8 dark:hidden" />
                                    <img src={GitHubMarkWhite} alt="GitHub" className="w-8 h-8 hidden dark:block" />
                                </a>
                            )}
                            {project.liveDemoLink && (
                                <a href={project.liveDemoLink} target='_blank' rel='noopener noreferrer' className="text-blue-500 hover:underline flex items-center">
                                    <i className="fas fa-play ml-2"></i>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;