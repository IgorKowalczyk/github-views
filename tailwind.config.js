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
   fontWeight: {
    semibold: 700,
   },
   colors: {
    background: "#040d21",
    "background-secondary": "#08152b",
   },
   boxShadow: {
    main: "0 0 500px 100px rgba(0, 134, 245, 0.05)",
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
  require("@tailwindcss/forms"),
  require("tailwindcss-text-fill"),
  /* eslint-enable global-require */
 ],
};
