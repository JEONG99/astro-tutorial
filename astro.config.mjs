import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://jeong99-astro-tutorial.netlify.app/",
  integrations: [tailwind(), preact()]
});