/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightBg: "#FFF9F7",
      gray: "#D3D3D3",
      darkGray: "#eeeeee",
      darkGrayMode: "#373648",
      mainOrange: "#F66C59",
      black: "#29283E",
      lightWork: "#FEF8F6",
      darkWork: "#27263A",
      review: "#EDE9E8",
      white: "#FFFFFF",
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
