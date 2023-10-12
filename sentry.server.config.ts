// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const isNetlify = process.env.NETLIFY === "true";

if (process.env.SENTRY_DSN) {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        debug: false,
        tracesSampleRate: isNetlify ? 1 : 0.25,

        environment: isNetlify ? "netlify" : "production",
        initialScope: {
            tags: {
                "netlify": isNetlify,
                "branch": process.env.BRANCH,
                "is_pr": process.env.PULL_REQUEST === "true",
                "side": "server",
            },
        },
    });
}
