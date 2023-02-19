/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        app: "linear-gradient(to left, #40c9ff, #e81cff)",
      },
      colors: {
        bg: "#040303",
      },
      gridTemplateRows: {
        layout: "2rem 1fr 1.5rem",
      },
      gridTemplateColumns: {
        editor: "3.5rem 16rem 1fr",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
