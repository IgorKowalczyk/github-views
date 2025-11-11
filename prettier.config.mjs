import config from "@igorkowalczyk/prettier-config";

/**
 * @type {import("prettier").Options}
 */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  ...config,
};
