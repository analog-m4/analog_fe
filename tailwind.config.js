/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{html,js}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fjalla": ['Fjalla One', 'sans-serif'],
        "lato": ['Lato', 'sans-serif']
      },
      colors: {
        'cream': '#FFF6F6'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

