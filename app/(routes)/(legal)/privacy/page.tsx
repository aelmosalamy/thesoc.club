import {Metadata} from "next";
import Link from "next/link";

import {openGraphBase} from "@/app/metadata";

const metaInfo = {
    title: "Privacy Policy",
    description: "The privacy policy of the SOC club.",
};

export const metadata: Metadata = {
    ...metaInfo,
    openGraph: {
        ...openGraphBase,
        ...metaInfo,
        url: "/privacy",
    },
};


export default function Privacy() {
    return <article>
        <section>
            <h2>Privacy Policy</h2>
            <p>
                As a user of this website, or a member of the club, your data will be collected
                and used internally. This allows us to provide a better experience, both for you and for us.
                This document outlines what data we collect, who has access to it, and how it is used.
                By signing up and using this website, you agree to the policy outlined below.
            </p>
        </section>

        <section>
            <h3>Data We Collect</h3>
            <p>We collect the following data to provide this service:</p>
            <ul>
                <li>Your full name, as indicated by you during registration.</li>
                <li>Your AUS email address and ID, as indicated by you during registration.</li>
                <li>Your phone number, if you chose to provide it during registration.</li>
                {/* TODO: Fill OAuth info below */}
                <li>
                    Information provided from Google OAuth, which is indicated when you sign-in with google.
                    You can view the exact data at google.
                </li>
            </ul>
        </section>

        <section>
            <h3>Data Access</h3>
            <p>
                We do our best to protect and secure your data.
                To that end, we limit the number of people who have access to the following:
            </p>
            <ul>
                <li>The club's <Link href={"/about"}>Board Members</Link></li>
                <li>AUS faculty, including club supervisors, and university administration if requested</li>
                <li>
                    Event members such as guests and companies if necessary.
                    If your data is shared, this will be clearly indicated during event signup.
                </li>
            </ul>
        </section>

        <section>
            <h3>How We Use Your Data</h3>
            <p>
                Your data is used to provide the services of this website.
                This includes event registration, issuing certificates, and access to club spaces.
                Event partners may also request your contact information for things like internships and offers,
                which we will provide with your approval.
            </p>
        </section>

        <section>
            <h3>Data Removal</h3>
            <p>
                If you wish to remove your data or disable your account, please send an email
                to <a href={"mailto:data@thesoc.club"}>data@thesoc.club</a>. Please include your
                name and AUS ID, and the reason for removal.
                Your request will be manually reviewed as soon as possible.
            </p>
        </section>
    </article>;
}
