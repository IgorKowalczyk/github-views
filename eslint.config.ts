import astroConfig from "@igorkowalczyk/eslint-config/astro";
import baseConfig from "@igorkowalczyk/eslint-config/base";
import nodeConfig from "@igorkowalczyk/eslint-config/node";
import typescriptConfig from "@igorkowalczyk/eslint-config/typescript";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig(
  //
  ...baseConfig,
  ...nodeConfig,
  ...typescriptConfig,
  ...astroConfig,
  eslintPluginAstro.configs["flat/recommended"]
);
