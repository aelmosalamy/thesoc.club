import {NextResponse} from "next/server";
import {Session} from "next-auth";
import {getServerSession as _getServerSession} from "next-auth/next";

import {AUTH_CONFIG} from "@/app/api/auth/[...nextauth]/route";
import {AUTH_ERROR} from "@/app/api/auth/client";
import {ErrorResponse} from "@/app/api/models";


export async function getServerSession(): Promise<Session | null> {
    return await _getServerSession(AUTH_CONFIG);
}


/**
 * Call at the beginning of an API route to require authentication.
 *
 * Returns a NextResponse or Session. If a response is returned, propagate it up,
 * otherwise use the session as needed.
 */
export async function requireAuth(): Promise<Session | NextResponse<ErrorResponse>> {
    const session = await getServerSession();
    if (session === null) {
        return NextResponse.json({error: AUTH_ERROR}, {status: 403});
    }
    return session;
}
