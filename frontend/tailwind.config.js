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
        custom: "0 4px 14px rgba(0, 0, 0, 0.25)", // Custom shadow
      },
    },
  },
  plugins: [],
};
