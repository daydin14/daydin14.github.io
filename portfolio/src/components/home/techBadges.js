const techTerms = [
  'Tailwind CSS',
  'GitHub Pages',
  'Google Analytics',
  'Google Maps',
  'Visual Studio',
  'Unreal Engine',
  'Material-UI',
  'Material UI',
  'JavaScript',
  'ExpressJS',
  'MudBlazor',
  'DaisyUI',
  'MongoDB',
  'Mongoose',
  'Firebase',
  'Netlify',
  'Heroku',
  'Vercel',
  'Blazor',
  'Django',
  'jQuery',
  'MySQL',
  'React',
  'MERN',
  'HTML',
  'PHP',
  'CSS',
  'C++',
  'Python',
  'ESLint',
  'GH-Pages',
  '.NET',
].sort((left, right) => right.length - left.length);

export default function techBadges(project) {
  let text = `${project.shortDescription || ''} ${project.longDescription || ''}`;
  const found = [];

  techTerms.forEach((term) => {
    const index = text.toLowerCase().indexOf(term.toLowerCase());
    if (index === -1) return;
    found.push(term);
    text = `${text.slice(0, index)}${' '.repeat(term.length)}${text.slice(index + term.length)}`;
  });

  return found.slice(0, 4);
}
