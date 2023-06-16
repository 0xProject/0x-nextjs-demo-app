"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLocal = exports.getLocal = exports.setLocal = void 0;
const json_1 = require("./json");
const window_1 = require("./window");
function setLocal(key, data) {
    const raw = json_1.safeJsonStringify(data);
    const local = window_1.getLocalStorage();
    if (local) {
        local.setItem(key, raw);
    }
}
exports.setLocal = setLocal;
function getLocal(key) {
    let data = null;
    let raw = null;
    const local = window_1.getLocalStorage();
    if (local) {
        raw = local.getItem(key);
    }
    data = raw ? json_1.safeJsonParse(raw) : raw;
    return data;
}
exports.getLocal = getLocal;
function removeLocal(key) {
    const local = window_1.getLocalStorage();
    if (local) {
        local.removeItem(key);
    }
}
exports.removeLocal = removeLocal;
//# sourceMappingURL=local.js.map