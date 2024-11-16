/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fundo: "#141619",
        verde: '#1EBF49',
        azul: '#5FA4E6',
        cinza: '#E5E5E5',
        verdeescuro: '#00611B'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInBlur: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(100px)' },
        },
      },
      animation: {
        'fade-in-blur': 'fadeInBlur 4s ease-in-out forwards',
      },
    },
  },
plugins: [],
}