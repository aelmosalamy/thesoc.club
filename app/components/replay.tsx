"use client";

import {getCurrentHub, Replay} from "@sentry/browser";

const REPLAY_CONFIG = new Replay({
    maskAllText: false,
    blockAllMedia: true,
});

/**
 * Only load this component if SENTRY_DSN is set and configured.
 */
export default function SentryReplay() {
    const client = getCurrentHub().getClient();
    if (client && client.addIntegration) {
        if (!client.getIntegration(Replay)) {
            client.addIntegration(REPLAY_CONFIG);
        }
    }

    return <div id="sentry-replay"/>;
}
