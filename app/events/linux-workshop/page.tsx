import {Metadata} from "next";
import Image from "next/image";
import {BsArrowUpRightCircle} from "react-icons/bs";

import {openGraphBase} from "@/app/metadata";
import Poster from "./event-poster.jpeg";

const metaInfo = {
    title: "Linux Masterclass",
    description: "First part of the Hacker Masterclass series, covering Linux fundamentals.",
};

export const metadata: Metadata = {
    ...metaInfo,
    openGraph: {
        ...openGraphBase,
        ...metaInfo,
        url: "/events/linux-workshop",
    },
};

export default function() {
    return <main>
        <article>
            <section>
                <h1 className={"text-3xl text-center text-white"}>
                    Hacker Masterclass: <div className={"inline"} style={{color: "#48D328"}}>Linux</div>
                </h1>
                <h2 className={"text-xl text-center"}>With <a href={"https://deadpackets.pw/"}>DeadPackets (Youssef Awad)</a></h2>

                <p className={"my-5 text-center md:text-left"}>
                    Join the SOC club for a hands-on event with DeadPackets on the fundamentals of Linux.
                    You will have the chance to learn the most crucial skills to get started with hacking on Linux,
                    and a certificate at the end to show your progress.
                </p>

                <div className={"text-center"}>
                    <p className={"inline"}>Sign up below, and attend on the 9th of November from</p>
                    <p className={"font-bold text-white text-lg inline"}> 4 to 6PM</p>
                    <p className={"inline"}> at the</p>
                    <p className={"font-bold text-white text-lg inline"}> EB1-001</p>
                    <p className={"inline"}> auditorium. Bring your laptop!</p>
                </div>
            </section>
        </article>

        <div className={"my-10 flex justify-center"}>
            <a
                href={"https://forms.gle/ekYcQi7fsonhXrLH8"}
                className={"border-2 pl-10 pr-8 py-3 border-black bg-violet-600 rounded-full"}
                target={"_blank"}
            >
                Sign Up
                <BsArrowUpRightCircle color={"white"} className={"ml-3.5 mr-0 inline"}/>
            </a>
        </div>

        <div className={"mt-10 flex justify-center"}>
            <Image src={Poster} alt={"Event poster"} width={750} height={750}/>
        </div>
    </main>;
}
