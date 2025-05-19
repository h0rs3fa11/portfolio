/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ancizar Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo-500
          light: '#a5b4fc',   // indigo-300
          dark: '#4338ca',    // indigo-700
        },
        accent: '#f472b6',     // pink-400
      }
    },
  },
  plugins: [],
}
