/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/js/main.js"
  ],
  theme: {
    extend: {
      colors: {
        'navbarBlue': '#131728',
      },
      fontFamily: {
        'roboto': ["Roboto"], 
      }
    },
  },
  plugins: [],
}