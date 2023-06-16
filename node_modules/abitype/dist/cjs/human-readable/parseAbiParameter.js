"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAbiParameter = void 0;
const index_js_1 = require("./errors/index.js");
const index_js_2 = require("./runtime/index.js");
function parseAbiParameter(param) {
    let abiParameter;
    if (typeof param === 'string')
        abiParameter = (0, index_js_2.parseAbiParameter)(param, {
            modifiers: index_js_2.modifiers,
        });
    else {
        const structs = (0, index_js_2.parseStructs)(param);
        const length = param.length;
        for (let i = 0; i < length; i++) {
            const signature = param[i];
            if ((0, index_js_2.isStructSignature)(signature))
                continue;
            abiParameter = (0, index_js_2.parseAbiParameter)(signature, { modifiers: index_js_2.modifiers, structs });
            break;
        }
    }
    if (!abiParameter)
        throw new index_js_1.InvalidAbiParameterError({ param });
    return abiParameter;
}
exports.parseAbiParameter = parseAbiParameter;
//# sourceMappingURL=parseAbiParameter.js.map