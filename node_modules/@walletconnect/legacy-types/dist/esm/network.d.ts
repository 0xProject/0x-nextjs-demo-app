export declare type NetworkEvent = "online" | "offline";
export interface INetworkMonitor {
    on: (event: NetworkEvent, callback: () => void) => void;
}
export interface INetworkEventEmitter {
    event: NetworkEvent;
    callback: () => void;
}
//# sourceMappingURL=network.d.ts.map