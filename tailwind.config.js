/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fundo: "#141619",
        verde: '#1EBF49',
        azul: '#5FA4E6',
        cinza: '#E5E5E5'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}