import skills from '../../data/skills';
import skillIcons from './skillIcons';

const groups = [
  {
    title: 'Frontend',
    names: ['HTML', 'CSS', 'JavaScript', 'React'],
    glow: 'shadow-[0_0_42px_-10px_rgba(97,218,251,0.75)]',
  },
  {
    title: 'Backend & .NET',
    names: ['C#', 'Blazor', 'Visual Basic .NET (VB.NET)', 'ASP.NET', 'Python'],
    glow: 'shadow-[0_0_42px_-10px_rgba(81,43,212,0.7)]',
  },
  {
    title: 'Databases & Data',
    names: ['SQL', 'JSON', 'CSV'],
    glow: 'shadow-[0_0_42px_-10px_rgba(34,197,94,0.7)]',
  },
  {
    title: 'Tools',
    names: ['Git', 'Markdown'],
    glow: 'shadow-[0_0_42px_-10px_rgba(240,80,50,0.7)]',
  },
];

const brandColors = {
  Git: '#F05032',
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#F7DF1E',
  React: '#61DAFB',
  Python: '#3776AB',
  'C#': '#512BD4',
  Blazor: '#512BD4',
  'Visual Basic .NET (VB.NET)': '#004E8C',
  'ASP.NET': '#512BD4',
  SQL: '#CC2927',
  JSON: '#F59E0B',
  CSV: '#217346',
  Markdown: '#083FA1',
};

const byName = Object.fromEntries(skills.map((skill) => [skill.name, skill]));

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-base-100 px-4 py-16 md:py-24" aria-labelledby="skills-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="skills-heading" className="mb-8 text-4xl font-bold md:text-5xl">Skills</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className={`card card-bordered bg-base-200 shadow-md ${group.glow}`}>
              <div className="card-body">
                <h3 className="card-title text-lg">{group.title}</h3>
                <ul className="flex flex-wrap gap-3">
                  {group.names.map((name) => {
                    const skill = byName[name];
                    const Icon = skillIcons[skill.icon];
                    return (
                      <li key={name}>
                        <span className="badge badge-lg gap-2 border-base-300 bg-base-100 py-4">
                          {Icon ? <Icon aria-hidden="true" className="h-7 w-7" style={{ color: brandColors[name] }} /> : null}
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
