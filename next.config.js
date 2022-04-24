/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    path: "https://raw.githubusercontent.com/PokeAPI/",
    domains: ["https://github.com/"],
  },
};

module.exports = nextConfig;
