// Data
import data from "@src/data/metadata.json";

// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
    name: data.title,
    short_name: data.title,
    description: data.description,
    theme_color: data.themeColor,
    background_color: data.backgroundColor,
    display: "minimal-ui",
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
