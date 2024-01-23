import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://scrumlr.io',
  integrations: [react()],
  devToolbar: {
    enabled: false,
  },
});
