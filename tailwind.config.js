/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#d3d3d3',
        'lighter-background': '##4D668B',
      },
      fontFamily: {
        inter: ['Inter', 'Segoe UI'],
      },
    },
  },
  plugins: [],
};
