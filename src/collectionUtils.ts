function isEmptyCollection(a: string | any[] | null | undefined): boolean {
    return a == null || a.length === 0;
}

/**
 * Validates is value list is empty or null
 * @param value
 * @constructor
 */
export function isEmptyList(value: any[] | null | undefined): boolean {
    return isEmptyCollection(value)
}

/**
 * Validates is value list is not empty
 * @param value
 * @constructor
 */
export function isNotEmptyList(value: any[] | null | undefined): boolean {
    return !isEmptyCollection(value);
}

/**
 * Validates if a string is either empty, null or undefined.
 * @param value
 * @constructor
 */
export function isEmptyString(value: string | null | undefined): boolean {
    return isEmptyCollection(value);
}

/**
 * Validates if a string is blank.
 *
 * @param value
 */
export function isBlankString(value: string | null | undefined): boolean {
    return isEmptyCollection(value) || isEmptyCollection(value?.trim());
}
