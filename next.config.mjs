/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['xp99dtac6k.ufs.sh'], // Add your custom hostname here
    },
    eslint: {
        // Disable ESLint during build
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
