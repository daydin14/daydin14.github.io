import projectStructure from '../../data/projectStructure';

export default function ProjectStructure() {
  return (
    <article id="project-structure" className="card bg-base-200 shadow-md" aria-labelledby="structure-heading">
      <div className="card-body">
        <h2 id="structure-heading">Project Structure</h2>
        <pre className="overflow-x-auto rounded-box bg-base-300 p-4 text-sm">{projectStructure}</pre>
      </div>
    </article>
  );
}
