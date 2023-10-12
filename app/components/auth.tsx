"use client";

import * as Sentry from "@sentry/browser";
import {signIn, signOut} from "next-auth/react";
import React from "react";

import useSession from "@/app/api/auth/client";

type Props = {
    text?: string,
    className?: string,
}

export function SignIn({text = "Sign in", className}: Props) {
    const {session} = useSession();
    if (session) {
        Sentry.setUser({email: session.user.email});
    }

    return <button onClick={() => void signIn()} className={`w-fit text-white underline ${className}`}>{text}</button>;
}

export function SignOut({text = "Sign out", className}: Props) {
    Sentry.setUser(null);
    return <button onClick={() => void signOut()} className={`w-fit text-white underline ${className}`}>{text}</button>;
}
