import {Metadata} from "next";

import {openGraphBase} from "@/app/metadata";
import Question from "./question";

const metaInfo = {
    title: "FAQ",
    description: "Frequently Asked Questions about the SOC club.",
};

export const metadata: Metadata = {
    ...metaInfo,
    openGraph: {
        ...openGraphBase,
        ...metaInfo,
        url: "/faq",
    },
};

const QUESTIONS = [
    ["But what is the question?", "42 is the answer"],
    ["Does Adham support DHH's decisions?", "Yes, he is a man set in stone."],
];

export default function FAQ() {
    return (
        <div className=" flex flex-col flex-wrap items-center">
            {QUESTIONS.map((question, idx) => (
                <Question key={idx} question={question[0]} answer={question[1]} />
            ))}
        </div>
    );
}
