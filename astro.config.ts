// https://astro.build/config
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import deno from "@deno/astro-adapter";
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
 output: "server",
 site: "https://github-views.deno.dev",
 adapter: deno(),
 integrations: [tailwind(), preact(), compressor()],
});