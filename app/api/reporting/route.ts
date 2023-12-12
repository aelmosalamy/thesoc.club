/**
 * Receive and forward sentry data to circumvent ad-blockers.
 * Ref: https://docs.sentry.io/platforms/javascript/guides/nextjs/troubleshooting/#dealing-with-ad-blockers
 *
 * I do not recommend modifying this file, without careful consideration.
 */

import * as Sentry from "@sentry/nextjs";
import {NextRequest, NextResponse} from "next/server";

function addFile(data: string) {
    return (scope: Sentry.Scope) => {
        scope.addAttachment({
            filename: "body.txt",
            data: data,
            contentType: "text/plain",
        });
    };
}

/**
 * Parse sentry request and forward to DSN.
 *
 * Translated version of:
 * https://docs.sentry.io/platforms/javascript/guides/nextjs/troubleshooting/#using-the-tunnel-option
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
    if (!process.env.SENTRY_DSN) {
        return new NextResponse();
    }

    const dsnParts = process.env.SENTRY_DSN.split(/[@/]/);
    const PROJECT_ID = "/" + dsnParts[dsnParts.length - 1];
    const DSN_HOST = dsnParts[dsnParts.length - 2];
    const API_URL = `https://${DSN_HOST}/api/${PROJECT_ID}/envelope/`;

    const failedResponse = NextResponse.json(
        {error: "Invalid request."},
        {status: 400},
    );

    const body = request.clone().body;

    // Extract DSN from request
    const text = await request.text();
    let header: {dsn?: string};
    try {
        const parts = text.split("\n");
        if (parts.length === 0) return failedResponse;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        header = JSON.parse(parts[0]);
    } catch {
        return failedResponse;
    }

    // Validate DSN
    if (typeof header["dsn"] !== "string") return failedResponse;
    const dsnString: string = header["dsn"];

    let dsn;
    try {
        dsn = new URL(dsnString);
    } catch {
        return failedResponse;
    }

    // A mismatch is probably accidental or malicious
    if (dsn.pathname !== PROJECT_ID || dsn.host !== DSN_HOST) {
        Sentry.configureScope(addFile(text));
        Sentry.captureMessage("Detected possible malicious payload to reporting endpoint.", {
            level: "warning",
            extra: {"target_project": dsn.pathname, "target_host": dsn.host},
        });
        return failedResponse;
    }

    // Forward request
    // Configure the endpoint on server rather than accepting it from the client to avoid SSRF
    const resp = await fetch(API_URL, {
        method: "POST",
        body: body,
        // @ts-expect-error FIXME: Pending: https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1483
        duplex: "half",
        headers: {
            "Content-Type": "application/x-sentry-envelope",
        },
    });

    // Report failed instrumentation upload
    if (Math.floor(resp.status / 100) !== 2) {
        Sentry.configureScope(addFile(text));
        Sentry.captureException(new Error("Failed to forward event to sentry"), {
            level: "warning",
            extra: {status: resp.status, error: await resp.text()},
        });
    }

    return new NextResponse();
}
