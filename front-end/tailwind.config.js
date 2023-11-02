/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
        256: "64rem",
      },
    },
    fontFamily: {
      title: ["Libre DM Serif Display"],
      body: ["Playfair Display", "serif"],
    },
  },
  plugins: [],
};
