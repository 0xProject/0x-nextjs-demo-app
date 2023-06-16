"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSubscriptionParams = exports.isSubscriptionMethod = exports.isSubscriptionRequest = exports.isUnsubscribeParams = exports.isUnsubscribeMethod = exports.isUnsubscribeRequest = exports.isPublishParams = exports.isPublishMethod = exports.isPublishRequest = exports.isSubscribeParams = exports.isSubscribeMethod = exports.isSubscribeRequest = void 0;
const misc_1 = require("./misc");
function isSubscribeRequest(request) {
    return isSubscribeMethod(request.method) && isSubscribeParams(request.params);
}
exports.isSubscribeRequest = isSubscribeRequest;
function isSubscribeMethod(method) {
    return misc_1.methodEndsWith(method, "subscribe");
}
exports.isSubscribeMethod = isSubscribeMethod;
function isSubscribeParams(params) {
    const required = ["topic"];
    const optional = [];
    return misc_1.checkParams(params, required, optional);
}
exports.isSubscribeParams = isSubscribeParams;
function isPublishRequest(request) {
    return isPublishMethod(request.method) && isPublishParams(request.params);
}
exports.isPublishRequest = isPublishRequest;
function isPublishMethod(method) {
    return misc_1.methodEndsWith(method, "publish");
}
exports.isPublishMethod = isPublishMethod;
function isPublishParams(params) {
    const required = ["message", "topic", "ttl"];
    const optional = ["prompt", "tag"];
    return misc_1.checkParams(params, required, optional);
}
exports.isPublishParams = isPublishParams;
function isUnsubscribeRequest(request) {
    return (isUnsubscribeMethod(request.method) && isUnsubscribeParams(request.params));
}
exports.isUnsubscribeRequest = isUnsubscribeRequest;
function isUnsubscribeMethod(method) {
    return misc_1.methodEndsWith(method, "unsubscribe");
}
exports.isUnsubscribeMethod = isUnsubscribeMethod;
function isUnsubscribeParams(params) {
    const required = ["id", "topic"];
    const optional = [];
    return misc_1.checkParams(params, required, optional);
}
exports.isUnsubscribeParams = isUnsubscribeParams;
function isSubscriptionRequest(request) {
    return (isSubscriptionMethod(request.method) && isSubscriptionParams(request.params));
}
exports.isSubscriptionRequest = isSubscriptionRequest;
function isSubscriptionMethod(method) {
    return misc_1.methodEndsWith(method, "subscription");
}
exports.isSubscriptionMethod = isSubscriptionMethod;
function isSubscriptionParams(params) {
    const required = ["id", "data"];
    const optional = [];
    return misc_1.checkParams(params, required, optional);
}
exports.isSubscriptionParams = isSubscriptionParams;
//# sourceMappingURL=validators.js.map