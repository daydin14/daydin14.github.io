import { useState } from 'react'
import projects from '../../data/projects'

const demoProjects = projects.filter(({ liveDemoLink }) => liveDemoLink?.trim())

function getFaviconSrc(project) {
    if (!project.favicon) return project.image

    return project.favicon
        .replace('https://github.com/', 'https://raw.githubusercontent.com/')
        .replace('/blob/', '/')
}

export default function LiveDemoSection() {
    const [activeProject, setActiveProject] = useState(
        () => demoProjects.find(({ title }) => title === 'Terminal') ?? demoProjects[0],
    )

    return (
        <section id="live-demo" className="bg-base-200 px-4 py-16 md:py-24" aria-labelledby="live-demo-heading">
            <div className="mx-auto w-full max-w-6xl">
            <h2 id="live-demo-heading" className="mb-6 text-4xl font-bold md:text-5xl">Live Demo</h2>
            <div className="aura aura-glow w-full text-primary">
                <div className="mockup-window w-full border border-base-300 bg-base-100">
                    <div className="mockup-window-toolbar">
                        <div className="input w-full max-w-full ">
                            <span className="truncate">daydin14 : {activeProject.title}</span>
                        </div>
                    </div>
                    {/* Could possibly move iframe above maping for project buttons and change flex-wrap-reverse to normal flex-wrap */}
                    <div className="flex flex-wrap-reverse justify-evenly gap-2">
                        {demoProjects.map((project) => {
                            const isActive = activeProject.title === project.title
                            return (
                                <button
                                    key={project.title}
                                    type="button"
                                    className={`btn btn-square ${isActive ? 'aura-glow text-primary' : ''}`}
                                    aria-label={project.title}
                                    aria-pressed={isActive}
                                    onClick={() => setActiveProject(project)}
                                >
                                    <img className="size-6 object-contain" src={getFaviconSrc(project)} alt="" />
                                </button>
                            )
                        })}
                        <iframe
                            className="h-200 w-full border-0 bg-base-200"
                            src={activeProject.liveDemoLink}
                            title={activeProject.title}
                        />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}
