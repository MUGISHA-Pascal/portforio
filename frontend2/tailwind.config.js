/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this line
  ],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#290B68",
      },
      boxShadow: {
        custom: "1px 1px 5px rgba(41, 11, 104,0.8)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
