// Depencies
import React from 'react'

// Constants
import projectStructure from '../../constants/ProjectStructure';

const ProjectStructure = () => {
    return (
        <div className="prose dark:prose-dark">
            <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
            <div className='mb-4'>
                <pre className="p-4 rounded-lg">
                    {projectStructure}
                </pre>
            </div>
        </div>
    )
}

export default ProjectStructure
