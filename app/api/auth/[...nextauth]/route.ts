import {User} from ".prisma/client";
import {PrismaAdapter} from "@auth/prisma-adapter";
import * as Sentry from "@sentry/nextjs";
import NextAuth, {NextAuthOptions, Session} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import {BRAND_COLOR} from "@/app/constants/global";
import {prisma} from "@/app/constants/server";

/**
 * Expose parameters from the DB user to the caller.
 */
function sessionCallback({session, user}: {session: Session, user: User}) {
    session.user.registrationComplete = user.registrationComplete;
    return session;
}

const providers = [];
if (process.env.GOOGLE_ID) {
    providers.push(GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }));
}


export const AUTH_CONFIG: NextAuthOptions = {
    providers: providers,
    adapter: PrismaAdapter(prisma) as any, // eslint-disable-line
    debug: process.env.DEBUG_AUTH?.toLowerCase() === "true",
    session: {
        strategy: "database",
        maxAge: 24 * 60 * 60 * 7, // 7 days
        updateAge: 60 * 60, // One hour
    },
    pages: {
        newUser: "/join",
    },
    theme: {
        logo: "/soc.png",
        brandColor: BRAND_COLOR,
    },

    callbacks: {
        // @ts-expect-error TS2322 The default typing for this function gives useless typing information
        session: sessionCallback,
    },
    events: {
        signIn: ({user}) => {
            Sentry.setUser({id: user.id, email: user.email ?? undefined});
        },
        signOut: () => {
            Sentry.setUser(null);
        },
    },
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(AUTH_CONFIG);
export {handler as GET, handler as POST};
