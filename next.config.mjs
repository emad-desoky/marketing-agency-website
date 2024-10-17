/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets.aceternity.com",
      "cloudinary.hbs.edu",
      "images.unsplash.com",
      "images.pexels.com",
    ],
  },
  // Other configurations can be added here
};

export default nextConfig;
