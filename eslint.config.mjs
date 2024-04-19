import eslintConfig from "@igorkowalczyk/eslint-config/flat";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
 {
  ignores: ["dist/"],
 },
 ...eslintConfig,
 ...eslintPluginAstro.configs["flat/recommended"],
];
