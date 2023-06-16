import { safeJsonParse } from "safe-json-utils";
export function parseEntry(entry) {
    var _a;
    return [entry[0], safeJsonParse((_a = entry[1]) !== null && _a !== void 0 ? _a : "")];
}
//# sourceMappingURL=utils.js.map