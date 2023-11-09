import {PrismaClient} from "@prisma/client";

type BooleanString = "true" | "false";

/* eslint-disable no-var */
declare global {
    var prisma: null | PrismaClient;

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

            // OAuth, see: https://console.cloud.google.com/apis/credentials
            GOOGLE_ID?: string;
            GOOGLE_SECRET: string;
            DEBUG_AUTH?: BooleanString; // Enable extra debug logs from the authentication framework
        }
    }
}
/* eslint-enable */

declare module "next-auth" {
    interface Session {
        user: {
            name?: string,
            email?: string,
            image?: string,
            registrationComplete: boolean,
        }
        expires: string,
    }
}

export {};
