/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // SSG
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path:false, "crypto": false  };
        return config;
    },
}

module.exports = nextConfig
