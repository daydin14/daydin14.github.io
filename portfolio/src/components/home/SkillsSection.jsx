import skills from '../../data/skills';
import skillIcons from './skillIcons';

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-base-200 px-4 py-16 md:py-24" aria-labelledby="skills-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="skills-heading" className="mb-8 text-4xl font-bold md:text-5xl">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.icon];
            return (
              <li key={skill.name}>
                <div className="tooltip" data-tip={skill.name}>
                  <span className="badge badge-lg gap-2 border-base-300 bg-base-100 py-4 text-base-content">
                    {Icon ? <Icon aria-hidden="true" className="text-lg" /> : null}
                    <span>{skill.name}</span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
