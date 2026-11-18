import { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle theme-toggle">
      <input
        type="checkbox"
        className="theme-controller"
        value="dark"
        checked={isDark}
        onChange={toggleTheme}
        aria-label={label}
      />
      <FiSun className="swap-on" aria-hidden="true" />
      <FiMoon className="swap-off" aria-hidden="true" />
    </label>
  );
}
