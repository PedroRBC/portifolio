/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#040303",
      },
      visibility: ["group-hover"],
    },
    backgroundImage: {
      app: "linear-gradient(to left, #40c9ff, #e81cff)",
    },
    gridTemplateRows: {
      layout: "2rem 1fr 1.5rem",
    },
    gridTemplateColumns: {
      editor: "3.5rem 1fr",
      page: "16rem 1fr",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
