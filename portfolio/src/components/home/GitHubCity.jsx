import { useState } from 'react';

const FRAME_KEY = 'github-city-frame';
const frames = [
  { id: 'window', label: 'Window' },
  { id: 'browser', label: 'Browser' },
  { id: 'phone', label: 'Phone' },
  { id: 'code', label: 'Code' },
];

function readFrame() {
  try {
    const saved = localStorage.getItem(FRAME_KEY);
    if (frames.some((frame) => frame.id === saved)) return saved;
  } catch {
    /* Storage can be blocked; the window frame still applies. */
  }
  return 'window';
}

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}

function CityEmbed({ src, framed, className = 'h-80 w-full border-0 bg-base-200', linkClass = '' }) {
  if (!framed) {
    return (
      <a className={`btn btn-outline m-6 h-80 w-[calc(100%-3rem)] text-base ${linkClass}`} href={src} target="_blank" rel="noopener noreferrer">
        daydin14&apos;s Git City
      </a>
    );
  }

  return (
    <iframe
      className={className}
      src={src}
      title="daydin14's Git City"
    />
  );
}

function CityFrame({ frame, src, canRenderCity }) {
  const embed = <CityEmbed src={src} framed={canRenderCity} />;
  const phoneEmbed = canRenderCity
    ? <iframe className="h-full w-full border-0" src={src} title="daydin14's Git City" />
    : (
      <a className="btn btn-outline m-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] text-base" href={src} target="_blank" rel="noopener noreferrer">
        daydin14&apos;s Git City
      </a>
    );

  if (frame === 'browser') {
    return (
      <div className="mockup-browser w-full border border-base-300 bg-base-100">
        <div className="mockup-browser-toolbar">
          <div className="input w-full max-w-md">
            <span className="truncate">daydin14 GitHub City</span>
          </div>
        </div>
        {embed}
      </div>
    );
  }

  if (frame === 'phone') {
    return (
      <div className="mockup-phone">
        <div className="mockup-phone-camera" />
        <div className="mockup-phone-display bg-base-200">
          {phoneEmbed}
        </div>
      </div>
    );
  }

  if (frame === 'code') {
    return (
      <div className="mockup-code w-full">
        <div className="px-4 pb-4">
          <CityEmbed src={src} framed={canRenderCity} className="h-80 w-full rounded-box border-0 bg-base-200" linkClass="border-neutral-content text-neutral-content" />
        </div>
      </div>
    );
  }

  return (
    <div className="mockup-window w-full border border-base-300 bg-base-300">
      {embed}
    </div>
  );
}

export default function GitHubCity() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [frame, setFrame] = useState(readFrame);
  const [canRenderCity] = useState(supportsWebGL);
  const years = Array.from({ length: currentYear - 2008 + 1 }, (_, index) => 2008 + index);
  const src = `https://honzaap.github.io/GithubCity/?name=daydin14&year=${year}`;

  function selectFrame(next) {
    setFrame(next);
    try {
      localStorage.setItem(FRAME_KEY, next);
    } catch {
      /* The choice still applies for this visit. */
    }
  }

  return (
    <section id="github-city" className="bg-base-200 px-4 py-16 md:py-24" aria-labelledby="github-city-heading">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="github-city-heading" className="mb-6 text-4xl font-bold md:text-5xl">GitHub City</h2>
        <div className="join mb-4 flex flex-wrap items-stretch">
          <label className="join-item flex shrink-0 items-center gap-2 whitespace-nowrap bg-base-100 px-3" htmlFor="year-select">
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
          <ul className="menu menu-horizontal join-item flex-wrap bg-base-100 px-1" aria-label="City frame">
            {frames.map((option) => (
              <li key={option.id}>
                <button
                  type="button"
                  aria-pressed={frame === option.id}
                  onClick={() => selectFrame(option.id)}
                >
                  <kbd className={`kbd kbd-sm ${frame === option.id ? 'border-primary bg-primary text-primary-content' : ''}`}>
                    {option.label}
                  </kbd>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={frame === 'phone' ? 'flex justify-center' : undefined}>
          <div className={`aura aura-glow text-primary ${frame === 'phone' ? '' : 'w-full'}`}>
            <CityFrame frame={frame} src={src} canRenderCity={canRenderCity} />
          </div>
        </div>
      </div>
    </section>
  );
}
