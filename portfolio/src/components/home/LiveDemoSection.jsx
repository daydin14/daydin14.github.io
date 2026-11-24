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
        () => demoProjects.find(({ title }) => title === 'Password Generator') ?? demoProjects[0],
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

                    <div className="flex flex-wrap gap-2">
                        {demoProjects.map((project) => (
                            <button
                                key={project.title}
                                type="button"
                                className="btn btn-square"
                                aria-label={project.title}
                                aria-pressed={activeProject.title === project.title}
                                onClick={() => setActiveProject(project)}
                            >
                                <img className="size-6 object-contain" src={getFaviconSrc(project)} alt="" />
                            </button>
                        ))}
                    </div>

                    <iframe
                        className="h-200 w-full border-0 bg-base-200"
                        src={activeProject.liveDemoLink}
                        title={activeProject.title}
                    />
                    &nbsp;
                </div>
            </div>
        </div>
        </section>
    );
}
