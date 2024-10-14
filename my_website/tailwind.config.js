/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '120': "30rem",
        '144': "36rem",
        '168': '42rem',
        '192' : '48rem',
        
      }
    },
  },
  plugins: [],
}