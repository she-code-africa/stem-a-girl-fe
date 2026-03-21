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
        primaryBtnHover: "#5C0335",
        scaGrape: "#7D355D",
        scaBloom: "#FF8FCE",
        // new colors
        customGrey: "#4A5565",
        darkBlue: "#101828",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        thunder: ["Thunder", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        orangeGradient: "linear-gradient(135deg,#ff6900 0%,#FB2C36 100%)",
        blueGradient: "linear-gradient(135deg,  #2B7FFF 0%,#00B8DB 100%)",
        pinkGradient: " linear-gradient(135deg, #AD46FF 0%,#F6339A 100%)",
      },
    },
  },
  plugins: [],
};
