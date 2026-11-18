import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        elevated: 'var(--bg-elevated)',
        ink: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-contrast': 'var(--accent-contrast)',
        'accent-soft': 'var(--accent-soft)',
        highlight: 'var(--highlight)',
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: 'var(--shadow)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: false,
    themes: [
      {
        light: {
          primary: '#124e59',
          'primary-content': '#ffffff',
          secondary: '#9a3412',
          'secondary-content': '#ffffff',
          accent: '#0f766e',
          'accent-content': '#ffffff',
          neutral: '#44403c',
          'neutral-content': '#f5f3ef',
          'base-100': '#fffdf9',
          'base-200': '#f3efe7',
          'base-300': '#e4ddd2',
          'base-content': '#1c1917',
          info: '#0e7490',
          'info-content': '#ffffff',
          success: '#047857',
          'success-content': '#ffffff',
          warning: '#b45309',
          'warning-content': '#ffffff',
          error: '#b91c1c',
          'error-content': '#ffffff',
        },
      },
      {
        dark: {
          primary: '#2dd4bf',
          'primary-content': '#042f2e',
          secondary: '#fdba74',
          'secondary-content': '#1c1917',
          accent: '#5eead4',
          'accent-content': '#042f2e',
          neutral: '#d6d3d1',
          'neutral-content': '#1c1917',
          'base-100': '#171e23',
          'base-200': '#0e1316',
          'base-300': '#2c363c',
          'base-content': '#f5f3ef',
          info: '#67e8f9',
          'info-content': '#083344',
          success: '#6ee7b7',
          'success-content': '#022c22',
          warning: '#fdba74',
          'warning-content': '#1c1917',
          error: '#fca5a5',
          'error-content': '#450a0a',
        },
      },
    ],
  },
};
