// https://astro.build/config
import { writeFile } from "fs/promises";
import { EOL } from "os";
import { fileURLToPath } from "url";
import cloudflare from "@astrojs/cloudflare";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import compress from "astro-compressor";

// https://astro.build/config
export default defineConfig({
 site: "https://views.igorkowalczyk.dev",

 redirects: {
  "/github": "https://github.com/igorkowalczyk/views",
  "/docs": "https://github.com/IgorKowalczyk/github-views?tab=readme-ov-file#-basic-usage",
 },

 integrations: [
  vue(),
  compress(),
  {
   hooks: {
    "astro:build:done": async ({ dir }) => {
     const outFile = fileURLToPath(new URL(".assetsignore", dir));
     await writeFile(outFile, ["_worker.js", "_routes.json", "_headers", "_redirects"].join(EOL) + EOL);
    },
   },
   name: "Create .assetsignore",
  },
 ],

 vite: {
  plugins: [tailwindcss()],
 },

 output: "server",
 adapter: cloudflare({
  platformProxy: {
   enabled: true,
   configPath: "./wrangler.jsonc",
  },
 }),
});
