"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEntry = void 0;
const safe_json_utils_1 = require("safe-json-utils");
function parseEntry(entry) {
    var _a;
    return [entry[0], safe_json_utils_1.safeJsonParse((_a = entry[1]) !== null && _a !== void 0 ? _a : "")];
}
exports.parseEntry = parseEntry;
//# sourceMappingURL=utils.js.map