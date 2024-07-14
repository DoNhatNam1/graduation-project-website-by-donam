/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['bcrypt'],
    },
    output: "standalone",
  };
  
  export default nextConfig;