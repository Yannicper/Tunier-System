/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {};
=======
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
>>>>>>> 5efe5ca8c5805999dc8e4ca60db86beeb8576eac

export default nextConfig;
