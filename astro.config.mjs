// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
 output: "server",
 site: "https://views.igorkowalczyk.dev",
 adapter: vercel(),
 integrations: [tailwind(), compress()],
});
