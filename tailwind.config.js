/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  theme: {
    extend: {
      keyframes: {
      },
      animation: {
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
