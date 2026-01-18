/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    domains: ['images.ctfassets.net'],
    unoptimized: true, // IMPORTANT for static export
  },
};

export default nextConfig;

