export const themes = [
  { id: 'light', label: 'Light' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'emerald', label: 'Emerald' },
  { id: 'nord', label: 'Nord' },
  { id: 'dark', label: 'Dark' },
  { id: 'dim', label: 'Dim' },
  { id: 'business', label: 'Business' },
  { id: 'synthwave', label: 'Synthwave' },
];

export const themeIds = themes.map((theme) => theme.id);

export function themeFromPreference() {
  try {
    const saved = localStorage.getItem('theme');
    if (themeIds.includes(saved)) return saved;
  } catch {
    /* Storage can be blocked. */
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}
