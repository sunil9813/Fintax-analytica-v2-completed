/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D947A",
        secondary: "#263959",
        para: "#696E77",
        yellow: "#FBA311",
        primary_sec: "#301D44",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "800px" },
        mobile: { max: "512px" },
      },
      boxShadow: {
        shadow1: "0 0 15px rgba(102, 102, 102, 0.1)",
        shadow2: "0 0 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}
