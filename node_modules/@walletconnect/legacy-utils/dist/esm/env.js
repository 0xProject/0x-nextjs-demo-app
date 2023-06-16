import { detect, } from "detect-browser";
import { getNavigator } from "./window";
export function detectEnv(userAgent) {
    return detect(userAgent);
}
export function detectOS() {
    const env = detectEnv();
    return env && env.os ? env.os : undefined;
}
export function isAndroid() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") : false;
}
export function isIOS() {
    const os = detectOS();
    return os
        ? os.toLowerCase().includes("ios") ||
            (os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
        : false;
}
export function isMobile() {
    const os = detectOS();
    return os ? isAndroid() || isIOS() : false;
}
export function isNode() {
    const env = detectEnv();
    const result = env && env.name ? env.name.toLowerCase() === "node" : false;
    return result;
}
export function isBrowser() {
    const result = !isNode() && !!getNavigator();
    return result;
}
//# sourceMappingURL=env.js.map