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
        darkBG: "#1d232a",
        darkBG2: "#191e23",
      },
      textColor: {
        darkText: "#FFFFFF",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("daisyui")],
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["dark", "light"],
    },
  },
};
