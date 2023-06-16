"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const legacy_utils_1 = require("@walletconnect/legacy-utils");
class EventManager {
    constructor() {
        this._eventEmitters = [];
    }
    subscribe(eventEmitter) {
        this._eventEmitters.push(eventEmitter);
    }
    unsubscribe(event) {
        this._eventEmitters = this._eventEmitters.filter(x => x.event !== event);
    }
    trigger(payload) {
        let eventEmitters = [];
        let event;
        if (legacy_utils_1.isJsonRpcRequest(payload)) {
            event = payload.method;
        }
        else if (legacy_utils_1.isJsonRpcResponseSuccess(payload) || legacy_utils_1.isJsonRpcResponseError(payload)) {
            event = `response:${payload.id}`;
        }
        else if (legacy_utils_1.isInternalEvent(payload)) {
            event = payload.event;
        }
        else {
            event = "";
        }
        if (event) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
        }
        if ((!eventEmitters || !eventEmitters.length) &&
            !legacy_utils_1.isReservedEvent(event) &&
            !legacy_utils_1.isInternalEvent(event)) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === "call_request");
        }
        eventEmitters.forEach((eventEmitter) => {
            if (legacy_utils_1.isJsonRpcResponseError(payload)) {
                const error = new Error(payload.error.message);
                eventEmitter.callback(error, null);
            }
            else {
                eventEmitter.callback(null, payload);
            }
        });
    }
}
exports.default = EventManager;
//# sourceMappingURL=events.js.map