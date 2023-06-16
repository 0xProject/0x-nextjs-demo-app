import { AbiDecodingZeroDataError } from '../../errors/abi.js';
import { BaseError } from '../../errors/base.js';
import { ContractFunctionExecutionError, ContractFunctionRevertedError, ContractFunctionZeroDataError, RawContractError, } from '../../errors/contract.js';
const EXECUTION_REVERTED_ERROR_CODE = 3;
export function getContractError(err, { abi, address, args, docsPath, functionName, sender, }) {
    const { code, data, message, shortMessage } = (err instanceof RawContractError
        ? err
        : err instanceof BaseError
            ? err.walk((err) => 'data' in err)
            : {});
    let cause = err;
    if (err instanceof AbiDecodingZeroDataError) {
        cause = new ContractFunctionZeroDataError({ functionName });
    }
    else if (code === EXECUTION_REVERTED_ERROR_CODE &&
        (data || message || shortMessage)) {
        cause = new ContractFunctionRevertedError({
            abi,
            data: typeof data === 'object' ? data.data : data,
            functionName,
            message: shortMessage ?? message,
        });
    }
    return new ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender,
    });
}
//# sourceMappingURL=getContractError.js.map