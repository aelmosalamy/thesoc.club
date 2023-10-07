"use client";

import {signIn, signOut} from "next-auth/react";
import React from "react";

type Props = {
    text?: string,
    className?: string,
}

export function SignIn({text = "Sign in", className}: Props) {
    return <button onClick={() => void signIn()} className={`w-fit text-white underline ${className}`}>{text}</button>;
}

export function SignOut({text = "Sign out", className}: Props) {
    return <button onClick={() => void signOut()} className={`w-fit text-white underline ${className}`}>{text}</button>;
}
