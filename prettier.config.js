/* eslint-disable global-require */

module.exports = {
 ...require("@igorkowalczyk/prettier-config"),
 plugins: [require("prettier-plugin-astro"), require("prettier-plugin-tailwindcss")],
};
