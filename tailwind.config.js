module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redPizza': '#FB2626',
        'redHover' : '#F55D5D',
        'MainRed' : '#D21817',
        'SecondRed' : '#FF413B',
        'navRed' : '#FE4038'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
