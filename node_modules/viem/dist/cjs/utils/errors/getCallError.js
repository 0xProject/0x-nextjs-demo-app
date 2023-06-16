"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallError = void 0;
const contract_js_1 = require("../../errors/contract.js");
const getNodeError_js_1 = require("./getNodeError.js");
function getCallError(err, { docsPath, ...args }) {
    let cause = err;
    if ((0, getNodeError_js_1.containsNodeError)(err))
        cause = (0, getNodeError_js_1.getNodeError)(err, args);
    return new contract_js_1.CallExecutionError(cause, {
        docsPath,
        ...args,
    });
}
exports.getCallError = getCallError;
//# sourceMappingURL=getCallError.js.map