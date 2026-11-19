import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import skills from '../../data/skills';
import skillIcons from './skillIcons';

const groups = [
  {
    title: 'Frontend',
    names: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'daisyUI', 'Material UI', 'Vite'],
    tone: 'text-info',
  },
  {
    title: 'Backend',
    names: ['Node.js', 'Express', 'Python', 'MongoDB', 'SQL', 'JSON', 'CSV'],
    tone: 'text-success',
  },
  {
    title: '.NET ecosystem',
    names: ['C#', 'Blazor', 'Visual Basic .NET (VB.NET)', 'ASP.NET', 'Telerik UI', 'Dapper ORM', 'Serilog'],
    tone: 'text-primary',
  },
  {
    title: 'Cloud & Tools',
    names: ['Git', 'Azure', 'Postman', 'Markdown'],
    tone: 'text-warning',
  },
];

const brandColors = {
  Git: '#F05032',
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#F7DF1E',
  React: '#61DAFB',
  'Tailwind CSS': '#06B6D4',
  daisyUI: '#1AD1A5',
  'Material UI': '#007FFF',
  Vite: '#646CFF',
  'Node.js': '#5FA04E',
  Express: '#767676',
  Python: '#3776AB',
  MongoDB: '#47A248',
  'C#': '#512BD4',
  Blazor: '#512BD4',
  'Visual Basic .NET (VB.NET)': '#004E8C',
  'ASP.NET': '#512BD4',
  'Telerik UI': '#5CE500',
  'Dapper ORM': '#00A3E0',
  Serilog: '#F72C25',
  SQL: '#CC2927',
  JSON: '#F59E0B',
  CSV: '#217346',
  Azure: '#0078D4',
  Postman: '#FF6C37',
  Markdown: '#083FA1',
};

const byName = Object.fromEntries(skills.map((skill) => [skill.name, skill]));
const tiltZones = [0, 1, 2, 3, 4, 5, 6, 7];

function cardHeight(card) {
  const body = card.querySelector('.card-body');
  const title = card.querySelector('.card-title');
  const list = card.querySelector('ul');
  const cardStyle = getComputedStyle(card);
  const bodyStyle = body ? getComputedStyle(body) : null;
  const padding = bodyStyle ? parseFloat(bodyStyle.paddingTop) + parseFloat(bodyStyle.paddingBottom) : 0;
  const border = parseFloat(cardStyle.borderTopWidth) + parseFloat(cardStyle.borderBottomWidth);
  const gap = bodyStyle ? parseFloat(bodyStyle.rowGap || bodyStyle.gap) || 0 : 0;
  return Math.ceil((title?.offsetHeight ?? 0) + (list?.offsetHeight ?? 0) + padding + border + gap);
}

export default function SkillsSection() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;
    const apply = () => {
      const cards = [...grid.querySelectorAll('article')];
      if (!cards.length) return;
      const height = Math.max(...cards.map(cardHeight));
      cards.forEach((card) => {
        card.style.minHeight = `${height}px`;
      });
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="bg-base-100 px-4 py-16 md:py-24" aria-labelledby="skills-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="skills-heading" className="mb-8 text-4xl font-bold md:text-5xl">Skills</h2>
        <div ref={gridRef} className="grid auto-rows-fr grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="h-full min-w-0"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
            <div className="hover-3d h-full w-full">
            <div className={`aura aura-glow h-full w-full ${group.tone}`}>
            <article className="card card-border h-full w-full bg-base-200 shadow-md">
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
