/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a-us.storyblok.com",
        port: "",
        pathname: '/f/1017162/1145x529/420a63ed37/**',
        
      },
     {
        protocol: "https",
        hostname: "a-us.storyblok.com",
        port: "",
        pathname: '/f/1017162/300x300/323bae3bb7/**',
        },
    ],
  },
};

module.exports = nextConfig;
