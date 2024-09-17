// @ts-check
/** Configure webpack setup */
const path = require("path");


/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    env: {
        NETLIFY: process.env.NETLIFY || "false",
        BRANCH: process.env.BRANCH || "main",
        PULL_REQUEST: process.env.PULL_REQUEST || "false",
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "app")]
    },
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'),);
        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        )
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
    
    async redirects() {
        return [
            // {
            //     source: "/qr",
            //     destination: "/",
            //     permanent: false,
            // },
        ];
    },
};

module.exports = nextConfig;
