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
