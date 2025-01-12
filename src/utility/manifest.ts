// Data
import data from "../data/metadata";

// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the configuration for PWA webmanifest.
 * @type {Partial<ManifestOptions>}
 */
export const manifest: Partial<ManifestOptions> = {
    name: data.title,
    short_name: data.title,
    description: data.description,
    theme_color: data.themeColor,
    background_color: data.backgroundColor,
    display: "standalone",
    icons: [
        {
            src: "/logo.png",
            sizes: "192x192",
            type: "image/png"
        },
        // {
        //     src: "/favicons/favicon-512x512.png",
        //     sizes: "512x512",
        //     type: "image/png"
        // },
        // {
        //     src: "/favicons/favicon-512x512.png",
        //     sizes: "512x512",
        //     type: "image/png",
        //     purpose: "any maskable"
        // }
    ]
}
