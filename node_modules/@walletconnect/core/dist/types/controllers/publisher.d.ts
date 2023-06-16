/// <reference types="node" />
import { Logger } from "@walletconnect/logger";
import { IPublisher, IRelayer, PublisherTypes } from "@walletconnect/types";
import { EventEmitter } from "events";
export declare class Publisher extends IPublisher {
    relayer: IRelayer;
    logger: Logger;
    events: EventEmitter;
    name: string;
    queue: Map<string, PublisherTypes.Params>;
    private publishTimeout;
    constructor(relayer: IRelayer, logger: Logger);
    get context(): string;
    publish: IPublisher["publish"];
    on: IPublisher["on"];
    once: IPublisher["once"];
    off: IPublisher["off"];
    removeListener: IPublisher["removeListener"];
    private rpcPublish;
    private onPublish;
    private checkQueue;
    private registerEventListeners;
}
//# sourceMappingURL=publisher.d.ts.map