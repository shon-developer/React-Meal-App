/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      roboto: "Roboto",
      poppins: "Poppins",
    },
    screens: {
      sm: "375px",
      md: "412px",
      lg: "667px",
      xl: "768px",
    },
  },
  plugins: [],
};
