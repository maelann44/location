/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adapte si nécessaire
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff", // ta couleur personnalisée
      },
    },
  },
  plugins: [],
};
