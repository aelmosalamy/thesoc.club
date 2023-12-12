// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const isNetlify = process.env.NETLIFY === "true";

if (process.env.SENTRY_DSN) {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        debug: false,

        environment: isNetlify ? "netlify" : "production",
        initialScope: {
            tags: {
                "netlify": isNetlify,
                "branch": process.env.BRANCH,
                "is_pr": process.env.PULL_REQUEST === "true",
                "side": "client",
            },
        },

        autoSessionTracking: true,
        sampleRate: 1,
        tracesSampleRate: isNetlify ? 1 : 0.25,
        replaysSessionSampleRate: 1,
        replaysOnErrorSampleRate: 1.0,

        integrations: [],
    });
}
