/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir:'dist',
  images:{
unoptimized:true,
  },
  devIndicators: false,
  reactStrictMode: true,
};

export default nextConfig;
