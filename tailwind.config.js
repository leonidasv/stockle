module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@themesberg/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@themesberg/flowbite/plugin')],
}
