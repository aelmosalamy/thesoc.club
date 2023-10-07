import {Metadata} from "next";

import Form from "@/app/(routes)/join/form";
import {getServerSession} from "@/app/api/auth";
import {SignIn} from "@/app/components/auth";
import {openGraphBase} from "@/app/metadata";

const metaInfo = {
    title: "Join The Club",
    description: "Join the SOC club for updates, news, and events.",
};

export const metadata: Metadata = {
    ...metaInfo,
    openGraph: {
        ...openGraphBase,
        ...metaInfo,
        url: "/join",
    },
};


export default async function Join() {
    const user = await getServerSession();
    let content = <Form/>;
    if (user === null) {
        content = <section className={"flex flex-col content-center"}>
            <h1>Please sign in to proceed</h1>
            <SignIn className={"text-black"}/>
        </section>;
    }

    return (
        <main>
            <section className={"mb-10"}>
                <h1 className={"text-3xl my-2"}>Complete Your Profile</h1>
                <p>
                    Completing your profile will add you to the club's mailing list,
                    and allow you to participate in events.
                    The data collected may be accessed by board members.
                </p>
            </section>
            <div className={"m-auto md:w-1/2"}>
                {content}
            </div>
        </main>
    );
}
