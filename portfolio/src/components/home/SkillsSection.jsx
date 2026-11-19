import { motion } from 'motion/react';
import skills from '../../data/skills';
import skillIcons from './skillIcons';

const groups = [
  {
    title: 'Frontend',
    names: ['HTML', 'CSS', 'JavaScript', 'React'],
    tone: 'text-info',
  },
  {
    title: 'Backend & .NET',
    names: ['C#', 'Blazor', 'Visual Basic .NET (VB.NET)', 'ASP.NET', 'Python'],
    tone: 'text-primary',
  },
  {
    title: 'Databases & Data',
    names: ['SQL', 'JSON', 'CSV'],
    tone: 'text-success',
  },
  {
    title: 'Tools',
    names: ['Git', 'Markdown'],
    tone: 'text-warning',
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
const tiltZones = [0, 1, 2, 3, 4, 5, 6, 7];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-base-100 px-4 py-16 md:py-24" aria-labelledby="skills-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="skills-heading" className="mb-8 text-4xl font-bold md:text-5xl">Skills</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="w-full min-w-0"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
            <div className="hover-3d w-full">
            <div className={`aura aura-glow w-full ${group.tone}`}>
            <article className="card card-border w-full bg-base-200 shadow-md">
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
            </div>
            {tiltZones.map((zone) => <div key={zone} aria-hidden="true" />)}
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
