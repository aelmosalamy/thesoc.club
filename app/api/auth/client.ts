"use client";

import {Session} from "next-auth";
import {getSession, GetSessionParams} from "next-auth/react";
import {Dispatch, useEffect, useState} from "react";

export const AUTH_ERROR = "You must be signed in to use this route.";


export enum Status {
    LOADING = "loading",
    UNAUTHENTICATED = "unauthenticated",
    AUTHENTICATED = "authenticated",
}

type UseReturn = {
    session: Session | null;
    status: Status;
    updateData: () => void;
}

function update(status: Status, setStatus: Dispatch<Status>, setSession: Dispatch<Session | null>, params?: GetSessionParams) {
    if (status !== Status.LOADING) {
        setStatus(Status.LOADING);
        void getSession(params).then((s) => {
            setSession(s);
            setStatus(s === null ? Status.UNAUTHENTICATED : Status.AUTHENTICATED);
        });
    }
}

/**
 * Handler for fetching and waiting for an authentication session on the client side.
 * Check the status flag before using the session.
 *
 * @param params Optional parameters to pass to next-auth getSession.
 */
export default function useSession(params?: GetSessionParams): UseReturn {
    const [status, setStatus] = useState(Status.UNAUTHENTICATED);
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        update(status, setStatus, setSession, params);
    }, []);

    return {session, status, updateData: () => {
        update(status, setStatus, setSession, params);
    }};
}
