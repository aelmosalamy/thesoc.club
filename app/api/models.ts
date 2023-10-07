import {z} from "zod";

export type ErrorResponse = {
    error: string,
}

const PHONE_REGEX =  new RegExp(/^[\d+]+$/);

/**
 * Soft normalization of phone numbers.
 *
 * All valid results should in theory start with a country code and have no spaces (ex: "+971...").
 */
function normalizePhone(value: string | null, ctx: z.RefinementCtx): string | null {
    if (!value) return null;
    value = value.replace(" ", "");

    if (!PHONE_REGEX.test(value)) {
        // Detected an invalid character
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "This phone number seems invalid. Please only use numbers and + (plus).",
        });
        return z.NEVER;
    }

    if (value.startsWith("+")) return value;
    if (value.startsWith("00")) return "+" + value.substring(2);
    if (value.startsWith("0")) return "+971" + value.substring(1);
    if (value.startsWith("5")) return "+971" + value;
    if (value.startsWith("971")) return "+" + value;

    // Failed to parse
    ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "This phone number seems incorrect. Try to add a country code?",
    });
    return z.NEVER;
}

function transformID(value: string, ctx: z.RefinementCtx): string {
    const parsed = value.match(/(^[bg]\d{8})/);
    if (parsed === null) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please enter your AUS ID without @aus.edu",
        });
        return z.NEVER;
    }

    return parsed["0"];
}


export const JOIN_SCHEMA = z.object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string()
        .email("Please enter a valid AUS email address")
        .refine(
            (address) => address.match(/@aus.edu$/),
            "The email must belong to a valid AUS account. If you don't have an account, please contact us directly.",
        ),
    ausID: z.string().min(1, "Please enter your AUS ID").transform(transformID),
    phone: z.string().min(0, "Please enter a valid phone number").transform(normalizePhone).nullable(),
}).strict();
export type JOIN_TYPE = z.infer<typeof JOIN_SCHEMA>;
