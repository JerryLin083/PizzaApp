/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        EduTAS: ["Edu TAS Beginner", "cursive"],
        Roboto: ["Roboto", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
        Playpen: ["Playpen Sans", "cursive"],
      },
      backgroundImage: {
        rootBG: "url('/black_marble.webp')",
        homeBG: "url('/pizza_bg_black.webp')",
        restaurant: "url('/restaurant.webp')",
        restaurant2: "url('/restaurant-2.webp')",
        aboutPizza: "url('/about-pizza-cover.webp')",
      },
      backgroundColor: {
        transparent: "rgba(0,0,0,0.6)",
        transparentSeconday: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
