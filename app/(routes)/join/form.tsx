"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";
import {useRouter, useSearchParams} from "next/navigation";
import React, {Dispatch, useState} from "react";
import {FieldError, FieldErrors, RegisterOptions, useForm, UseFormRegister} from "react-hook-form";
import {z} from "zod";

import {JoinRequestError} from "@/app/api/join/route";
import {JOIN_SCHEMA, JOIN_TYPE} from "@/app/api/models";
import Loader from "@/app/components/loader";
import {ISSUES_URL, jsonHTTPClient, WHATSAPP_INVITE} from "@/app/constants/global";
import {getObjectKey} from "@/app/utils";
import styles from "./styles.module.scss";


type FormHookProps = {
    register: UseFormRegister<JOIN_TYPE>,
    errors: FieldErrors<JOIN_TYPE>,
}

type EntryProps = {
    name: string,
    text: string,
    form: FormHookProps,
    children: React.ReactElement | React.ReactElement[],
    options?: RegisterOptions,
}

function Entry(props: EntryProps) {
    const inputType = getObjectKey<z.ZodType>(JOIN_SCHEMA.shape, props.name);
    const required = !(inputType?.isOptional() || inputType?.isNullable());
    const error = getObjectKey<FieldError>(props.form.errors, props.name);
    const isErrored = !!error;

    const inputChild = props.children instanceof Array ? props.children[props.children.length - 1] : props.children;

    const children = [];
    if (props.children instanceof Array) children.push(props.children.slice(0, props.children.length - 1));
    children.push(React.createElement(inputChild.type, {
        ...inputChild.props,
        // @ts-expect-error TS2345 `props.name` is a generic string, but the typing expects a literal from the schema's keys
        ...props.form.register(props.name, props.options),
        name: props.name,
        id: props.name,
        required: required,
        "aria-required": required,
        "aria-invalid": isErrored,
    }));

    return <div className={"flex flex-col"}>
        <label className={required ? styles.required : ""} htmlFor={props.name}>{props.text}</label>
        {...children}
        <p className={`text-red-500 transition ${isErrored ? "opacity-1 visible" : "opacity-0 invisible"}`}>{
            // Placeholder text is used to provide an initial height, and prevent significant redraw
            error?.message ?? "..."
        }</p>
    </div>;
}


async function submit(data: JOIN_TYPE, setError: Dispatch<string>, router: AppRouterInstance, dest: string) {
    const response = await jsonHTTPClient.post<JoinRequestError>("api/join/", data);
    if (response.status === 200) {
        router.push(dest);
        return;
    }

    setError(response.data.error);
    return;
}

export default function Form() {
    const router = useRouter();
    const dest = new URL("/join/success", process.env.URL);
    dest.searchParams.append("callbackUrl", useSearchParams().get("callbackUrl") ?? "/");

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isLoading, isSubmitting},
    } = useForm<JOIN_TYPE>({
        resolver: zodResolver(JOIN_SCHEMA),
        mode: "all",
    });
    const formProps: FormHookProps = {errors, register};

    const [serverError, setServerError] = useState("");
    if (serverError) {
        return <div className={"flex flex-col"}>
            <p>Failed to submit due to an unknown error:</p>
            <p>{serverError}</p>

            <p className={"mt-5"}>
                Please <button type={"reset"} className={"link"} onClick={() => {
                    reset();
                    setServerError("");
                }}>refresh</button> the page, and try again.
            </p>
            <p className={"mt-2"}>
                If the issue persists, you can ask for help on the <a href={WHATSAPP_INVITE}>Whatsapp group</a>,
                or submit an issue on the <a href={ISSUES_URL}>project repository</a>.
            </p>
        </div>;

    }

    if (isLoading || isSubmitting) {
        return <Loader/>;
    }

    return (
        <form
            /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
            onSubmit={handleSubmit((e) => submit(e, setServerError, router, dest.toString()))}
            className={`flex flex-col ${styles.form}`}
        >
            <Entry name={"name"} text={"Full Name"} form={formProps}>
                <input autoComplete={"name"}/>
            </Entry>
            <Entry name={"email"} text={"Email Address"} form={formProps}>
                <input placeholder={"b000xxxxx@aus.edu"} autoComplete={"email"}/>
            </Entry>
            <Entry name={"ausID"} text={"AUS ID"} form={formProps}>
                <input placeholder={"g000xxxxx"} autoComplete={"username"}/>
            </Entry>

            <div className={"mt-8"}/>
            <Entry name={"phone"} text={"WhatsApp Phone Number"} form={formProps}>
                <p>This is an optional field to help us correlate WhatsApp users and site members.</p>
                <input placeholder={"+971 5xxxxxxxx"} autoComplete={"tel"}/>
            </Entry>

            <button type="submit" className={"mt-5"}>Submit</button>
        </form>
    );
}
