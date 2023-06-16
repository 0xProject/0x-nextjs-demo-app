"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractError = void 0;
const abi_js_1 = require("../../errors/abi.js");
const base_js_1 = require("../../errors/base.js");
const contract_js_1 = require("../../errors/contract.js");
const EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender, }) {
    const { code, data, message, shortMessage } = (err instanceof contract_js_1.RawContractError
        ? err
        : err instanceof base_js_1.BaseError
            ? err.walk((err) => 'data' in err)
            : {});
    let cause = err;
    if (err instanceof abi_js_1.AbiDecodingZeroDataError) {
        cause = new contract_js_1.ContractFunctionZeroDataError({ functionName });
    }
    else if (code === EXECUTION_REVERTED_ERROR_CODE &&
        (data || message || shortMessage)) {
        cause = new contract_js_1.ContractFunctionRevertedError({
            abi,
            data: typeof data === 'object' ? data.data : data,
            functionName,
            message: shortMessage ?? message,
        });
    }
    return new contract_js_1.ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender,
    });
}
exports.getContractError = getContractError;
//# sourceMappingURL=getContractError.js.map