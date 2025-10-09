/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir:'dist',
  images:{
unoptimized:true,
  },
  devIndicators: false,
  reactStrictMode: true,
   // 👇 Important: set basePath if you are deploying under a repo name
  basePath: '/americantourister',
  assetPrefix: '/americantourister/',
};

export default nextConfig;
