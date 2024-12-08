// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import deno from "@deno/astro-adapter";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
 output: "server",
 site: "https://github-views.deno.dev",
 adapter: deno(),
 integrations: [tailwind()],
});
