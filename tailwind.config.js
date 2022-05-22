module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        prog: "prog 3s ease-in 1",
      },
      keyframes: {
        prog: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      fontFamily: {
        recursive: ["Jua", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        round: ["Crete Round", "serif"],
        fenix: ["Fenix", "serif"],

        zintel: ["Cinzel", "serif"],
      },
      colors: {
        main: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
// "Jua", "sans-serif"
// font-family: 'Aleo', serif;
// font-family: 'Cinzel', serif;
// font-family: 'Crete Round', serif;
// font-family: 'Fenix', serif;
// font-family: 'Fira Code', monospace;
// font-family: 'Jua', sans-serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Lora', serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Mulish', sans-serif;
// font-family: 'Oswald', sans-serif;
// font-family: 'Raleway', sans-serif;
