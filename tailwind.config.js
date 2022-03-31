module.exports = {
  content: ["./node_modules/flowbite/**/*.js",],
  theme: {
    extend: {
      colors: {
        'redPizza': '#FB2626',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
