"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionError = void 0;
const transaction_js_1 = require("../../errors/transaction.js");
const getNodeError_js_1 = require("./getNodeError.js");
function getTransactionError(err, { docsPath, ...args }) {
    let cause = err;
    if ((0, getNodeError_js_1.containsNodeError)(err))
        cause = (0, getNodeError_js_1.getNodeError)(err, args);
    return new transaction_js_1.TransactionExecutionError(cause, {
        docsPath,
        ...args,
    });
}
exports.getTransactionError = getTransactionError;
//# sourceMappingURL=getTransactionError.js.map