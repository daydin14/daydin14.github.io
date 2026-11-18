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
    <div className="card mt-12 border border-base-300 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex flex-wrap gap-4">
          <label className="form-control" htmlFor="year-select">
            <span className="label-text font-semibold">Select Year:</span>
            <select
              id="year-select"
              className="select select-bordered"
              value={year}
              onChange={(event) => setYear(Number(event.target.value))}
            >
              {years.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="form-control" htmlFor="color-picker">
            <span className="label-text font-semibold">Border Color:</span>
            <input
              id="color-picker"
              className="input input-bordered h-12 w-16 p-1"
              type="color"
              value={borderColor}
              onChange={(event) => setBorderColor(event.target.value)}
            />
          </label>
        </div>
        {canRenderCity ? (
          <iframe
            className="mt-4 h-80 w-full rounded-box border"
            src={src}
            title="daydin14's Git City"
            style={{ borderColor, boxShadow: `0 0 32px ${borderColor}` }}
          />
        ) : (
          <a
            className="btn btn-outline mt-4 h-auto min-h-40 border-2 py-8 text-base"
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
  );
}
