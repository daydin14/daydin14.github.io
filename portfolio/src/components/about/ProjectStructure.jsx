import projectStructure from '../../data/projectStructure';

export default function ProjectStructure() {
  return (
    <article id="project-structure" className="panel" aria-labelledby="structure-heading">
      <h2 id="structure-heading">Project Structure</h2>
      <pre className="structure">{projectStructure}</pre>
    </article>
  );
}
