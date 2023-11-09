import Link from "next/link";
import React from "react";

import Socials from "@/app/components/socials";


function Section({title, children}: {title: string, children: React.ReactElement}) {
    return <section>
        <h4 className={"mb-1.5"}>{title}</h4>
        {children}
    </section>;
}

export default function Footer() {
    return <footer className={"w-full flex flex-col gap-4 sm:grid sm:grid-cols-3 text-white"}>
        <Section title={"About"}>
            <p className={"text-gray-300"}>This website is brought to you by the SOC Club at AUS.</p>
        </Section>

        <Section title={"Navigation"}>
            <nav id="footer-links" className={"flex flex-row flex-wrap text-gray-300 gap-2 underline no-modify"}>
                <Link href={"/"}>home</Link>
                <Link href={"/faq"}>faq</Link>
                <Link href={"/resources"}>resources</Link>
                <Link href={"/about"}>about</Link>
                <br/>
                <Link href={"/privacy"}>privacy</Link>
                <Link href={"/terms"}>terms of service</Link>
            </nav>
        </Section>

        <Section title={"Links"}>
            <Socials className={"flex flex-row flex-wrap gap-4 sm:grid sm:grid-cols-2 sm:gap-y-4"}/>
        </Section>
    </footer>;
}
