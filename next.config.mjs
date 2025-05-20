/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();
const nextConfig = {
    eslint: {
        // Disable ESLint during production builds
        ignoreDuringBuilds: true,
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    reactStrictMode: true,
    images: {
        domains: [
            '127.0.0.1',
            "images.unsplash.com",
            "unsplash.com",
            "plus.unsplash.com",
            "firebasestorage.googleapis.com",
            "img.clerk.com",
            "lh3.googleusercontent.com",
            "hebbkx1anhila5yf.public.blob.vercel-storage.com",
            "gravatar.com"
        ],
    },
    webpack: (config) => {
        // Add fallback for jose
        config.resolve = {
            ...config.resolve,
            fallback: {
                ...config.resolve.fallback,
                jose: false
            }
        };
        return config;
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
