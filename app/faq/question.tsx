"use client";

import React, {useState} from "react";

interface Props {
    question: string;
    answer: string;
}
export default function Question({ question, answer }: Props): React.ReactElement {

    const [open, setOpen] = useState(false);

    return <div className="w-full mb-5">
        <div className="text-violet-200">
            <div
                className={`w-full flex gap-2 cursor-pointer p-3 bg-violet-800 rounded-md ${open && "rounded-br-none rounded-bl-none"}`}
                onClick={() => {
                    setOpen(open => !open);
                }}
            >
                <span>{open ? "-" : "+"}</span>
                <p>{question}</p>
            </div>
        </div>
        <p className={`p-3 bg-violet-300 rounded-br-md rounded-bl-md text-black ${!open && "hidden"}`}>{answer}</p>
    </div>;
}
