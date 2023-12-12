// @ts-check
/** Configure next-sitemap generation. */

/** @type {import("next-sitemap").IRobotPolicy[]} */
robotPolicies = [
    {userAgent: "*", allow: "/"},
];

/**
 * @type {import("next-sitemap").IRobotPolicy[]}
 * Don't index netlify site.
 * */
netlifyRobotPolicies = [{userAgent: "*", disallow: "/"}];

/** @type {import("next-sitemap").IConfig} */
module.exports = {
    siteUrl: process.env.DEPLOY_URL || process.env.URL || "https://thesoc.club/",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: process.env.NETLIFY ? netlifyRobotPolicies : robotPolicies,
    }
}
