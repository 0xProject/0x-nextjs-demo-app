import SafeEventEmitter from '@metamask/safe-event-emitter';
import { JsonRpcRequest, JsonRpcResponse } from 'json-rpc-engine';
export interface Provider extends SafeEventEmitter {
    sendAsync: <T, U>(req: JsonRpcRequest<T>, cb: (err: unknown, response: JsonRpcResponse<U>) => void) => void;
}
