/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
          100: '#0E0C0D ',
          200: '#000000',
        },
        bgLight: '#ffffff',
      },
      translate: ({theme}) => ({
        ...theme('spacing'),
        '2full': '200%',
      }),
    },
    backgroundImage: {
      cpunks_dark: '/img/cpunks_dark.png',
    },
  },
  plugins: [],
};
