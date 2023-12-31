import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://snacksforyoureyes.com',
  integrations: [tailwind(
    {
      config: {
        applyBaseStyles: false,
      },
    } [sitemap()],
  ), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), alpinejs()]
});