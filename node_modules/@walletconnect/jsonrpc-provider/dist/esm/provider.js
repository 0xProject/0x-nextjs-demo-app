import { EventEmitter } from "events";
import { IJsonRpcProvider, isJsonRpcResponse, formatJsonRpcRequest, isJsonRpcError, getBigIntRpcId, } from "@walletconnect/jsonrpc-utils";
export class JsonRpcProvider extends IJsonRpcProvider {
    constructor(connection) {
        super(connection);
        this.events = new EventEmitter();
        this.hasRegisteredEventListeners = false;
        this.connection = this.setConnection(connection);
        if (this.connection.connected) {
            this.registerEventListeners();
        }
    }
    async connect(connection = this.connection) {
        await this.open(connection);
    }
    async disconnect() {
        await this.close();
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
    async request(request, context) {
        return this.requestStrict(formatJsonRpcRequest(request.method, request.params || [], request.id || getBigIntRpcId().toString()), context);
    }
    async requestStrict(request, context) {
        return new Promise(async (resolve, reject) => {
            if (!this.connection.connected) {
                try {
                    await this.open();
                }
                catch (e) {
                    reject(e);
                }
            }
            this.events.on(`${request.id}`, response => {
                if (isJsonRpcError(response)) {
                    reject(response.error);
                }
                else {
                    resolve(response.result);
                }
            });
            try {
                await this.connection.send(request, context);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    setConnection(connection = this.connection) {
        return connection;
    }
    onPayload(payload) {
        this.events.emit("payload", payload);
        if (isJsonRpcResponse(payload)) {
            this.events.emit(`${payload.id}`, payload);
        }
        else {
            this.events.emit("message", {
                type: payload.method,
                data: payload.params,
            });
        }
    }
    onClose(event) {
        if (event && event.code === 3000) {
            this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${event.code} ${event.reason ? `(${event.reason})` : ""}`));
        }
        this.events.emit("disconnect");
    }
    async open(connection = this.connection) {
        if (this.connection === connection && this.connection.connected)
            return;
        if (this.connection.connected)
            this.close();
        if (typeof connection === "string") {
            await this.connection.open(connection);
            connection = this.connection;
        }
        this.connection = this.setConnection(connection);
        await this.connection.open();
        this.registerEventListeners();
        this.events.emit("connect");
    }
    async close() {
        await this.connection.close();
    }
    registerEventListeners() {
        if (this.hasRegisteredEventListeners)
            return;
        this.connection.on("payload", (payload) => this.onPayload(payload));
        this.connection.on("close", (event) => this.onClose(event));
        this.connection.on("error", (error) => this.events.emit("error", error));
        this.connection.on("register_error", (error) => this.onClose());
        this.hasRegisteredEventListeners = true;
    }
}
export default JsonRpcProvider;
//# sourceMappingURL=provider.js.map