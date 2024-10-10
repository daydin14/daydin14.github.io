// Dependencies
import React, { useState } from 'react';

// Images
import GitHubMark from '../../assets/images/github-mark/github-mark.png';
import GitHubMarkWhite from '../../assets/images/github-mark/github-mark-white.png';

// Constants
import ProjectDetails from '../../constants/ProjectDetails';

// Components
import Modal from '../projects/Modal';
import ProjectLinks from '../projects/ProjectLinks';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
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

            <div className="flex justify-center items-center mb-4">
                {selectedCategory === 'Udemy' && (
                    <>
                        <h2 className="text-2xl font-semibold text-center mr-4">Udemy Projects</h2>
                        <a href='https://github.com/daydin14/udemy' target='_blank' rel='noopener noreferrer'>
                            <img src={GitHubMark} alt="GitHub" className="w-8 h-8 dark:hidden" />
                            <img src={GitHubMarkWhite} alt="GitHub" className="w-8 h-8 hidden dark:block" />
                        </a>
                    </>
                )}
            </div>

            <div className="flex flex-wrap justify-center gap-4 gap-y-8 mb-4 w-full max-w-6xl mx-auto">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:border-1 hover:border-blue-500 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] cursor-pointer"
                        onClick={() => handleCardClick(project)}
                    >
                        <figure className="h-32 overflow-hidden relative">
                            <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                        </figure>
                        <div className="card-body p-4">
                            <h3 className="card-title text-lg font-semibold truncate">{project.title}</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 overflow-hidden overflow-ellipsis">{project.shortDescription}</p>
                            <ProjectLinks project={project} />
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    project={selectedProject}
                />
            )}
        </div>
    );
};

export default Projects