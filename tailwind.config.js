/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Lato'],
      },
      colors: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
        action: ' #F30F0F',
        bgDark: {
          100: '#274A60',
          200: '#000000',
        },
        bgLight: '#ffffff',
      },
    },
  },
  plugins: [],
};
