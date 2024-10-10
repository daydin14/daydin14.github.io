// Dependencies
import React from 'react';

// Images
import GitHubMark from '../../assets/images/github-mark/github-mark.png';
import GitHubMarkWhite from '../../assets/images/github-mark/github-mark-white.png';

const ProjectLinks = ({ project }) => {
    return (
        <div className='flex flex-row justify-end items-center p-4 mr-2 mt-2'>
            {project.githubRepoLinks && (
                <>
                    {project.githubRepoLinks.frontend &&
                        <a href={project.githubRepoLinks.frontend} target='_blank' rel='noopener noreferrer' className="text-blue-500 mr-2 tooltip transition-transform transform hover:scale-125" data-tip="Frontend">
                            <i className="fas fa-code w-5 h-5"></i>
                        </a>
                    }
                    {project.githubRepoLinks.backend &&
                        <a href={project.githubRepoLinks.backend} target='_blank' rel='noopener noreferrer' className="text-blue-500 tooltip transition-transform transform hover:scale-125" data-tip="Backend">
                            <i className="fas fa-server w-5 h-5"></i>
                        </a>
                    }
                </>
            )}
            {project.githubRepoLink && (
                <a href={project.githubRepoLink} target='_blank' rel='noopener noreferrer' className='mr-2 tooltip transition-transform transform hover:scale-125' data-tip='GitHub Repo'>
                    <img src={GitHubMark} alt="GitHub" className="w-6 h-6 dark:hidden" />
                    <img src={GitHubMarkWhite} alt="GitHub" className="w-6 h-6 hidden dark:block" />
                </a>
            )}
            {project.liveDemoLink && (
                <a href={project.liveDemoLink} target='_blank' rel='noopener noreferrer' className="text-blue-500 flex items-center tooltip transition-transform transform hover:scale-125" data-tip='Live Demo'>
                    <i className="fas fa-play ml-2"></i>
                </a>
            )}
        </div>
    );
};

export default ProjectLinks