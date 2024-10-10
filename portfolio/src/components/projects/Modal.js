// Dependencies
import React from 'react';

// Components
import ProjectLinks from './ProjectLinks';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleBackgroundClick}>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-3xl font-bold">
                    &times;
                </button>
                <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
                <img src={project.image} alt={project.title} className="object-cover w-full h-full mb-6" />
                <p className="text-gray-700 dark:text-gray-300">{project.longDescription}</p>
                <ProjectLinks project={project} />
            </div>
        </div>
    );
};

export default Modal