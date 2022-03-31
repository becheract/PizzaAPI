module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
