"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAbi = void 0;
const index_js_1 = require("./runtime/index.js");
function parseAbi(signatures) {
    const structs = (0, index_js_1.parseStructs)(signatures);
    const abi = [];
    const length = signatures.length;
    for (let i = 0; i < length; i++) {
        const signature = signatures[i];
        if ((0, index_js_1.isStructSignature)(signature))
            continue;
        abi.push((0, index_js_1.parseSignature)(signature, structs));
    }
    return abi;
}
exports.parseAbi = parseAbi;
//# sourceMappingURL=parseAbi.js.map