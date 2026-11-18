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
    <div className="city">
      <div className="city-controls">
        <label htmlFor="year-select">
          Select Year:
          <select id="year-select" value={year} onChange={(event) => setYear(Number(event.target.value))}>
            {years.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor="color-picker">
          Border Color:
          <input
            id="color-picker"
            type="color"
            value={borderColor}
            onChange={(event) => setBorderColor(event.target.value)}
          />
        </label>
      </div>
      {canRenderCity ? (
        <iframe
          className="city-frame"
          src={src}
          title="daydin14's Git City"
          style={{ '--border-color': borderColor, borderColor }}
        />
      ) : (
        <a
          className="city-fallback city-card"
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderColor, boxShadow: `0 0 32px ${borderColor}` }}
        >
          daydin14&apos;s Git City
        </a>
      )}
    </div>
  );
}
