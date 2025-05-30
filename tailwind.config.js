/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Garante que Tailwind funcione nos seus arquivos
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        times: ['"Times New Roman"', 'Times', 'serif'],
      },
  },
  plugins: [],
}}
