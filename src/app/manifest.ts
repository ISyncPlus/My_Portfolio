import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "iSyncPlus — Creative Developer",
    short_name: "iSyncPlus",
    description:
      "Creative Developer and UI Engineer based in Nigeria building thoughtful web interfaces and scalable systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#101819",
    theme_color: "#d8e1e7",
    icons: [
      {
        src: "/brand/isyncplus-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/brand/isyncplus-relay-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      { src: "/brand/isyncplus-relay-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/isyncplus-relay-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
