/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY || "",
  },
};

module.exports = nextConfig;
