/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38BDF8",
        darkBackground: "#000000",
        darkBackgroundAlt: "#050301",
        darkText: "#35A29F",
        darkTextHover: "#97FEED",
      },
    },
  },
  plugins: [],
};
