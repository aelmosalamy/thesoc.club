import React from "react";
import {BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";

function Entry({ children }: {children: React.ReactElement[]}) {
    return <div className={"flex flex-row gap-2 items-center"}>
        {children}
    </div>;
}

export default function Socials({ className }: {className?: string}) {
    return <div className={className}>
        <Entry>
            <BsInstagram size={20}/>
            <a href={"https://instagram.com/aus_soc"}>aus_soc</a>
        </Entry>
        <Entry>
            <BsYoutube size={20}/>
            <a href={"https://www.youtube.com/@aus_soc"}>@aus_soc</a>
        </Entry>
        <Entry>
            <BsLinkedin size={20}/>
            <a href={"https://www.linkedin.com/company/aus-soc/"}>aus-soc</a>
        </Entry>
    </div>;
}
