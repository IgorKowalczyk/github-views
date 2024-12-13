// https://astro.build/config
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import deno from "@deno/astro-adapter";
import { defineConfig } from "astro/config";
import compress from "astro-compressor";

// https://astro.build/config
export default defineConfig({
 output: "server",
 site: "https://github-views.deno.dev",
 redirects: {
  "/github": "https://github.com/igorkowalczyk/views",
  "/docs": "https://github.com/IgorKowalczyk/github-views?tab=readme-ov-file#-basic-usage",
 },
 adapter: deno(),
 integrations: [tailwind(), preact(), compress()],
});
