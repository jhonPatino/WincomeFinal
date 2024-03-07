/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        LimeGreen: "hsl(163, 72%, 41%)",
        BrightRed: "hsl(356, 69%, 56%)",
        Toggle: "hsl(230, 22%, 74%)",
        VeryDarkBlue: "hsl(230, 17%, 14%)",
        VeryDarkBlueTop: "hsl(232, 19%, 15%)",
        DarkDesaturatedBlue: "hsl(228, 28%, 20%)",
        DesaturatedBlue: "hsl(228, 34%, 66%)",
        White: "hsl(0, 0%, 100%)",
        VeryPaleBlue: "hsl(225, 100%, 98%)",
        LightGrayishBlue: "hsl(227, 47%, 96%)",
        DarkGrayishBlue: "hsl(228, 12%, 44%)",
        background: "rgba(0,0,0,.5)",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      backgroundImage: {
        ToggleGradient:
          "linear-gradient(to left, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
    },
  },
  plugins: [],
};
