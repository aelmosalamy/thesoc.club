import {Metadata} from "next";
import Image from "next/image";

import {openGraphBase} from "@/app/metadata";
import Poster from "./event-poster.png";

const metaInfo = {
    title: "Linux Masterclass 2",
    description: "Second part of the Hacker Masterclass series, covering Linux fundamentals and industry advice.",
};

export const metadata: Metadata = {
    ...metaInfo,
    openGraph: {
        ...openGraphBase,
        ...metaInfo,
        url: "/events/linux-workshop-2",
    },
};

export default function() {
    return <main>
        <article>
            <section>
                <h1 className={"text-3xl text-center text-white"}>
                    Hacker Masterclass: <div className={"inline"} style={{color: "#DA00B5"}}>Linux & Industry</div>
                </h1>
                <h2 className={"text-xl text-center"}>With <a href={"https://deadpackets.pw/"}>DeadPackets (Youssef Awad)</a></h2>

                <p className={"my-5 text-center md:text-left"}>
                    Join the SOC club for a hands-on event with DeadPackets on the fundamentals of Linux
                    and tips for getting into the industry over winter.
                    Continue your learning journey into the world of linux, and listen to professional advice
                    on how to best leverage your winter break to accelerate your growth.
                    You'll also get a certificate at the end to show your progress.
                </p>

                <p className={"my-5 text-center"}>
                    (You don't need to have attended the previous event to understand this one).
                </p>

                <div className={"text-center"}>
                    <p className={"inline"}>Sign up below, and attend on the 23rd of November from</p>
                    <p className={"font-bold text-white text-lg inline"}> 4 to 6PM</p>
                    <p className={"inline"}> at the</p>
                    <p className={"font-bold text-white text-lg inline"}> EB1-001</p>
                    <p className={"inline"}> auditorium. Bring your laptop!</p>
                </div>
            </section>
        </article>

        <div className={"mt-10 flex justify-center"}>
            <Image src={Poster} alt={"Event poster"} width={750} height={750}/>
        </div>
    </main>;
}
