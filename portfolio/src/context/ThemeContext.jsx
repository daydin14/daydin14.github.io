import { createContext, useEffect, useMemo, useState } from 'react';
import { themeFromPreference } from '../data/themes';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(themeFromPreference);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', getComputedStyle(document.body).backgroundColor);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (next) => {
        try {
          localStorage.setItem('theme', next);
        } catch {
          /* The theme still applies for this visit. */
        }
        setThemeState(next);
      },
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
