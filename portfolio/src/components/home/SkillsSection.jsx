import skills from '../../data/skills';
import skillIcons from './skillIcons';

export default function SkillsSection() {
  return (
    <section id="skills" className="section shell" aria-labelledby="skills-heading">
      <div className="section-heading">
        <p className="eyebrow">03</p>
        <h2 id="skills-heading">Skills</h2>
      </div>
      <ul className="skill-list">
        {skills.map((skill) => {
          const Icon = skillIcons[skill.icon];
          return (
            <li key={skill.name} className="badge badge-lg gap-2 border-base-300 bg-base-100 py-4 font-medium text-base-content">
              {Icon ? <Icon aria-hidden="true" /> : null}
              <span>{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
