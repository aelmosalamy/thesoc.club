import Image from "next/image";
import React, {Suspense} from "react";

import {getServerSession} from "@/app/api/auth";
import {SignIn, SignOut} from "@/app/components/auth";
import Loader from "@/app/components/loader";
import UserAction from "@/app/components/user-action";


export default async function User() {
    const session = await getServerSession();
    if (session === null) {
        return <SignIn/>;
    }

    const img = session.user.image ?
        <Image
            src={session.user.image} alt={"User profile image"} width={40} height={40}
            className={"rounded-full"} priority={true}
        /> : null;

    return <div className={"flex flex-row items-center gap-2"}>
        {img}
        <div className={"flex flex-col"}>
            {session.user.name ?? "Signed in!"}
            <Suspense fallback={<Loader/>}>
                {session.user.registrationComplete ? <SignOut/> : <UserAction/>}
            </Suspense>
        </div>
    </div>;
}
