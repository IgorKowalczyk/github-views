import config from "@igorkowalczyk/prettier-config";

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
