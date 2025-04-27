import eslintConfig from "@igorkowalczyk/eslint-config";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
// import pluginVue from "eslint-plugin-vue";

export default defineConfig([
 eslintConfig.base,
 eslintConfig.node,
 eslintPluginAstro.configs["flat/recommended"],
 // pluginVue.configs["flat/recommended"],
 eslintConfig.typescript,
]);
