/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
        'surface': 'var(--color-surface)',
        'surface-border': 'var(--color-surface-border)'
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'Cinzel', 'Playfair Display', 'serif'],
        serif: ['Cormorant Garamond', 'Cinzel', 'Playfair Display', 'serif'],
        mono: ['Cormorant Garamond', 'Cinzel', 'Playfair Display', 'serif'],
      },
      letterSpacing: {
        'widest': '.25em',
      }
    },
  },
  plugins: [],
}
