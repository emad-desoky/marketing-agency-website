/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Add this line for static export
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
