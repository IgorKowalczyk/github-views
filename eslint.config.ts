import eslintConfig from "@igorkowalczyk/eslint-config";
import eslintPluginAstro from "eslint-plugin-astro";
// import pluginVue from "eslint-plugin-vue";

export default [
 // prettier
 ...eslintConfig.base,
 ...eslintConfig.node,
 ...eslintPluginAstro.configs["flat/recommended"],
 // ...pluginVue.configs["flat/recommended"],
 ...eslintConfig.typescript,
];
