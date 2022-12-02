import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    site: 'https://seyom.in',
    integrations: [
        tailwind(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
        robotsTxt(),
    ],
});
