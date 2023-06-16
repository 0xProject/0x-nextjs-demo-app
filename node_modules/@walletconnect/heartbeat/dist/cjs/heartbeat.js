"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartBeat = void 0;
const tslib_1 = require("tslib");
const events_1 = require("events");
const time_1 = require("@walletconnect/time");
const types_1 = require("./types");
const constants_1 = require("./constants");
class HeartBeat extends types_1.IHeartBeat {
    constructor(opts) {
        super(opts);
        this.events = new events_1.EventEmitter();
        this.interval = constants_1.HEARTBEAT_INTERVAL;
        this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || constants_1.HEARTBEAT_INTERVAL;
    }
    static init(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const heartbeat = new HeartBeat(opts);
            yield heartbeat.init();
            return heartbeat;
        });
    }
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
        });
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
    initialize() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(() => this.pulse(), time_1.toMiliseconds(this.interval));
        });
    }
    pulse() {
        this.events.emit(constants_1.HEARTBEAT_EVENTS.pulse);
    }
}
exports.HeartBeat = HeartBeat;
//# sourceMappingURL=heartbeat.js.map