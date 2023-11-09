"use client";

import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import React from "react";

import {WHATSAPP_INVITE} from "@/app/constants/global";

export default function Success() {
    const redirectUrl = useSearchParams().get("callbackUrl") ?? "/";
    const router = useRouter();

    return <main className={"m-auto mt-8 mb-16 flex flex-col items-center"}>
        <h2 className={"text-white text-3xl my-4"}>Thanks for signing up!</h2>
        <p className={"mb-4"}>
            You can now log into your account and access <Link href={"/events"}>events</Link>.<br/>
            Additionally, you can join our <a href={WHATSAPP_INVITE}>WhatsApp community</a>.
        </p>

        <p>Click <Link href={redirectUrl} className={"whiteLinks"} replace={true} onClick={() => {
            router.refresh();
        }}>here</Link> to go back to the page you were last on.</p>
    </main>;
}
