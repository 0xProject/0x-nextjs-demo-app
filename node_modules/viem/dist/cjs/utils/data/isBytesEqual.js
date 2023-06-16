"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBytesEqual = void 0;
const index_js_1 = require("../../index.js");
const utils_1 = require("@noble/curves/abstract/utils");
function isBytesEqual(a_, b_) {
    const a = (0, index_js_1.isHex)(a_) ? (0, index_js_1.toBytes)(a_) : a_;
    const b = (0, index_js_1.isHex)(b_) ? (0, index_js_1.toBytes)(b_) : b_;
    return (0, utils_1.equalBytes)(a, b);
}
exports.isBytesEqual = isBytesEqual;
//# sourceMappingURL=isBytesEqual.js.map