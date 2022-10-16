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
        primaryDark: '#FFFFFF',
        secondaryDark: '#FFFFFF',
        primaryLight: '#000000',
        secondaryLight: '#000000',
        action: ' #F30F0F',
        bgPrimary: {
          dark: '#0E0C0D ',
          light: '#FFFFFF',
        },
      },
      translate: ({theme}) => ({
        ...theme('spacing'),
        '2full': '200%',
      }),
    },
    backgroundImage: {
      // eslint-disable-next-line quotes
      'lendingDark': "url('/img/forest1.png')",
      // eslint-disable-next-line quotes
      'lendingLight': "url('/img/ocean.png')",
    },
  },
  plugins: [],
};
