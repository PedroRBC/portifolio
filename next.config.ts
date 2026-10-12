import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    if (process.env.MAINTENANCE_MODE !== "true") return [];

    return [
      {
        source:
          "/((?!maintenance(?:/|$)|homecare/(?:privacy|data-deletion)/?$).*)",
        destination: "/maintenance",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
