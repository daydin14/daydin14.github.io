import { useContext } from 'react';
import { themes } from '../../data/themes';
import { ThemeContext } from '../../context/ThemeContext';

export default function ThemePicker() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="dropdown dropdown-end">
      <button type="button" className="btn btn-ghost btn-sm">
        Theme
      </button>
      <ul className="dropdown-content z-50 mt-2 w-52 rounded-box bg-base-200 p-2 shadow-2xl">
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
  );
}
