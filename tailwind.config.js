/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontBig: ['Nanum Myeongjo'],
        primary: ['Monomaniac One']
      },
      colors: {
        bodyText: 'hsl(207, 13%, 34%)',
        heading: 'hsl(208, 49%, 24%)',
        ctaText: 'hsl(356, 100%, 66%)',
        ctaTextHover: 'hsl(355, 100%, 74%)',
        footerBg: 'hsl(240, 10%, 16%)',
        footerText: 'hsl(240, 2%, 79%)',
        heroRed: "hsl(353, 100%, 62%)",
        blueBgDark: 'hsl(237, 17%, 21%)',
        blueBgLight: 'hsl(237, 23%, 32%)',
        heroRedLight: 'hsl(13, 100%, 72%)'
      },
      borderRadius: {
        bigCorner: '100px',
      }
    },
  },
  plugins: [],
}


