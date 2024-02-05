module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    colors: {
      primary: '#00DC82',
      secondary: '#002E3B',
      dark: '#091D25',
      light: '#E6EFF0',
      white: '#fff',
      black: '#000',
      gray: {
        '900': '#333333',
        '300': '#ccc',
      },
      red: {
        '500': '#F44336',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
