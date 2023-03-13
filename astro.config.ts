// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
 output: "server",
 site: "https://views.igorkowalczyk.dev",
 adapter: vercel({
  analytics: true,
 }),
 integrations: [tailwind(), compress()],
});
