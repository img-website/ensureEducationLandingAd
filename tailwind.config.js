// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
    },
    extend: {
      colors: {
        'theme1': '#149ede',
        'theme2': '#f8662b',
        // 'theme3': '#171347',
        // 'theme4': '#1c1c27',
      },
      fontFamily: {
        'Inter': ['"Inter", sans-serif'],
      }
    },
  },
  plugins: [],
}