/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        fjalla: ["Fjalla One", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        cream: "#FFF6F6",
        darkBG: "#171717",
        darkBG2: "#8d8c8d",
      },
      textColor: {
        darkText: "#ffffff",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("daisyui")],
  darkMode: "class",
};
