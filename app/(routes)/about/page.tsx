import {Metadata} from "next";
import Image from "next/image";

import Socials from "@/app/components/socials";
import {openGraphBase} from "@/app/metadata";
import BOARD from "./board";
import styles from "./style.module.scss";


const metaInfo = {
    title: "About Us",
    description: "Information about the SOC Club.",
};

export const metadata: Metadata = {
    ...metaInfo,
    openGraph: {
        ...openGraphBase,
        ...metaInfo,
        url: "/about",
    },
};

export default function FAQ() {
    return (
        <main className={`container mx-auto max-w-full flex flex-col flex-wrap ${styles.about}`}>
            <h1 className="self-center text-4xl text-white mb-10">
                Security Obsessed Camels Club
            </h1>

            <section>
                <h2>Who We Are</h2>
                <p>
                    The Security Obsessed Camels Club is organized and managed by students.
                    We are all interested in cyber security, and wish to explore the field.
                    The club allows students to meet like-minded individuals, share knowledge and experience,
                    and participate in events to grow their abilities.
                </p>
            </section>

            <section>
                <h2>What We Do</h2>
                <p>
                    The Security Obsessed Camels Club (SOC) is the cyber security club
                    at the <a href="https://aus.edu/">American University of Sharjah</a>.
                    The club provides experiences which aim to educate and grow the cyber security culture
                    at the university, and the Middle East region as a whole.
                </p>
            </section>

            <section>
                <h2>Follow Us</h2>
                <Socials className={"flex flex-row flex-wrap gap-4"}/>
            </section>

            <section>
                <h2>Meet The Board</h2>
                <p className="mb-2">The following individuals are responsible for organizing the club:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 items-center">
                    {BOARD.map((member, i) => (
                        <div key={i} className="flex flex-col h-full m-auto">
                            <Image className="h-full object-cover self-center" width={400} height={400} src={member.pictureURL} alt={`Picture of ${member.name}`}/>
                            <h3 className="text-white text-xl my-1.5">{member.name}</h3>
                            <h4 className="text-lg mb-1.5">{member.role}</h4>
                            <p style={{maxWidth: "400px"}}>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
