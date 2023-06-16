import { EventEmitter } from "events";
import { toMiliseconds } from "@walletconnect/time";
import { IHeartBeat } from "./types";
import { HEARTBEAT_INTERVAL, HEARTBEAT_EVENTS } from "./constants";
export class HeartBeat extends IHeartBeat {
    constructor(opts) {
        super(opts);
        this.events = new EventEmitter();
        this.interval = HEARTBEAT_INTERVAL;
        this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || HEARTBEAT_INTERVAL;
    }
    static async init(opts) {
        const heartbeat = new HeartBeat(opts);
        await heartbeat.init();
        return heartbeat;
    }
    async init() {
        await this.initialize();
    }
    stop() {
        clearInterval(this.intervalRef);
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
    async initialize() {
        this.intervalRef = setInterval(() => this.pulse(), toMiliseconds(this.interval));
    }
    pulse() {
        this.events.emit(HEARTBEAT_EVENTS.pulse);
    }
}
//# sourceMappingURL=heartbeat.js.map