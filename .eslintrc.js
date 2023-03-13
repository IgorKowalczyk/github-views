module.exports = {
 extends: ["@igorkowalczyk/eslint-config", "plugin:astro/recommended"],
 env: {
  node: true,
  es2022: true,
  browser: true,
 },
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
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
