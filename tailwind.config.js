/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sealBrown: "rgba(33,13,21,1)",
        primaryPink: "rgba(183,5,105,1)",
        whiteSmoke: "rgba(248,248,248,1)",
        astronaut: "rgba(66,82,107,1)",
        lavender: "rgba(255,247,252,1)",
        fiord: "rgba(75,85,99,1)",
      },
      fontFamily: {
        libreFranklin: ["Libre Franklin", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
