/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      process.env.MAINTENANCE_MODE === "true"
        ? {
            source: "/((?!maintenance).*)",
            destination: "/maintenance",
            permanent: false,
          }
        : null,
    ].filter(Boolean);
  },
};

export default nextConfig;
