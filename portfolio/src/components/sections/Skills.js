import React, { useState } from 'react';

const Skills = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleMouseEnter = (category) => {
        setHoveredCategory(category);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    return (
        <div>
            <ul className='flex flex-wrap gap-2 mb-4'>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('editors')} onMouseLeave={handleMouseLeave}>IDEs/Editors</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('version-control')} onMouseLeave={handleMouseLeave}>Version Control</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('collaboration')} onMouseLeave={handleMouseLeave}>Code Collaboration Tools</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('api-testing')} onMouseLeave={handleMouseLeave}>API Development and Testing</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('languages')} onMouseLeave={handleMouseLeave}>Languages</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('frameworks')} onMouseLeave={handleMouseLeave}>Frameworks, Platforms, and Libraries</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('database')} onMouseLeave={handleMouseLeave}>Database Management</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('deployment')} onMouseLeave={handleMouseLeave}>Deployment</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('css-tools')} onMouseLeave={handleMouseLeave}>CSS Frameworks and Tools</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('linting')} onMouseLeave={handleMouseLeave}>Linting and Formatting</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('package-managers')} onMouseLeave={handleMouseLeave}>Package Managers</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('build-tools')} onMouseLeave={handleMouseLeave}>Build Tools</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('monitoring')} onMouseLeave={handleMouseLeave}>Monitoring and Logging</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('documentation')} onMouseLeave={handleMouseLeave}>Documentation Tools</li>
                <li className="category-item badge badge-outline" onMouseEnter={() => handleMouseEnter('markup')} onMouseLeave={handleMouseLeave}>Markup Languages</li>
            </ul>
            <ul className="flex flex-wrap justify-center items-center">
                {/* IDEs/Editors */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'editors' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="editors">Visual Studio &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'editors' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="editors">Visual Studio Code &emsp;</li>

                {/* Version Control */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'version-control' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="version-control">Git &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'version-control' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="version-control">GitHub &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'version-control' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="version-control">GitHub Actions &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'version-control' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="version-control">GitHub Pages &emsp;</li>

                {/* Code Collaboration Tools */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'collaboration' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="collaboration">Slack &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'collaboration' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="collaboration">Trello &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'collaboration' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="collaboration">Figma &emsp;</li>

                {/* API Development and Testing */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'api-testing' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="api-testing">Postman &emsp;</li>

                {/* Languages */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'languages' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="languages">C# &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'languages' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="languages">JavaScript &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'languages' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="languages">TypeScript &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'languages' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="languages">Python &emsp;</li>

                {/* Frameworks, Platforms, and Libraries */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">DotnetCore &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">Dotnet &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">Razor &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">Blazor &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">MudBlazor &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">React &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">React Router Dom &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">NodeJS &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">Express &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">D3js &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'frameworks' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="frameworks">Django &emsp;</li>

                {/* Database Management */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'database' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="database">MySQL &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'database' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="database">Mongo &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'database' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="database">PSQL &emsp;</li>

                {/* Deployment */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'deployment' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="deployment">Azure &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'deployment' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="deployment">Netlify &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'deployment' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="deployment">GitHubPages &emsp;</li>

                {/* CSS Frameworks and Tools */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'css-tools' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="css-tools">CSS &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'css-tools' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="css-tools">Tailwind CSS &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'css-tools' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="css-tools">Material UI &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'css-tools' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="css-tools">Daisy UI &emsp;</li>

                {/* Linting and Formatting */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'linting' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="linting">ESLint &emsp;</li>

                {/* Package Managers */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'package-managers' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="package-managers">NPM &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'package-managers' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="package-managers">NuGet &emsp;</li>

                {/* Build Tools */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'build-tools' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="build-tools">Webpack &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'build-tools' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="build-tools">Babel &emsp;</li>

                {/* Monitoring and Logging */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'monitoring' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="monitoring">Serilog &emsp;</li>

                {/* API Development and Testing */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'api-testing' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="api-testing">Google Maps Platform API &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'api-testing' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="api-testing">Google Analytics &emsp;</li>
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'api-testing' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="api-testing">FireBase &emsp;</li>

                {/* Documentation Tools */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'documentation' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="documentation">Markdown &emsp;</li>

                {/* Markup Languages */}
                <li className={`mt-2 ${hoveredCategory && hoveredCategory !== 'markup' ? 'opacity-30' : 'scale-110 shadow-lg'}`} data-category="markup">HTML &emsp;</li>
            </ul>
        </div>
    );
};

export default Skills;