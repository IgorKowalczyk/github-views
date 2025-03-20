// https://astro.build/config
import vue from "@astrojs/vue";
import deno from "@deno/astro-adapter";
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
 output: "server",
 adapter: deno(),
 integrations: [vue(), compress()],
 vite: {
  plugins: [tailwindcss()],
 },
});
