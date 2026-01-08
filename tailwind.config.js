/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dencho-dark': '#0e1625',
        'dencho-purple': '#49299a',
        'dencho-cyan': '#45edf2',
        'dencho-light': '#e8e8fc',
      },
    },
  },
  plugins: [],
}
