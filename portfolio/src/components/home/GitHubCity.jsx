import { useState } from 'react';

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
  const [borderColor, setBorderColor] = useState('#FFD700');
  const [canRenderCity] = useState(supportsWebGL);
  const years = Array.from({ length: currentYear - 2008 + 1 }, (_, index) => 2008 + index);
  const src = `https://honzaap.github.io/GithubCity/?name=daydin14&year=${year}`;

  return (
    <section id="github-city" className="scroll-mt-24 bg-base-200 px-4 py-16 md:py-24" aria-labelledby="github-city-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="github-city-heading" className="mb-6 text-4xl font-bold md:text-5xl">GitHub City</h2>
        <div className="join mb-4 flex flex-wrap">
          <label className="join-item flex items-center gap-2 bg-base-100 px-3" htmlFor="year-select">
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
          <label className="join-item flex items-center gap-2 bg-base-100 px-3" htmlFor="color-picker">
            Border Color:
            <input
              id="color-picker"
              className="h-8 w-10 cursor-pointer bg-transparent"
              type="color"
              value={borderColor}
              onChange={(event) => setBorderColor(event.target.value)}
            />
          </label>
        </div>
        <div className="mockup-window border border-base-300 bg-base-300">
          {canRenderCity ? (
            <iframe
              className="h-80 w-full bg-base-200"
              src={src}
              title="daydin14's Git City"
              style={{ boxShadow: `inset 0 0 0 2px ${borderColor}` }}
            />
          ) : (
            <a
              className="btn btn-outline m-6 h-auto min-h-40 border-2 py-8 text-base"
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor, boxShadow: `0 0 32px ${borderColor}` }}
            >
              daydin14&apos;s Git City
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
