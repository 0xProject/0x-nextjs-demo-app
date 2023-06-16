import { ExecutionRevertedError, FeeCapTooHighError, FeeCapTooLowError, InsufficientFundsError, IntrinsicGasTooHighError, IntrinsicGasTooLowError, NonceMaxValueError, NonceTooHighError, NonceTooLowError, TipAboveFeeCapError, TransactionTypeNotSupportedError, UnknownNodeError, } from '../../errors/node.js';
import { RpcRequestError } from '../../errors/request.js';
import { InvalidInputRpcError, TransactionRejectedRpcError, } from '../../errors/rpc.js';
export function containsNodeError(err) {
    return (err instanceof TransactionRejectedRpcError ||
        err instanceof InvalidInputRpcError ||
        (err instanceof RpcRequestError && err.code === ExecutionRevertedError.code));
}
export function getNodeError(err, args) {
    const message = err.details.toLowerCase();
    if (FeeCapTooHighError.nodeMessage.test(message))
        return new FeeCapTooHighError({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    else if (FeeCapTooLowError.nodeMessage.test(message))
        return new FeeCapTooLowError({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    else if (NonceTooHighError.nodeMessage.test(message))
        return new NonceTooHighError({ cause: err, nonce: args?.nonce });
    else if (NonceTooLowError.nodeMessage.test(message))
        return new NonceTooLowError({ cause: err, nonce: args?.nonce });
    else if (NonceMaxValueError.nodeMessage.test(message))
        return new NonceMaxValueError({ cause: err, nonce: args?.nonce });
    else if (InsufficientFundsError.nodeMessage.test(message))
        return new InsufficientFundsError({ cause: err });
    else if (IntrinsicGasTooHighError.nodeMessage.test(message))
        return new IntrinsicGasTooHighError({ cause: err, gas: args?.gas });
    else if (IntrinsicGasTooLowError.nodeMessage.test(message))
        return new IntrinsicGasTooLowError({ cause: err, gas: args?.gas });
    else if (TransactionTypeNotSupportedError.nodeMessage.test(message))
        return new TransactionTypeNotSupportedError({ cause: err });
    else if (TipAboveFeeCapError.nodeMessage.test(message))
        return new TipAboveFeeCapError({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
            maxPriorityFeePerGas: args?.maxPriorityFeePerGas,
        });
    else if (message.match(ExecutionRevertedError.nodeMessage) ||
        ('code' in err.cause &&
            err.cause?.code === ExecutionRevertedError.code))
        return new ExecutionRevertedError({
            cause: err,
            message: err.cause.details || err.details,
        });
    return new UnknownNodeError({
        cause: err.cause.cause,
    });
}
//# sourceMappingURL=getNodeError.js.map