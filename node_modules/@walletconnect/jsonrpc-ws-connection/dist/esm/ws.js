import { EventEmitter } from "events";
import { safeJsonParse, safeJsonStringify } from "@walletconnect/safe-json";
import { formatJsonRpcError, isReactNative, isWsUrl, isLocalhostUrl, parseConnectionError, } from "@walletconnect/jsonrpc-utils";
const EVENT_EMITTER_MAX_LISTENERS_DEFAULT = 10;
const resolveWebSocketImplementation = () => {
    if (typeof global !== "undefined" && typeof global.WebSocket !== "undefined") {
        return global.WebSocket;
    }
    if (typeof window !== "undefined" && typeof window.WebSocket !== "undefined") {
        return window.WebSocket;
    }
    return require("ws");
};
const isBrowser = () => typeof window !== "undefined";
const WS = resolveWebSocketImplementation();
export class WsConnection {
    constructor(url) {
        this.url = url;
        this.events = new EventEmitter();
        this.registering = false;
        if (!isWsUrl(url)) {
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
        }
        this.url = url;
    }
    get connected() {
        return typeof this.socket !== "undefined";
    }
    get connecting() {
        return this.registering;
    }
    on(event, listener) {
        this.events.on(event, listener);
    }
    once(event, listener) {
        this.events.once(event, listener);
    }
    off(event, listener) {
        this.events.off(event, listener);
    }
    removeListener(event, listener) {
        this.events.removeListener(event, listener);
    }
    async open(url = this.url) {
        await this.register(url);
    }
    async close() {
        return new Promise((resolve, reject) => {
            if (typeof this.socket === "undefined") {
                reject(new Error("Connection already closed"));
                return;
            }
            this.socket.onclose = event => {
                this.onClose(event);
                resolve();
            };
            this.socket.close();
        });
    }
    async send(payload, context) {
        if (typeof this.socket === "undefined") {
            this.socket = await this.register();
        }
        try {
            this.socket.send(safeJsonStringify(payload));
        }
        catch (e) {
            this.onError(payload.id, e);
        }
    }
    register(url = this.url) {
        if (!isWsUrl(url)) {
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
        }
        if (this.registering) {
            const currentMaxListeners = this.events.getMaxListeners();
            if (this.events.listenerCount("register_error") >= currentMaxListeners ||
                this.events.listenerCount("open") >= currentMaxListeners) {
                this.events.setMaxListeners(currentMaxListeners + 1);
            }
            return new Promise((resolve, reject) => {
                this.events.once("register_error", error => {
                    this.resetMaxListeners();
                    reject(error);
                });
                this.events.once("open", () => {
                    this.resetMaxListeners();
                    if (typeof this.socket === "undefined") {
                        return reject(new Error("WebSocket connection is missing or invalid"));
                    }
                    resolve(this.socket);
                });
            });
        }
        this.url = url;
        this.registering = true;
        return new Promise((resolve, reject) => {
            const opts = !isReactNative() ? { rejectUnauthorized: !isLocalhostUrl(url) } : undefined;
            const socket = new WS(url, [], opts);
            if (isBrowser()) {
                socket.onerror = (event) => {
                    const errorEvent = event;
                    reject(this.emitError(errorEvent.error));
                };
            }
            else {
                socket.on("error", (errorEvent) => {
                    reject(this.emitError(errorEvent));
                });
            }
            socket.onopen = () => {
                this.onOpen(socket);
                resolve(socket);
            };
        });
    }
    onOpen(socket) {
        socket.onmessage = (event) => this.onPayload(event);
        socket.onclose = event => this.onClose(event);
        this.socket = socket;
        this.registering = false;
        this.events.emit("open");
    }
    onClose(event) {
        this.socket = undefined;
        this.registering = false;
        this.events.emit("close", event);
    }
    onPayload(e) {
        if (typeof e.data === "undefined")
            return;
        const payload = typeof e.data === "string" ? safeJsonParse(e.data) : e.data;
        this.events.emit("payload", payload);
    }
    onError(id, e) {
        const error = this.parseError(e);
        const message = error.message || error.toString();
        const payload = formatJsonRpcError(id, message);
        this.events.emit("payload", payload);
    }
    parseError(e, url = this.url) {
        return parseConnectionError(e, url, "WS");
    }
    resetMaxListeners() {
        if (this.events.getMaxListeners() > EVENT_EMITTER_MAX_LISTENERS_DEFAULT) {
            this.events.setMaxListeners(EVENT_EMITTER_MAX_LISTENERS_DEFAULT);
        }
    }
    emitError(errorEvent) {
        const error = this.parseError(new Error((errorEvent === null || errorEvent === void 0 ? void 0 : errorEvent.message) || `WebSocket connection failed for URL: ${this.url}`));
        this.events.emit("register_error", error);
        return error;
    }
}
export default WsConnection;
//# sourceMappingURL=ws.js.map