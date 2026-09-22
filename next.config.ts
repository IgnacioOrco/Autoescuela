import type { NextConfig } from "next";

// Inyectado automáticamente por GitHub Actions (actions/configure-pages)
// En GitHub Pages: "/Autoescuela"
// En local o con dominio personalizado: ""
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath ? basePath : undefined,
};

export default nextConfig;
