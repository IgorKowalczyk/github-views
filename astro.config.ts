// https://astro.build/config
import deno from "@astrojs/deno";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
 output: "server",
 site: "https://views.igorkowalczyk.vercel.app",
 adapter: deno(),
 integrations: [tailwind(), compress()],
});
