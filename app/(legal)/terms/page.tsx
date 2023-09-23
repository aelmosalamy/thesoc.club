import {Metadata} from "next";
import Link from "next/link";

import {openGraphBase} from "@/app/metadata";

const metaInfo = {
    title: "Terms of Service",
    description: "The usage terms of the SOC club.",
};

export const metadata: Metadata = {
    ...metaInfo,
    openGraph: {
        ...openGraphBase,
        ...metaInfo,
        url: "/terms",
    },
};


export default function Terms() {
    return <article>
        <section>
            <h2>Terms of Service</h2>
            <p>
                As a user of this website, you agree to the following terms regarding your usage of the website.
                Violating these terms can lead to account deactivation and reports to university administration.
            </p>
        </section>

        <section>
            <h3>Privacy Policy</h3>
            <p>
                For information about your data, and how it's used,
                please review our privacy policy <Link href={"/privacy"}>here</Link>.
            </p>
        </section>

        <section>
            <h3>Copyright</h3>
            <p>
                Content published on this website (images, texts, logos, events) is the property of the SOC
                Club, and is protected by international copyright laws.
                Please contact <a href={"mailto:media@thesoc.club"}>media@thesoc.club</a> for queries and requests.
            </p>
        </section>

        <section>
            <h3>Communications</h3>
            <p>
                By signing up for the service and providing your email address, you agree to receive emails
                about upcoming events, news, and reminders.
            </p>
        </section>

        <section>
            <h3>User Account</h3>
            <p>
                If you are an owner of an account on this website, you are solely responsible for maintaining
                the confidentiality of your private user details (username and password).
                You are responsible for all activities that occur under your account or password.
            </p>
        </section>

        <section>
            <h3>Updates</h3>
            <p>
                If you are a member of this website, you will receive notification of update for the terms of service
                on the email address provided during registration. You are responsible for complying with any
                changes following notification, including insuring your email address is valid and unable to
                receive notification.
            </p>
        </section>

        <section>
            <h3>Automated Use</h3>
            <p>
                The use of automated tools (scripts, computer programs, scrappers) to access the content
                beyond its intended usage is not allowed, and can lead to account termination.
                You agree to interact with this website exclusively in a human manner through a web browser,
                unless granted explicit permission.
            </p>
        </section>
    </article>;
}
