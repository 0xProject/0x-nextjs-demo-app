"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSubscriptionRequest = exports.parseUnsubscribeRequest = exports.parsePublishRequest = exports.parseSubscribeRequest = void 0;
const misc_1 = require("./misc");
const validators_1 = require("./validators");
function parseSubscribeRequest(request) {
    if (!validators_1.isSubscribeMethod(request.method)) {
        throw new Error("JSON-RPC Request has invalid subscribe method");
    }
    if (!validators_1.isSubscribeParams(request.params)) {
        throw new Error("JSON-RPC Request has invalid subscribe params");
    }
    const params = request.params;
    misc_1.assertType(params, "topic");
    return params;
}
exports.parseSubscribeRequest = parseSubscribeRequest;
function parsePublishRequest(request) {
    if (!validators_1.isPublishMethod(request.method)) {
        throw new Error("JSON-RPC Request has invalid publish method");
    }
    if (!validators_1.isPublishParams(request.params)) {
        throw new Error("JSON-RPC Request has invalid publish params");
    }
    const params = request.params;
    misc_1.assertType(params, "topic");
    misc_1.assertType(params, "message");
    misc_1.assertType(params, "ttl", "number");
    return params;
}
exports.parsePublishRequest = parsePublishRequest;
function parseUnsubscribeRequest(request) {
    if (!validators_1.isUnsubscribeMethod(request.method)) {
        throw new Error("JSON-RPC Request has invalid unsubscribe method");
    }
    if (!validators_1.isUnsubscribeParams(request.params)) {
        throw new Error("JSON-RPC Request has invalid unsubscribe params");
    }
    const params = request.params;
    misc_1.assertType(params, "id");
    return params;
}
exports.parseUnsubscribeRequest = parseUnsubscribeRequest;
function parseSubscriptionRequest(request) {
    if (!validators_1.isSubscriptionMethod(request.method)) {
        throw new Error("JSON-RPC Request has invalid subscription method");
    }
    if (!validators_1.isSubscriptionParams(request.params)) {
        throw new Error("JSON-RPC Request has invalid subscription params");
    }
    const params = request.params;
    misc_1.assertType(params, "id");
    misc_1.assertType(params, "data");
    return params;
}
exports.parseSubscriptionRequest = parseSubscriptionRequest;
//# sourceMappingURL=parsers.js.map