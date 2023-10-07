import {Prisma} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";
import {Session} from "next-auth";
import {ZodError, ZodIssue} from "zod";

import {requireAuth} from "@/app/api/auth";
import {ErrorResponse, JOIN_SCHEMA, JOIN_TYPE} from "@/app/api/models";
import {prisma} from "@/app/constants/server";

enum ErrorCode {
    missingBodyError = "No request body found.",
    validationError = "Could not validate data against model",
    jsonReadError = "Could not parse request body as JSON data",
    saveError = "Could not add user data to the database. Please contact us for help.",
    unknownError = "Unknown error occurred",
}

export type JoinRequestError = {
    error: string,
    errors?: ZodIssue[],
}

export type JoinResponse = JoinRequestError | ErrorResponse | null;

async function saveData(data: JOIN_TYPE, session: Session): Promise<NextResponse<JoinRequestError> | undefined> {
    const user = await prisma.user.update({
        where: {email: session.user.email},
        data: {registrationComplete: true},
    });

    try {
        const createData: Prisma.UserDataCreateInput = {...data, user: {connect: {id: user.id}}};
        await prisma.userData.create({data: createData});
    } catch (e) {
        await prisma.user.update({
            where: {id: user.id},
            data: {registrationComplete: false},
        });

        return NextResponse.json({"error": ErrorCode.saveError}, {status: 500});
    }
}

export async function POST(request: NextRequest): Promise<NextResponse<JoinResponse>> {
    const session = await requireAuth();
    if (session instanceof NextResponse) return session;

    if (!request.body) {
        return NextResponse.json({"error": ErrorCode.missingBodyError}, {status: 400});
    }

    let data;
    try {
        data = JOIN_SCHEMA.parse(await request.json());
    } catch (e) {
        let message: JoinRequestError;
        if (e instanceof ZodError) {
            message = {"error": ErrorCode.validationError, "errors": e.errors};
        } else if (e instanceof SyntaxError) {
            message = {"error": ErrorCode.jsonReadError};
        } else {
            // TODO: Integrate some error logging here
            console.log(e); // eslint-disable-line
            return NextResponse.json({"error": ErrorCode.unknownError}, {status: 500});
        }

        return NextResponse.json(message, {status: 400});
    }

    const saveError = await saveData(data, session);
    if (saveError) return saveError;

    return new NextResponse();
}
