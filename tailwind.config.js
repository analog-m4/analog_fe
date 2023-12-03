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
        "mulish": ['Mulish', 'sans-serif']
      }
    },
  },
  plugins: [],
}

