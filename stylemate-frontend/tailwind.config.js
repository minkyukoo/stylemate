module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '20px',
    },
    colors: {
      'white': {
        1:  '#ffffff',
        2:  '#F7F7F7'
      },
      'black': {
        1:  '#090909',
        2:  '#25282B'
      },
      'grey': {
        1:  '#C4C4C4',
        2:  '#E5E5E5',
        3:  '#797979'
      },
      'purple': {
        1:  '#5700FF',
      },
      'red': {
        1:  '#F44848',
      },
      'pink': {
        1:  '#E299C3',
      },
      'blue': {
        1:  '#ADDAD9',
      },
      'green': {
        1:  '#BCD46C',
      }
    },
  },
  plugins: [],
}
