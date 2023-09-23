import type {Metadata} from "next";
import React from "react";

import "./styles/globals.scss";
import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import {metadataBase} from "./metadata";

export const metadata: Metadata = metadataBase;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="font-mono leading-normal tracking-normal bg-dark-purple text-purple-200 text-purple mb-5">
                <div className="max-w-3xl mx-auto px-5 container">
                    <Navbar/>
                    {children}
                    <hr className={"mt-16 mb-8"}/>
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
