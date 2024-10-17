/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Keep this line for static export
  images: {
    unoptimized: true, // Disable image optimization
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
