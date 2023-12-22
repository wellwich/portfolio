/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.wellwich.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
