// Metadata
import data from "@src/data/metadata.json";

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
    baseURL: data.baseURL,
    description: data.description,
    type: "website",
    image: {
        url: "/logo.png",
        alt: "OpenGraph thumbnail description.",
        width: 1200,
        height: 630
    },
    siteName: data.title,
    twitter: {
        card: "summary_large_image"
    }
}
