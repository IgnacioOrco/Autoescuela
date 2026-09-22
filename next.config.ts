import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "Autoescuela";
// En GitHub Actions usa el nombre del repositorio (ej: /Autoescuela).
// Si se usa dominio personalizado o en local, basePath queda desactivado ("").
const basePath =
  process.env.BASE_PATH !== undefined
    ? process.env.BASE_PATH
    : isGithubActions
    ? `/${repo}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath ? basePath : undefined,
};

export default nextConfig;
