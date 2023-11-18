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
        rootBG: "url('../public/black_marble.jpg')",
        homeBG: "url('../../src/data/image/pizza_bg_black.jpg')",
        restaurant: "url('../../src/data/image/restaurant.png')",
        restaurant2: "url('../../src/data/image/restaurant-2.jpg')",
        aboutPizza: "url('../../src/data/image/about-pizza-cover.jpeg')",
      },
      backgroundColor: {
        transparent: "rgba(0,0,0,0.6)",
        transparentSeconday: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
