import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sirojiddin Portfolio",
    short_name: "Sirojiddin",
    description: "Premium multilingual personal portfolio for Sirojiddin.",
    start_url: "/uz",
    display: "standalone",
    background_color: "#090909",
    theme_color: "#090909"
  };
}
