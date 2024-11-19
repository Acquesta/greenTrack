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
        blink: {
          '0%, 100%': { opacity: '0', filter: 'blur(10px)' },
          '50%': { opacity: '1', filter: 'blur(100px)' },
        },
      },
      animation: {
        blink: 'blink 5s infinite',
        'blink-delay-1': 'blink 2s infinite 0.4s', // Animação com 200ms de atraso
        'blink-delay-2': 'blink 4s infinite 0.1s',
        'blink-delay-3': 'blink 2s infinite 0.3s',
        // 'fade-in-blur': 'fadeInBlur 4s ease-in-out forwards',
      },
    },
  },
plugins: [],
}