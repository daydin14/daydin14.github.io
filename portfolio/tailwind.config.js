import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: 'dark',
    themes: ['light', 'corporate', 'emerald', 'nord', 'dark', 'dim', 'business', 'synthwave'],
  },
};
