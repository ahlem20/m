/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      perspective: {
        2000: "2000px",
      },
      transformOrigin: {
        left: "0% 50%",
      },
      transitionProperty: {
        transform: "transform",
      },
      colors: {
        //greeny: "#3CD3AD",
        //bluey:"#02AAB0",
        greeny: "#89cf9b",
        bluey: "#FFB07C",
        bage: "#f4e9e4",
        orng: "#ff6600",
      },
    },
  },
  plugins: [require("daisyui")],
};
