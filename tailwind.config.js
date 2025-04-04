/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-pink': '#ff6ad5',
        'retro-purple': '#c774e8',
        'retro-blue': '#64d2ff',
        'retro-teal': '#00ffcc',
        'retro-dark': '#2d1b4e',
        'retro-black': '#1a1a2e',
      },
    },
  },
  plugins: [],
}
