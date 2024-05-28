/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "black-polygon": "url('/img/polygon-black.jpg')",
        "multi-polygon": "url('/img/polygon-multi.jpg')",
      },
      color: {
        // https://stackoverflow.com/questions/64872861/how-to-use-css-variables-with-tailwind-css
        "text-color-white": "var(--text-color-white)",
      },
    },
  },
  plugins: [],
};
