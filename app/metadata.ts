/** Metadata generator */
import {Metadata} from "next";
import {TemplateString} from "next/dist/lib/metadata/types/metadata-types";
import {OpenGraph} from "next/dist/lib/metadata/types/opengraph-types";


export const TITLE = "The SOC";
export const DESCRIPTION = "The Security Obsessed Camels at the American University of Sharjah.";
const title: TemplateString = {
    default: TITLE,
    template: "%s | The SOC",
};


export const openGraphBase: OpenGraph = {
    title: title,
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: "Security Obsessed Camel",
    url: "/",
};

export const metadataBase: Metadata = {
    title: title,
    description: DESCRIPTION,
    referrer: "origin-when-cross-origin",
    metadataBase: new URL(process.env.URL),
    openGraph: openGraphBase,
};
