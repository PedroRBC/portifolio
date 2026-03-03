import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      process.env.MAINTENANCE_MODE === "true"
        ? {
            source: "/((?!maintenance).*)",
            destination: "/maintenance",
            permanent: false,
          }
        : null,
    ].filter(Boolean) as any;
  },
};

export default nextConfig;
