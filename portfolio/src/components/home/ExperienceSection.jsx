import ProjectDetails from '../../data/projects';

const milestoneTitles = ['SneakersDB', 'MongoBongo', 'SShooter_sju', 'Litter Game'];

const items = [
  ...milestoneTitles.map((title) => {
    const project = ProjectDetails.find((item) => item.title === title);
    return {
      title: project.title,
      category: project.category,
      text: title === 'Litter Game' ? project.longDescription : project.shortDescription,
    };
  }),
  {
    title: 'Software Engineer',
    category: '',
    text: 'Welcome to my portfolio! I am excited to share my journey and work with you.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 bg-base-200 px-4 py-16 md:py-24" aria-labelledby="experience-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="experience-heading" className="mb-10 text-4xl font-bold md:text-5xl">Experience</h2>
        <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
          {items.map((item, index) => (
            <li key={item.title}>
              {index > 0 && <hr />}
              <div className="timeline-middle">
                <span className="block h-4 w-4 rounded-full bg-primary" />
              </div>
              <div className={`timeline-box mb-6 ${index % 2 === 0 ? 'timeline-start' : 'timeline-end'}`}>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  {item.category && <span className="badge badge-outline">{item.category}</span>}
                </div>
                <p className="text-base-content/80">{item.text}</p>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
