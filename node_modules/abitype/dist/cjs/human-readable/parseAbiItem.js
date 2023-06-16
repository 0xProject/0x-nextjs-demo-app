"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAbiItem = void 0;
const index_js_1 = require("./errors/index.js");
const index_js_2 = require("./runtime/index.js");
function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string')
        abiItem = (0, index_js_2.parseSignature)(signature);
    else {
        const structs = (0, index_js_2.parseStructs)(signature);
        const length = signature.length;
        for (let i = 0; i < length; i++) {
            const signature_ = signature[i];
            if ((0, index_js_2.isStructSignature)(signature_))
                continue;
            abiItem = (0, index_js_2.parseSignature)(signature_, structs);
            break;
        }
    }
    if (!abiItem)
        throw new index_js_1.InvalidAbiItemError({ signature });
    return abiItem;
}
exports.parseAbiItem = parseAbiItem;
//# sourceMappingURL=parseAbiItem.js.map