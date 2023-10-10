const svgToDataUri = require("mini-svg-data-uri");
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
 content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    inter: ["Inter", ...fontFamily.sans],
   },
   colors: {
    background: "#101110",
    "background-secondary": "#161617",
   },
   boxShadow: {
    main: "0 0 500px 100px rgb(16, 17, 16)",
   },
  },
 },
 plugins: [
  plugin(({ matchUtilities }) => {
   matchUtilities({
    "bg-grid": (value) => ({
     backgroundImage: `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`)}")`,
    }),
   });
  }),
  /* eslint-disable global-require */
  require("@igorkowalczyk/is-browser"),
  /* eslint-enable global-require */
 ],
};
