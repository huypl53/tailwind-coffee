/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", ",sans-serif"],
      },
      colors: {
        "light-coffee": "#C89f94",
      },
    },
  },
  plugins: [],
};
