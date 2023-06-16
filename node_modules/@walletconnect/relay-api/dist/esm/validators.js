import { checkParams, methodEndsWith } from "./misc";
export function isSubscribeRequest(request) {
    return isSubscribeMethod(request.method) && isSubscribeParams(request.params);
}
export function isSubscribeMethod(method) {
    return methodEndsWith(method, "subscribe");
}
export function isSubscribeParams(params) {
    const required = ["topic"];
    const optional = [];
    return checkParams(params, required, optional);
}
export function isPublishRequest(request) {
    return isPublishMethod(request.method) && isPublishParams(request.params);
}
export function isPublishMethod(method) {
    return methodEndsWith(method, "publish");
}
export function isPublishParams(params) {
    const required = ["message", "topic", "ttl"];
    const optional = ["prompt", "tag"];
    return checkParams(params, required, optional);
}
export function isUnsubscribeRequest(request) {
    return (isUnsubscribeMethod(request.method) && isUnsubscribeParams(request.params));
}
export function isUnsubscribeMethod(method) {
    return methodEndsWith(method, "unsubscribe");
}
export function isUnsubscribeParams(params) {
    const required = ["id", "topic"];
    const optional = [];
    return checkParams(params, required, optional);
}
export function isSubscriptionRequest(request) {
    return (isSubscriptionMethod(request.method) && isSubscriptionParams(request.params));
}
export function isSubscriptionMethod(method) {
    return methodEndsWith(method, "subscription");
}
export function isSubscriptionParams(params) {
    const required = ["id", "data"];
    const optional = [];
    return checkParams(params, required, optional);
}
//# sourceMappingURL=validators.js.map