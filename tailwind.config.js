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
        rootBG: "url('/black_marble.jpg')",
        homeBG: "url('/pizza_bg_black.jpg')",
        restaurant: "url('/restaurant.png')",
        restaurant2: "url('/restaurant-2.jpg')",
        aboutPizza: "url('/about-pizza-cover.jpeg')",
      },
      backgroundColor: {
        transparent: "rgba(0,0,0,0.6)",
        transparentSeconday: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
