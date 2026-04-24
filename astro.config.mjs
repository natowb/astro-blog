import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://natowb.github.io",
  base: "/astro-blog",
  integrations: [preact()],
});
