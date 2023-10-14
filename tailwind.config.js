// /** @type {import('tailwindcss').Config} */

// const AnimateCsss = require('animated-tailwindcss');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

