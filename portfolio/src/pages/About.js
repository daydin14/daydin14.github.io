// Dependencies
import React from 'react';

// Images
import ProfilePicture_BC from '../assets/images/profile-pictures/profile-pic-business-casual.png';
import GitHubMark from '../assets/images/github-mark/github-mark.png';
import GitHubMarkWhite from '../assets/images/github-mark/github-mark-white.png';
import LinkedInIcon from '../assets/images/LinkedIn-Logos/LI-In-Bug.png';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="mb-4 p-4 rounded-lg shadow-lg max-w-screen-lg">
                <div className="flex flex-row items-center justify-center mb-8">
                    <img
                        src={ProfilePicture_BC}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mb-4 mr-4"
                    />
                    <div className="flex flex-col ml-4">
                        <h1 className="text-4xl font-bold mb-2">David Aydin</h1>
                        <h2 className="text-xl font-semibold mb-2">Software Engineer</h2>
                        <p className="text-center">Welcome to my portfolio! I am excited to share my journey and work with you.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://github.com/daydin14" target="_blank" rel="noopener noreferrer">
                                <img src={GitHubMark} alt="GitHub" className="w-8 h-8 dark:hidden" />
                                <img src={GitHubMarkWhite} alt="GitHub" className="w-8 h-8 hidden dark:block" />
                            </a>
                            <a href="https://www.linkedin.com/in/daydin14" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <p className="mb-4">
                    Fun fact: I&apos;m a triplet!
                </p>
                <p className="mb-4">
                    Hello!
                    <br />
                    I am a passionate developer with a strong background in full-stack development.
                    Proficient in a wide range of front-end and back-end technologies, with a passion for creating responsive web applications and data visualization.
                    Committed to delivering high-quality code and optimizing performance to enhance user experiences.
                    Seeking opportunities to contribute my expertise and passion for problem-solving to a dynamic software development team.
                </p>
            </div>
        </div>
    );
}

export default About