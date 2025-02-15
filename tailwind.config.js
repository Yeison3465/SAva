/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway"],
      },
      backgroundImage: {
        imagen8: "url('public/assets/imagen8.jpeg')",
        imagen9: "url('assets/xxx.jpeg')",
        video11: "url('assets/video1.mp4')",
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        typewriter: 'typewriter 4s steps(50) forwards, blink 1s infinite', // Sin retraso
        fadeUp: 'fadeUp 2s ease-out', // Animación para las imágenes
      },
    },
  },
  plugins: [],
};
