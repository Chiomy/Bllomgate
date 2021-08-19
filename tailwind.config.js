
module.exports = {
  mode:'jit',
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'jelly': '#24649C',
        'vogue': '#04345B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
