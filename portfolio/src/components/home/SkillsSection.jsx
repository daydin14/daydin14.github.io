import skills from '../../data/skills';
import skillIcons from './skillIcons';

const groups = [
  { title: 'Frontend', names: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Backend & .NET', names: ['C#', 'Blazor', 'Visual Basic .NET (VB.NET)', 'ASP.NET', 'Python'] },
  { title: 'Databases & Data', names: ['SQL', 'JSON', 'CSV'] },
  { title: 'Tools', names: ['Git', 'Markdown'] },
];

const byName = Object.fromEntries(skills.map((skill) => [skill.name, skill]));

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-base-100 px-4 py-16 md:py-24" aria-labelledby="skills-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="skills-heading" className="mb-8 text-4xl font-bold md:text-5xl">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="card card-bordered bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-lg">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.names.map((name) => {
                    const skill = byName[name];
                    const Icon = skillIcons[skill.icon];
                    return (
                      <li key={name}>
                        <span className="badge badge-lg gap-2 border-base-300 bg-base-100">
                          {Icon ? <Icon aria-hidden="true" /> : null}
                          {name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
