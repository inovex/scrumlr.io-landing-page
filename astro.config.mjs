import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  redirects: {
    "/legal": "/legal/privacy",
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
