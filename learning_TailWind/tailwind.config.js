module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        primary : '#202225',
        secondary: '#5865f2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
