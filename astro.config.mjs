import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import { VitePWA } from 'vite-plugin-pwa';

import { manifest } from './src/utility/manifest';
import { seoConfig } from './src/utility/seoConfig';

const IN_DEVELOPMENT = process.env.NODE_ENV != "PRODUCTION"

// https://astro.build/config
export default defineConfig({
    site: seoConfig.baseURL,
    integrations: [sitemap()],
    vite: {
        plugins: [
            VitePWA({
                registerType: 'autoUpdate',
                manifest,
                devOptions: {
                    enabled: IN_DEVELOPMENT
                },
                workbox: {
                    globDirectory: 'dist',
                    // globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
                    globPatterns: ['**/*.{js,css,svg,woff,woff2,ttf,eot,ico}'],
                    // Don't fallback on document based (e.g. `/some-page`) requests
                    // This removes an errant console.log message from showing up.
                    navigateFallback: null,
                }
            })
        ]
    }
});
