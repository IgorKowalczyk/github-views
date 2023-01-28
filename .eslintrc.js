module.exports = {
 env: {
  node: true,
  es2022: true,
  browser: true,
 },
 extends: ["eslint:recommended", "plugin:astro/recommended", "prettier"],
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
 },
 rules: {
  camelcase: "warn",
 },
 overrides: [
  {
   files: ["*.astro"],
   parser: "astro-eslint-parser",
   parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".astro"],
   },
  },
  {
   files: ["*.ts"],
   parser: "@typescript-eslint/parser",
   extends: ["plugin:@typescript-eslint/recommended"],
  },
  {
   files: ["**/*.astro/*.js", "*.astro/*.js"],
   parser: "@typescript-eslint/parser",
  },
 ],
};
