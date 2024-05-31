/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        monoton: ["Monoton", "sans-serif"],
        caveat: ["Caveat", "sans-serif"],
      },
      backgroundImage: {
        "black-polygon": "url('/img/polygon-black.jpg')",
        "multi-polygon": "url('/img/polygon-multi.jpg')",
      },
      backgroundColor: {
        "black-navbar": "rgba(0, 0, 0, 0.5)",
      },
      colors: {
        "text-color-white": "rgba(240, 240, 240, 1)",
        "logo-color-gradient-from": "rgba(214, 123, 3, 1)",
        "logo-color-gradient-via": "rgba(56, 196, 152, 1)",
        "logo-color-gradient-to": "rgba(255, 0, 0, 1)",
      },
      rotate: {
        360: "360deg",
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
