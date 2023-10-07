"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

const DEST = "/join";

export default function UserAction() {
    const currentPage = usePathname();

    const [callback, setCallback] = useState(DEST);
    useEffect(() => {
        const url = new URL(DEST, process.env.URL);
        url.searchParams.set("callbackUrl", document.URL);
        setCallback(url.toString());
    }, []);

    if (currentPage === DEST) {
        return null;
    }

    return <Link className={"whiteLinks"} href={callback}>Complete your profile now!</Link>;
}
