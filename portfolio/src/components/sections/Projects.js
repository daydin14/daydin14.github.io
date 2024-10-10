import React from 'react'

const Projects = () => {
    return (
        <div>
            <p>Here are some of my projects...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded shadow">
                    <h3 className="text-xl font-semibold">Project 1</h3>
                    <p className="mt-2">Description of project 1...</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <h3 className="text-xl font-semibold">Project 2</h3>
                    <p className="mt-2">Description of project 2...</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <h3 className="text-xl font-semibold">Project 3</h3>
                    <p className="mt-2">Description of project 3...</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
