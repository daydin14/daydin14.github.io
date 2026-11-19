import { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { themes } from '../../data/themes';
import { ThemeContext } from '../../context/ThemeContext';

const darkThemes = new Set(['nord', 'dark', 'dim', 'business', 'synthwave']);

export default function ThemePicker() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = darkThemes.has(theme);
  const modeLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <div className="flex items-center gap-1">
      <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">
        <input
          type="checkbox"
          checked={isDark}
          aria-label={modeLabel}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
        />
        <FiSun className="swap-on" aria-hidden="true" />
        <FiMoon className="swap-off" aria-hidden="true" />
      </label>
      <div className="dropdown dropdown-end">
        <button type="button" className="btn btn-ghost btn-sm" aria-label="Choose theme">
          Theme
        </button>
        <ul className="dropdown-content z-50 mt-2 w-48 rounded-box bg-base-200 p-2 shadow-2xl">
          {themes.map((option) => (
            <li key={option.id}>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-base-300">
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller radio radio-sm radio-primary"
                  value={option.id}
                  checked={theme === option.id}
                  onChange={() => setTheme(option.id)}
                />
                <span>{option.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
