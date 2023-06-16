"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAbiParameters = void 0;
const index_js_1 = require("./errors/index.js");
const index_js_2 = require("./runtime/index.js");
function parseAbiParameters(params) {
    const abiParameters = [];
    if (typeof params === 'string') {
        const parameters = (0, index_js_2.splitParameters)(params);
        const length = parameters.length;
        for (let i = 0; i < length; i++) {
            abiParameters.push((0, index_js_2.parseAbiParameter)(parameters[i], { modifiers: index_js_2.modifiers }));
        }
    }
    else {
        const structs = (0, index_js_2.parseStructs)(params);
        const length = params.length;
        for (let i = 0; i < length; i++) {
            const signature = params[i];
            if ((0, index_js_2.isStructSignature)(signature))
                continue;
            const parameters = (0, index_js_2.splitParameters)(signature);
            const length = parameters.length;
            for (let k = 0; k < length; k++) {
                abiParameters.push((0, index_js_2.parseAbiParameter)(parameters[k], { modifiers: index_js_2.modifiers, structs }));
            }
        }
    }
    if (abiParameters.length === 0)
        throw new index_js_1.InvalidAbiParametersError({ params });
    return abiParameters;
}
exports.parseAbiParameters = parseAbiParameters;
//# sourceMappingURL=parseAbiParameters.js.map