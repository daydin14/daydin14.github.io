import SkillsDetails from '../../data/skills';
import skillIcons from './skillIcons';

export default function SkillsSection() {
  return (
    <section id="skills" className="section shell" aria-labelledby="skills-heading">
      <div className="section-heading">
        <p className="eyebrow">03</p>
        <h2 id="skills-heading">Skills</h2>
      </div>
      <div className="skill-groups">
        {SkillsDetails.Categories.map((category) => {
          const skills = SkillsDetails.Skills.filter((skill) => skill.category === category.key);
          return (
            <section key={category.key} className="skill-group" aria-labelledby={`skill-${category.key}`}>
              <h3 id={`skill-${category.key}`}>{category.title}</h3>
              <ul className="skill-list">
                {skills.map((skill) => {
                  const Icon = skillIcons[skill.icon];
                  return (
                    <li key={`${skill.category}-${skill.name}`} className="skill-chip">
                      {Icon ? <Icon aria-hidden="true" /> : null}
                      <span>{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
