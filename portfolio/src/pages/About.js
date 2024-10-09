// Dependencies
import React from 'react';

import ProfilePicture_BC from '../assets/images/profile-pictures/profile-pic-business-casual.png';

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
                        <h1 className="text-4xl font-bold mb-2">David aydin</h1>
                        <h2 className="text-xl font-semibold mb-2">Software Engineer</h2>
                        <p className="text-center">Welcome to my portfolio! I am excited to share my journey and work with you.</p>
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

export default About;
