/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',         // Route, die weitergeleitet werden soll
        destination: '/dashboard', // Zielroute
        permanent: false,    // ob es eine permanente (301) Weiterleitung ist oder temporär (307)
      },
    ];
  },
};

export default nextConfig;
