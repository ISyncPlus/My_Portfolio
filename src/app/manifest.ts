import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ebube Ezedimbu — Creative Developer",
    short_name: "Ebube Ezedimbu",
    description:
      "Creative Developer and UI Engineer based in Nigeria building thoughtful web interfaces and scalable systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#16131f",
    theme_color: "#f5d871",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
