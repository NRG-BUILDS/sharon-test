/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontBig: ["Nanum Myeongjo"],
        primary: ["Monomaniac One"],
      },
      colors: {
        offWhite: "#f7f9f9",
        bodyText: "hsl(207, 13%, 34%)",
        Lime: "#CCFF33",
        Purple: "#9747FF",
        Green: "#3bb77e",
        Red: "#e41b17",
        fontPrimary: "#253d4e",
      },
      borderRadius: {
        bigCorner: "100px",
      },
    },
  },
  plugins: [],
};
