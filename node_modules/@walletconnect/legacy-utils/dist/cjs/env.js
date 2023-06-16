"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowser = exports.isNode = exports.isMobile = exports.isIOS = exports.isAndroid = exports.detectOS = exports.detectEnv = void 0;
const detect_browser_1 = require("detect-browser");
const window_1 = require("./window");
function detectEnv(userAgent) {
    return detect_browser_1.detect(userAgent);
}
exports.detectEnv = detectEnv;
function detectOS() {
    const env = detectEnv();
    return env && env.os ? env.os : undefined;
}
exports.detectOS = detectOS;
function isAndroid() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") : false;
}
exports.isAndroid = isAndroid;
function isIOS() {
    const os = detectOS();
    return os
        ? os.toLowerCase().includes("ios") ||
            (os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
        : false;
}
exports.isIOS = isIOS;
function isMobile() {
    const os = detectOS();
    return os ? isAndroid() || isIOS() : false;
}
exports.isMobile = isMobile;
function isNode() {
    const env = detectEnv();
    const result = env && env.name ? env.name.toLowerCase() === "node" : false;
    return result;
}
exports.isNode = isNode;
function isBrowser() {
    const result = !isNode() && !!window_1.getNavigator();
    return result;
}
exports.isBrowser = isBrowser;
//# sourceMappingURL=env.js.map