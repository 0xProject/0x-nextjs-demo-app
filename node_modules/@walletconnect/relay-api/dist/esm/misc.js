export function assertType(obj, key, type = "string") {
    if (!obj[key] || typeof obj[key] !== type) {
        throw new Error(`Missing or invalid "${key}" param`);
    }
}
export function hasRequiredParams(params, required) {
    let matches = true;
    required.forEach(key => {
        const exists = key in params;
        if (!exists) {
            matches = false;
        }
    });
    return matches;
}
export function hasExactParamsLength(params, length) {
    return Array.isArray(params)
        ? params.length === length
        : Object.keys(params).length === length;
}
export function hasRequiredParamsLength(params, minLength) {
    return Array.isArray(params)
        ? params.length >= minLength
        : Object.keys(params).length >= minLength;
}
export function checkParams(params, required, optional) {
    const exact = !optional.length;
    const matchesLength = exact
        ? hasExactParamsLength(params, required.length)
        : hasRequiredParamsLength(params, required.length);
    if (!matchesLength)
        return false;
    return hasRequiredParams(params, required);
}
export function methodEndsWith(method, expected, separator = "_") {
    const split = method.split(separator);
    return (split[split.length - 1].trim().toLowerCase() ===
        expected.trim().toLowerCase());
}
//# sourceMappingURL=misc.js.map