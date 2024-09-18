import {Metadata} from "next";
import Image from "next/image";
import {ReactElement} from "react";

import {openGraphBase} from "@/app/metadata";
import Whatsapp from "./WhatsApp.svg";
import Engage from "./engage.jpg";

const metaInfo = {
    title: "Join Us!",
    description: "Links and resources for joining the club.",
};

export const metadata: Metadata = {
    ...metaInfo,
    openGraph: {
        ...openGraphBase,
        ...metaInfo,
        url: "/links",
    },
};

function Entry(props: {name: string, logo: ReactElement, url: string}) {
    return (
        <a href={props.url} className="mx-auto flex flex-col items-center max-h-60 basis-2/4">
            {props.logo}
            {props.name}
        </a>
    );
}

export default function FAQ() {
    return (
        <main className="container mx-auto max-w-full flex flex-col flex-wrap">
            <h1 className="self-center text-4xl text-white mb-2">
                Society of Cybersecurity
            </h1>

            <section className="container my-3 max-w-full">
                <h2 className="mb-8 text-center text-2xl">Join us!</h2>
                <div className="container flex flex-wrap flex-col md:flex-row items-center gap-y-4">
                    <Entry
                        name="Join our whatsapp group"
                        logo={<Whatsapp/>}
                        url="https://chat.whatsapp.com/JaGFgjvtDEr8bg0UTAnD5c"
                    />
                    <Entry
                        name="Become a member on engage"
                        logo={<Image className="object-contain overflow-hidden" src={Engage} alt="AUS Engage logo."/>}
                        url="https://engage.aus.edu/organization/soc"
                    />
                </div>
            </section>
        </main>
    );
}
