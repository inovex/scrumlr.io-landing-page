import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  site: 'https://scrumlr.io',
  integrations: [react()],
  vite: {
    plugins: [svgr()],
  },
  devToolbar: {
    enabled: false,
  },
});
