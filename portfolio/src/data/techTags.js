const TECH_CATALOG = [
  { slug: 'javascript', label: 'JavaScript', aliases: ['javascript', 'js'] },
  { slug: 'typescript', label: 'TypeScript', aliases: ['typescript', 'ts'] },
  { slug: 'python', label: 'Python', aliases: ['python', 'py'] },
  { slug: 'csharp', label: 'C#', aliases: ['c#', 'csharp', 'c sharp', 'c-sharp'] },
  { slug: 'cpp', label: 'C++', aliases: ['c++', 'cpp', 'c plus plus'] },
  { slug: 'php', label: 'PHP', aliases: ['php'] },
  { slug: 'html', label: 'HTML', aliases: ['html', 'html5'] },
  { slug: 'css', label: 'CSS', aliases: ['css', 'css3'] },
  { slug: 'react', label: 'React', aliases: ['react', 'reactjs', 'react.js', 'react js'] },
  { slug: 'react-native', label: 'React Native', aliases: ['react native', 'react-native', 'reactnative'] },
  { slug: 'blazor', label: 'Blazor', aliases: ['blazor'] },
  { slug: 'dotnet', label: '.NET', aliases: ['.net', 'dotnet', 'dot net', 'dot-net', 'asp.net', 'aspnet', 'asp net'] },
  { slug: 'node', label: 'Node', aliases: ['node', 'node.js', 'nodejs', 'node js'] },
  { slug: 'express', label: 'Express', aliases: ['express', 'express.js', 'expressjs', 'express js'] },
  { slug: 'django', label: 'Django', aliases: ['django'] },
  { slug: 'vite', label: 'Vite', aliases: ['vite'] },
  { slug: 'jquery', label: 'jQuery', aliases: ['jquery', 'j query'] },
  { slug: 'ejs', label: 'EJS', aliases: ['ejs'] },
  { slug: 'tailwind', label: 'Tailwind CSS', aliases: ['tailwind css', 'tailwindcss', 'tailwind'] },
  { slug: 'daisyui', label: 'daisyUI', aliases: ['daisyui', 'daisy ui', 'daisy-ui'] },
  { slug: 'material-ui', label: 'Material UI', aliases: ['material ui', 'material-ui', 'materialui', 'mui'] },
  { slug: 'mudblazor', label: 'MudBlazor', aliases: ['mudblazor', 'mud blazor'] },
  { slug: 'firebase', label: 'Firebase', aliases: ['firebase'] },
  { slug: 'mongodb', label: 'MongoDB', aliases: ['mongodb', 'mongo'] },
  { slug: 'mysql', label: 'MySQL', aliases: ['mysql'] },
  { slug: 'postgresql', label: 'PostgreSQL', aliases: ['postgresql', 'postgres', 'psql'] },
  { slug: 'unreal', label: 'Unreal Engine', aliases: ['unreal engine', 'unreal', 'ue4'] },
];

const TECH_BY_SLUG = new Map(TECH_CATALOG.map((tag) => [tag.slug, tag]));

function normalizeKey(value) {
  const compact = String(value).trim().toLowerCase().replace(/\s+/g, ' ');
  if (
    compact === '.net'
    || compact === 'dotnet'
    || compact === 'dot net'
    || compact === 'dot-net'
    || compact === 'asp.net'
    || compact === 'aspnet'
    || compact === 'asp net'
  ) {
    return 'dotnet';
  }

  return compact
    .replace(/\.js\b/g, ' js')
    .replace(/&/g, ' and ')
    .replace(/[._-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const ALIAS_TO_SLUG = new Map();
TECH_CATALOG.forEach((tag) => {
  ALIAS_TO_SLUG.set(normalizeKey(tag.slug), tag.slug);
  ALIAS_TO_SLUG.set(normalizeKey(tag.label), tag.slug);
  tag.aliases.forEach((alias) => {
    ALIAS_TO_SLUG.set(normalizeKey(alias), tag.slug);
  });
});

export function resolveTechTag(value) {
  if (value == null) return null;
  const raw = String(value).trim();
  if (!raw) return null;
  const slug = ALIAS_TO_SLUG.get(normalizeKey(raw));
  if (!slug) return null;
  return TECH_BY_SLUG.get(slug) || null;
}

export { TECH_CATALOG };
