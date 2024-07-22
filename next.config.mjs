/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        domains: ["res.cloudinary.com"],
    },
    distDir: "out"
};

export default nextConfig;
