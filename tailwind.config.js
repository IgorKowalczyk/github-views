const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
 darkMode: "class",
 content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./config.js", "./data/blog/*.mdx"],
 theme: {
  extend: {
   fontFamily: {
    inter: ["Inter", ...fontFamily.sans],
   },
   fontWeight: {
    semibold: 700,
   },
  },
 },
 plugins: [
  require("@igorkowalczyk/is-browser"),
 ],
};