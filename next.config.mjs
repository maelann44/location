/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,        // ok pour un site statique
  images: { unoptimized: true }
};
export default nextConfig;