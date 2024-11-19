// Dependencies
import React from 'react';

const Technologies = () => {
    return (
        <div className="prose dark:prose-dark">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className='mb-4'>
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
                    <li><strong>@eslint/js</strong>: ESLint&apos;s built-in JavaScript rules.</li>
                    <li><strong>globals</strong>: A library of global variables for ESLint.</li>
                </ul>
            </div>
        </div>
    )
}

export default Technologies
