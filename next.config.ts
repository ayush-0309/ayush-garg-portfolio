import type { NextConfig } from "next";

const repoName = "ayush-garg-portfolio";
const isProdBuild = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProdBuild ? `/${repoName}` : "",
  assetPrefix: isProdBuild ? `/${repoName}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
