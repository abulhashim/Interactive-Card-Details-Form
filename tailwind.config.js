/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        Red: "hsl(0, 100%, 66%)",
        White: "hsl(0, 0%, 100%)",
        LightGrayishViolet: "hsl(270, 3%, 87%)",
        DarkGrayishViolet: "hsl(279, 6%, 55%)",
        VeryDarkViolet: "hsl(278, 68%, 11%)",
      },
      backgroundImage: {
        Mobile: "url('./src/assets/images/bg-main-mobile.png')",
        Desktop: "url('./src/assets/images/bg-main-desktop.png')",
      },
    },
  },

  plugins: [],
};
