import { IStore } from "../core";
import { JsonRpcTypes } from "./jsonrpc";
export declare namespace PendingRequestTypes {
    interface Struct {
        topic: string;
        id: number;
        params: JsonRpcTypes.RequestParams["wc_sessionRequest"];
    }
}
export declare type IPendingRequest = IStore<number, PendingRequestTypes.Struct>;
//# sourceMappingURL=pendingRequest.d.ts.map