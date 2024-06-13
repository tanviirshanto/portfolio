/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        UrbaneBold: ["UrbaneBold", "Arial", "sans-serif"],
        UrbaneMedium: ["UrbaneMedium", "Arial", "sans-serif"],
        UrbaneLight: ["UrbaneLight", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
