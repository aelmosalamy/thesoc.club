type BooleanString = "true" | "false";

/* eslint-disable no-var */
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Typically set by netlify CI
            NETLIFY?: BooleanString;
            BRANCH?: string;
            PULL_REQUEST?: BooleanString;

            // Set by external sources. Should default to prod if unset.
            URL: string;

            // Sentry configuration
            SENTRY_DSN?: string;
        }
    }
}
/* eslint-enable */

export {};
