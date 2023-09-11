// @ts-check
/** Configure webpack setup */

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    env: {
        NETLIFY: process.env.NETLIFY || "false",
        BRANCH: process.env.BRANCH || "main",
        PULL_REQUEST: process.env.PULL_REQUEST || "false",
    },
};

module.exports = nextConfig;
