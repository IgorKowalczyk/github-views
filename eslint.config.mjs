import eslintConfig from "@igorkowalczyk/eslint-config";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
 // prettier
 ...eslintConfig.base,
 ...eslintConfig.node,
 ...eslintConfig.typescript,
 ...eslintConfig.tailwindcss,
 ...eslintConfig.astro,
 ...eslintPluginAstro.configs["flat/recommended"],
];
