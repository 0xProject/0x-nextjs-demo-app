"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstimateGasError = void 0;
const estimateGas_js_1 = require("../../errors/estimateGas.js");
const getNodeError_js_1 = require("./getNodeError.js");
function getEstimateGasError(err, { docsPath, ...args }) {
    let cause = err;
    if ((0, getNodeError_js_1.containsNodeError)(err))
        cause = (0, getNodeError_js_1.getNodeError)(err, args);
    return new estimateGas_js_1.EstimateGasExecutionError(cause, {
        docsPath,
        ...args,
    });
}
exports.getEstimateGasError = getEstimateGasError;
//# sourceMappingURL=getEstimateGasError.js.map