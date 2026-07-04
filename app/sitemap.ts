import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://greengrowagri.com/en", lastModified: new Date() },
    { url: "https://greengrowagri.com/te", lastModified: new Date() },
    { url: "https://greengrowagri.com/hi", lastModified: new Date() },
  ];
}
