import config from "@igorkowalczyk/prettier-config";

export default {
 ...config,
 plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
 overrides: [
  {
   files: "*.astro",
   options: {
    parser: "astro",
   },
  },
 ],
};
