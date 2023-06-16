"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJsonAndGetSize = exports.getJsonRpcIdValidator = exports.assertIsJsonRpcError = exports.isJsonRpcError = exports.assertIsJsonRpcFailure = exports.isJsonRpcFailure = exports.assertIsJsonRpcSuccess = exports.isJsonRpcSuccess = exports.assertIsJsonRpcResponse = exports.isJsonRpcResponse = exports.assertIsPendingJsonRpcResponse = exports.isPendingJsonRpcResponse = exports.JsonRpcResponseStruct = exports.JsonRpcFailureStruct = exports.JsonRpcSuccessStruct = exports.PendingJsonRpcResponseStruct = exports.assertIsJsonRpcRequest = exports.isJsonRpcRequest = exports.assertIsJsonRpcNotification = exports.isJsonRpcNotification = exports.JsonRpcNotificationStruct = exports.JsonRpcRequestStruct = exports.JsonRpcParamsStruct = exports.JsonRpcErrorStruct = exports.JsonRpcIdStruct = exports.JsonRpcVersionStruct = exports.jsonrpc2 = exports.isValidJson = exports.JsonStruct = void 0;
const superstruct_1 = require("superstruct");
const assert_1 = require("./assert");
const misc_1 = require("./misc");
exports.JsonStruct = (0, superstruct_1.define)('Json', (value) => {
    const [isValid] = validateJsonAndGetSize(value, true);
    if (!isValid) {
        return 'Expected a valid JSON-serializable value';
    }
    return true;
});
/**
 * Check if the given value is a valid {@link Json} value, i.e., a value that is
 * serializable to JSON.
 *
 * @param value - The value to check.
 * @returns Whether the value is a valid {@link Json} value.
 */
function isValidJson(value) {
    return (0, superstruct_1.is)(value, exports.JsonStruct);
}
exports.isValidJson = isValidJson;
/**
 * The string '2.0'.
 */
exports.jsonrpc2 = '2.0';
exports.JsonRpcVersionStruct = (0, superstruct_1.literal)(exports.jsonrpc2);
exports.JsonRpcIdStruct = (0, superstruct_1.nullable)((0, superstruct_1.union)([(0, superstruct_1.number)(), (0, superstruct_1.string)()]));
exports.JsonRpcErrorStruct = (0, superstruct_1.object)({
    code: (0, superstruct_1.integer)(),
    message: (0, superstruct_1.string)(),
    data: (0, superstruct_1.optional)(exports.JsonStruct),
    stack: (0, superstruct_1.optional)((0, superstruct_1.string)()),
});
exports.JsonRpcParamsStruct = (0, superstruct_1.optional)((0, superstruct_1.union)([(0, superstruct_1.record)((0, superstruct_1.string)(), exports.JsonStruct), (0, superstruct_1.array)(exports.JsonStruct)]));
exports.JsonRpcRequestStruct = (0, superstruct_1.object)({
    id: exports.JsonRpcIdStruct,
    jsonrpc: exports.JsonRpcVersionStruct,
    method: (0, superstruct_1.string)(),
    params: exports.JsonRpcParamsStruct,
});
exports.JsonRpcNotificationStruct = (0, superstruct_1.omit)(exports.JsonRpcRequestStruct, ['id']);
/**
 * Check if the given value is a valid {@link JsonRpcNotification} object.
 *
 * @param value - The value to check.
 * @returns Whether the given value is a valid {@link JsonRpcNotification}
 * object.
 */
function isJsonRpcNotification(value) {
    return (0, superstruct_1.is)(value, exports.JsonRpcNotificationStruct);
}
exports.isJsonRpcNotification = isJsonRpcNotification;
/**
 * Assert that the given value is a valid {@link JsonRpcNotification} object.
 *
 * @param value - The value to check.
 * @param ErrorWrapper - The error class to throw if the assertion fails.
 * Defaults to {@link AssertionError}.
 * @throws If the given value is not a valid {@link JsonRpcNotification} object.
 */
function assertIsJsonRpcNotification(value, 
// eslint-disable-next-line @typescript-eslint/naming-convention
ErrorWrapper) {
    (0, assert_1.assertStruct)(value, exports.JsonRpcNotificationStruct, 'Invalid JSON-RPC notification', ErrorWrapper);
}
exports.assertIsJsonRpcNotification = assertIsJsonRpcNotification;
/**
 * Check if the given value is a valid {@link JsonRpcRequest} object.
 *
 * @param value - The value to check.
 * @returns Whether the given value is a valid {@link JsonRpcRequest} object.
 */
function isJsonRpcRequest(value) {
    return (0, superstruct_1.is)(value, exports.JsonRpcRequestStruct);
}
exports.isJsonRpcRequest = isJsonRpcRequest;
/**
 * Assert that the given value is a valid {@link JsonRpcRequest} object.
 *
 * @param value - The JSON-RPC request or notification to check.
 * @param ErrorWrapper - The error class to throw if the assertion fails.
 * Defaults to {@link AssertionError}.
 * @throws If the given value is not a valid {@link JsonRpcRequest} object.
 */
function assertIsJsonRpcRequest(value, 
// eslint-disable-next-line @typescript-eslint/naming-convention
ErrorWrapper) {
    (0, assert_1.assertStruct)(value, exports.JsonRpcRequestStruct, 'Invalid JSON-RPC request', ErrorWrapper);
}
exports.assertIsJsonRpcRequest = assertIsJsonRpcRequest;
exports.PendingJsonRpcResponseStruct = (0, superstruct_1.object)({
    id: exports.JsonRpcIdStruct,
    jsonrpc: exports.JsonRpcVersionStruct,
    result: (0, superstruct_1.optional)((0, superstruct_1.unknown)()),
    error: (0, superstruct_1.optional)(exports.JsonRpcErrorStruct),
});
exports.JsonRpcSuccessStruct = (0, superstruct_1.object)({
    id: exports.JsonRpcIdStruct,
    jsonrpc: exports.JsonRpcVersionStruct,
    result: exports.JsonStruct,
});
exports.JsonRpcFailureStruct = (0, superstruct_1.object)({
    id: exports.JsonRpcIdStruct,
    jsonrpc: exports.JsonRpcVersionStruct,
    error: exports.JsonRpcErrorStruct,
});
exports.JsonRpcResponseStruct = (0, superstruct_1.union)([
    exports.JsonRpcSuccessStruct,
    exports.JsonRpcFailureStruct,
]);
/**
 * Type guard to check whether specified JSON-RPC response is a
 * {@link PendingJsonRpcResponse}.
 *
 * @param response - The JSON-RPC response to check.
 * @returns Whether the specified JSON-RPC response is pending.
 */
function isPendingJsonRpcResponse(response) {
    return (0, superstruct_1.is)(response, exports.PendingJsonRpcResponseStruct);
}
exports.isPendingJsonRpcResponse = isPendingJsonRpcResponse;
/**
 * Assert that the given value is a valid {@link PendingJsonRpcResponse} object.
 *
 * @param response - The JSON-RPC response to check.
 * @param ErrorWrapper - The error class to throw if the assertion fails.
 * Defaults to {@link AssertionError}.
 * @throws If the given value is not a valid {@link PendingJsonRpcResponse}
 * object.
 */
function assertIsPendingJsonRpcResponse(response, 
// eslint-disable-next-line @typescript-eslint/naming-convention
ErrorWrapper) {
    (0, assert_1.assertStruct)(response, exports.PendingJsonRpcResponseStruct, 'Invalid pending JSON-RPC response', ErrorWrapper);
}
exports.assertIsPendingJsonRpcResponse = assertIsPendingJsonRpcResponse;
/**
 * Type guard to check if a value is a {@link JsonRpcResponse}.
 *
 * @param response - The object to check.
 * @returns Whether the object is a JsonRpcResponse.
 */
function isJsonRpcResponse(response) {
    return (0, superstruct_1.is)(response, exports.JsonRpcResponseStruct);
}
exports.isJsonRpcResponse = isJsonRpcResponse;
/**
 * Assert that the given value is a valid {@link JsonRpcResponse} object.
 *
 * @param value - The value to check.
 * @param ErrorWrapper - The error class to throw if the assertion fails.
 * Defaults to {@link AssertionError}.
 * @throws If the given value is not a valid {@link JsonRpcResponse} object.
 */
function assertIsJsonRpcResponse(value, 
// eslint-disable-next-line @typescript-eslint/naming-convention
ErrorWrapper) {
    (0, assert_1.assertStruct)(value, exports.JsonRpcResponseStruct, 'Invalid JSON-RPC response', ErrorWrapper);
}
exports.assertIsJsonRpcResponse = assertIsJsonRpcResponse;
/**
 * Check if the given value is a valid {@link JsonRpcSuccess} object.
 *
 * @param value - The value to check.
 * @returns Whether the given value is a valid {@link JsonRpcSuccess} object.
 */
function isJsonRpcSuccess(value) {
    return (0, superstruct_1.is)(value, exports.JsonRpcSuccessStruct);
}
exports.isJsonRpcSuccess = isJsonRpcSuccess;
/**
 * Assert that the given value is a valid {@link JsonRpcSuccess} object.
 *
 * @param value - The value to check.
 * @param ErrorWrapper - The error class to throw if the assertion fails.
 * Defaults to {@link AssertionError}.
 * @throws If the given value is not a valid {@link JsonRpcSuccess} object.
 */
function assertIsJsonRpcSuccess(value, 
// eslint-disable-next-line @typescript-eslint/naming-convention
ErrorWrapper) {
    (0, assert_1.assertStruct)(value, exports.JsonRpcSuccessStruct, 'Invalid JSON-RPC success response', ErrorWrapper);
}
exports.assertIsJsonRpcSuccess = assertIsJsonRpcSuccess;
/**
 * Check if the given value is a valid {@link JsonRpcFailure} object.
 *
 * @param value - The value to check.
 * @returns Whether the given value is a valid {@link JsonRpcFailure} object.
 */
function isJsonRpcFailure(value) {
    return (0, superstruct_1.is)(value, exports.JsonRpcFailureStruct);
}
exports.isJsonRpcFailure = isJsonRpcFailure;
/**
 * Assert that the given value is a valid {@link JsonRpcFailure} object.
 *
 * @param value - The value to check.
 * @param ErrorWrapper - The error class to throw if the assertion fails.
 * Defaults to {@link AssertionError}.
 * @throws If the given value is not a valid {@link JsonRpcFailure} object.
 */
function assertIsJsonRpcFailure(value, 
// eslint-disable-next-line @typescript-eslint/naming-convention
ErrorWrapper) {
    (0, assert_1.assertStruct)(value, exports.JsonRpcFailureStruct, 'Invalid JSON-RPC failure response', ErrorWrapper);
}
exports.assertIsJsonRpcFailure = assertIsJsonRpcFailure;
/**
 * Check if the given value is a valid {@link JsonRpcError} object.
 *
 * @param value - The value to check.
 * @returns Whether the given value is a valid {@link JsonRpcError} object.
 */
function isJsonRpcError(value) {
    return (0, superstruct_1.is)(value, exports.JsonRpcErrorStruct);
}
exports.isJsonRpcError = isJsonRpcError;
/**
 * Assert that the given value is a valid {@link JsonRpcError} object.
 *
 * @param value - The value to check.
 * @param ErrorWrapper - The error class to throw if the assertion fails.
 * Defaults to {@link AssertionError}.
 * @throws If the given value is not a valid {@link JsonRpcError} object.
 */
function assertIsJsonRpcError(value, 
// eslint-disable-next-line @typescript-eslint/naming-convention
ErrorWrapper) {
    (0, assert_1.assertStruct)(value, exports.JsonRpcErrorStruct, 'Invalid JSON-RPC error', ErrorWrapper);
}
exports.assertIsJsonRpcError = assertIsJsonRpcError;
/**
 * Gets a function for validating JSON-RPC request / response `id` values.
 *
 * By manipulating the options of this factory, you can control the behavior
 * of the resulting validator for some edge cases. This is useful because e.g.
 * `null` should sometimes but not always be permitted.
 *
 * Note that the empty string (`''`) is always permitted by the JSON-RPC
 * specification, but that kind of sucks and you may want to forbid it in some
 * instances anyway.
 *
 * For more details, see the
 * [JSON-RPC Specification](https://www.jsonrpc.org/specification).
 *
 * @param options - An options object.
 * @param options.permitEmptyString - Whether the empty string (i.e. `''`)
 * should be treated as a valid ID. Default: `true`
 * @param options.permitFractions - Whether fractional numbers (e.g. `1.2`)
 * should be treated as valid IDs. Default: `false`
 * @param options.permitNull - Whether `null` should be treated as a valid ID.
 * Default: `true`
 * @returns The JSON-RPC ID validator function.
 */
function getJsonRpcIdValidator(options) {
    const { permitEmptyString, permitFractions, permitNull } = Object.assign({ permitEmptyString: true, permitFractions: false, permitNull: true }, options);
    /**
     * Type guard for {@link JsonRpcId}.
     *
     * @param id - The JSON-RPC ID value to check.
     * @returns Whether the given ID is valid per the options given to the
     * factory.
     */
    const isValidJsonRpcId = (id) => {
        return Boolean((typeof id === 'number' && (permitFractions || Number.isInteger(id))) ||
            (typeof id === 'string' && (permitEmptyString || id.length > 0)) ||
            (permitNull && id === null));
    };
    return isValidJsonRpcId;
}
exports.getJsonRpcIdValidator = getJsonRpcIdValidator;
/**
 * Checks whether a value is JSON serializable and counts the total number
 * of bytes needed to store the serialized version of the value.
 *
 * @param jsObject - Potential JSON serializable object.
 * @param skipSizingProcess - Skip JSON size calculation (default: false).
 * @returns Tuple [isValid, plainTextSizeInBytes] containing a boolean that signals whether
 * the value was serializable and a number of bytes that it will use when serialized to JSON.
 */
function validateJsonAndGetSize(jsObject, skipSizingProcess = false) {
    const seenObjects = new Set();
    /**
     * Checks whether a value is JSON serializable and counts the total number
     * of bytes needed to store the serialized version of the value.
     *
     * This function assumes the encoding of the JSON is done in UTF-8.
     *
     * @param value - Potential JSON serializable value.
     * @param skipSizing - Skip JSON size calculation (default: false).
     * @returns Tuple [isValid, plainTextSizeInBytes] containing a boolean that signals whether
     * the value was serializable and a number of bytes that it will use when serialized to JSON.
     */
    function getJsonSerializableInfo(value, skipSizing) {
        if (value === undefined) {
            return [false, 0];
        }
        else if (value === null) {
            // Return already specified constant size for null (special object)
            return [true, skipSizing ? 0 : misc_1.JsonSize.Null];
        }
        // Check and calculate sizes for basic (and some special) types
        const typeOfValue = typeof value;
        try {
            if (typeOfValue === 'function') {
                return [false, 0];
            }
            else if (typeOfValue === 'string' || value instanceof String) {
                return [
                    true,
                    skipSizing
                        ? 0
                        : (0, misc_1.calculateStringSize)(value) + misc_1.JsonSize.Quote * 2,
                ];
            }
            else if (typeOfValue === 'boolean' || value instanceof Boolean) {
                if (skipSizing) {
                    return [true, 0];
                }
                // eslint-disable-next-line eqeqeq
                return [true, value == true ? misc_1.JsonSize.True : misc_1.JsonSize.False];
            }
            else if (typeOfValue === 'number' || value instanceof Number) {
                if (skipSizing) {
                    return [true, 0];
                }
                return [true, (0, misc_1.calculateNumberSize)(value)];
            }
            else if (value instanceof Date) {
                if (skipSizing) {
                    return [true, 0];
                }
                return [
                    true,
                    // Note: Invalid dates will serialize to null
                    isNaN(value.getDate())
                        ? misc_1.JsonSize.Null
                        : misc_1.JsonSize.Date + misc_1.JsonSize.Quote * 2,
                ];
            }
        }
        catch (_) {
            return [false, 0];
        }
        // If object is not plain and cannot be serialized properly,
        // stop here and return false for serialization
        if (!(0, misc_1.isPlainObject)(value) && !Array.isArray(value)) {
            return [false, 0];
        }
        // Circular object detection (handling)
        // Check if the same object already exists
        if (seenObjects.has(value)) {
            return [false, 0];
        }
        // Add new object to the seen objects set
        // Only the plain objects should be added (Primitive types are skipped)
        seenObjects.add(value);
        // Continue object decomposition
        try {
            return [
                true,
                Object.entries(value).reduce((sum, [key, nestedValue], idx, arr) => {
                    // Recursively process next nested object or primitive type
                    // eslint-disable-next-line prefer-const
                    let [valid, size] = getJsonSerializableInfo(nestedValue, skipSizing);
                    if (!valid) {
                        throw new Error('JSON validation did not pass. Validation process stopped.');
                    }
                    // Circular object detection
                    // Once a child node is visited and processed remove it from the set.
                    // This will prevent false positives with the same adjacent objects.
                    seenObjects.delete(value);
                    if (skipSizing) {
                        return 0;
                    }
                    // Objects will have be serialized with "key": value,
                    // therefore we include the key in the calculation here
                    const keySize = Array.isArray(value)
                        ? 0
                        : key.length + misc_1.JsonSize.Comma + misc_1.JsonSize.Colon * 2;
                    const separator = idx < arr.length - 1 ? misc_1.JsonSize.Comma : 0;
                    return sum + keySize + size + separator;
                }, 
                // Starts at 2 because the serialized JSON string data (plain text)
                // will minimally contain {}/[]
                skipSizing ? 0 : misc_1.JsonSize.Wrapper * 2),
            ];
        }
        catch (_) {
            return [false, 0];
        }
    }
    return getJsonSerializableInfo(jsObject, skipSizingProcess);
}
exports.validateJsonAndGetSize = validateJsonAndGetSize;
//# sourceMappingURL=json.js.map