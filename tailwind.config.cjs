/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["'Rubik'", "sans-serif"],
      body: ["'Rubik'", "sans-serif"],
    },
    screens: {
      'xs': {'max': '639px'},
      'sm': '639px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('pattern-bg.png')",
      },
      colors: {
        "Very-Dark-Gray": "hsl(0, 0%, 17%)",
        "Dark-Gray": "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
