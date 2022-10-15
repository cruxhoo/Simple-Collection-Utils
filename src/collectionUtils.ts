function isEmptyCollection(a: string | any[] | null | undefined): boolean {
    return a === null || a === undefined || a.length === 0;
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

/**
 * Validates if a path exists on an object
 *
 * @param path dot(.) separated string
 * @param objectValue object to validate
 */
export function pathExistsInObject(path: string, objectValue: Object): boolean {

    if (isEmptyCollection(Object.keys(objectValue))) {
        return false;
    }

    if (isBlankString(path)) {
        throw new Error('path argument cannot be empty or blank');
    }

    const pathTokens = path.split('.');
    const currentProperty = pathTokens.shift() as string;

    if (objectValue.hasOwnProperty(currentProperty)) {
        type ObjectKey = keyof typeof objectValue;
        const objectKey = currentProperty as ObjectKey;
        if (objectValue[objectKey] instanceof Object) {
            const newPath = pathTokens.join('.');
            return pathExistsInObject(newPath, objectValue[objectKey])
        } else {
            return isNotEmptyList(pathTokens) ? false : true;
        }
    } else {
        return false;
    }
}
