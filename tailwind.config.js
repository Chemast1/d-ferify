/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0B',
        cyan: { DEFAULT: '#00E5FF', 400: '#00E5FF' },
        gold: { DEFAULT: '#D4AF37' },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
