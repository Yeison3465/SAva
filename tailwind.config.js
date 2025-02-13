/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway"],
      },
      backgroundImage: {
        'imagen8': "url('assets/imagen8.jpeg')",
        'imagen9': "url('assets/Download.mp4')",
        'video11': "url('assets/video1.mp4')",
      },
    },
  },
  plugins: [],
}

