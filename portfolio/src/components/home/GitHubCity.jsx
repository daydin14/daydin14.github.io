import { useEffect, useState } from 'react';

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}

export default function GitHubCity() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [canRenderCity] = useState(supportsWebGL);
  const years = [];
  for (let option = 2016; option <= currentYear; option += 1) years.push(option);
  const src = `https://honzaap.github.io/GithubCity/?name=daydin14&year=${year}`;

  useEffect(() => {
    try {
      localStorage.removeItem('github-city-frame');
    } catch {
      /* Storage can be blocked; nothing else depends on the old frame. */
    }
  }, []);

  return (
    <section id="github-city" className="bg-base-200 px-4 py-16 md:py-24" aria-labelledby="github-city-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="github-city-heading" className="mb-6 text-4xl font-bold md:text-5xl">GitHub City</h2>
        <label className="mb-4 flex w-fit items-center gap-2 rounded-box bg-base-100 px-3 py-1" htmlFor="year-select">
          Select Year:
          <select
            id="year-select"
            className="select select-ghost select-sm"
            value={year}
            onChange={(event) => setYear(Number(event.target.value))}
          >
            {years.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <div className="aura aura-glow w-full text-primary">
          {canRenderCity ? (
            <iframe
              className="h-80 w-full rounded-box border-0 bg-base-200"
              src={src}
              title="daydin14's Git City"
            />
          ) : (
            <a className="btn btn-outline h-80 w-full text-base" href={src} target="_blank" rel="noopener noreferrer">
              daydin14&apos;s Git City
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
