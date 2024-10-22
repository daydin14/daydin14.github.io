// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white p-6">
            <div className="prose dark:prose-dark">
                <div className="mt-6 text-right">
                    <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
                </div>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <div className='mb-4'>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Single-Page Application</strong>: Built using React, providing a smooth and seamless user experience.</li>
                        <li><strong>Responsive Design</strong>: Ensures the application works well on both desktop and mobile devices.</li>
                        <li><strong>Theme Toggle</strong>: Allows users to switch between light and dark themes for better accessibility and user experience.</li>
                        <li><strong>Progress Bar</strong>: Displays a progress bar to indicate page status or length down the page.</li>
                        <li><strong>Google Maps Integration</strong>: Embeds Google Maps for county-based location features and services.</li>
                        <li><strong>Google Analytics</strong>: Tracks and reports website traffic for better insights and analytics.</li>
                        <li><strong>Font Awesome and React Icons</strong>: Utilizes Font Awesome and React Icons for a wide range of icons and symbols.</li>
                        <li><strong>Contact Form</strong>: Includes a contact form for users to get in touch easily.</li>
                        <li><strong>Gradients</strong>: Implements gradient backgrounds and elements for a modern and visually appealing design.</li>
                    </ul>
                </div>
                <br />
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div>
                    <h3 className="text-xl font-semibold underline mt-2 mb-2">IDEs/Editors</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>VS Code</strong>: A powerful, lightweight code editor with built-in support for JavaScript, TypeScript, and Node.js.</li>
                    </ul>
                    <h3 className="text-xl font-semibold underline mt-2 mb-2">Version Control</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Git</strong>: A distributed version control system for tracking changes in source code.</li>
                        <li><strong>GitHub</strong>: A web-based platform for version control and collaboration.</li>
                    </ul>
                    <h3 className="text-xl font-semibold underline mt-2 mb-2">Languages</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>JavaScript (JS)</strong>: The main programming language used for building the application.</li>
                        <li><strong>HTML</strong>: Used for structuring the web pages.</li>
                        <li><strong>CSS</strong>: Used for styling the web pages.</li>
                        <li><strong>Markdown (MD)</strong>: Used for writing documentation.</li>
                    </ul>
                    <h3 className="text-xl font-semibold underline mt-2 mb-2">Frameworks, Platforms, and Libraries</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>NPM</strong>: A package manager for JavaScript, used to install dependencies.</li>
                        <li><strong>React</strong>: A JavaScript library for building user interfaces.</li>
                        <li><strong>React Router</strong>: A library for routing in React applications.</li>
                        <li><strong>react-ga4</strong>: A library for integrating Google Analytics 4 with React applications.</li>
                        <li><strong>react-gtm-module</strong>: A library for integrating Google Tag Manager with React applications.</li>
                    </ul>
                    <h3 className="text-xl font-semibold underline mt-2 mb-2">CSS Frameworks and Tools</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Tailwind CSS</strong>: A utility-first CSS framework for rapid UI development.</li>
                        <li><strong>DaisyUI</strong>: A plugin for Tailwind CSS that provides pre-designed components.</li>
                        <li><strong>PostCSS</strong>: A tool for transforming CSS with JavaScript plugins.</li>
                        <li><strong>Autoprefixer</strong>: A PostCSS plugin to parse CSS and add vendor prefixes.</li>
                    </ul>
                    <h3 className="text-xl font-semibold underline mt-2 mb-2">Linting and Formatting</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>ESLint</strong>: A tool for identifying and fixing problems in JavaScript code.</li>
                        <li><strong>eslint-plugin-react</strong>: An ESLint plugin for React-specific linting rules.</li>
                        <li><strong>@eslint/js</strong>: ESLint's built-in JavaScript rules.</li>
                        <li><strong>globals</strong>: A library of global variables for ESLint.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;