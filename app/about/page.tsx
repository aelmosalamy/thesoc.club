import {Metadata} from "next";
import {openGraphBase} from "@/app/metadata";


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
        <div className="container mx-auto max-w-full flex flex-col flex-wrap items-center">
            <div>

            </div>
        </div>
    );
}
