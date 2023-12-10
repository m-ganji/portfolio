/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightBg: "#FFF9F7",
      gray: "#D3D3D3",
      mainOrange: "#F66C59",
      black: "#29283E",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        work_project_bg_light: "url('/src/assets/project-bg-light.png')",
        work_project_bg_dark: "url('/src/assets/project-bg-dark.png')",
      },
    },
  },
  plugins: [],
};

// mainOrange: "#00BFFE",
//       // black: "#000000",
//       black: "#373866",
