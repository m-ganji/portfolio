/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightBg: "#FFF9F7",
      gray: "#D3D3D3",
      mainOrange: "#F66C59",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// mainOrange: "#00BFFE",
//       // black: "#000000",
//       black: "#373866",
