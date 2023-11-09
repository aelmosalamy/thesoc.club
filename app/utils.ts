/**
 * Convert the given str to title case (Like This).
 * @param str The string to convert.
 */
export function toTitleCase(str: string): string {
    return str
        .toLowerCase()
        .split(" ")
        .reduce((acc, val) => `${acc} ${val.substring(0, 1).toUpperCase() + val.substring(1)}`, "")
    ;
}

/**
 * Get a property `key` from an untyped javascript `object`, and explicitly specify its type.
 * This function only performs existence checks. Use with caution.
 */
export function getObjectKey<TReturn>(obj: object, key: string): TReturn | null | undefined {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Object.entries(obj).find(([val]) => val === key)?.[1];
}
