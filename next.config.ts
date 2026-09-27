import type { NextConfig } from "next";

// Canonical production domain. All platform aliases (e.g. *.vercel.app
// production alias) 301 here to avoid duplicate-content competition.
const CANONICAL_HOST = "www.blackscreenhub.online";
const REDIRECTED_HOSTS = ["black-screen-zeta.vercel.app"];

const nextConfig: NextConfig = {
  async redirects() {
    return REDIRECTED_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: `https://${CANONICAL_HOST}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
