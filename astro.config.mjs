// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icons from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sitemap(), icons()],
    site: 'https://zhiyangchen.dev',
    base: '/',
});