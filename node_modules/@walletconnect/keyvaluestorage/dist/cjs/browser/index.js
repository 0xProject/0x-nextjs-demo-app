"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueStorage = void 0;
const tslib_1 = require("tslib");
const safe_json_utils_1 = require("safe-json-utils");
const localStorage_1 = tslib_1.__importDefault(require("./lib/localStorage"));
const shared_1 = require("../shared");
class KeyValueStorage {
    constructor() {
        this.localStorage = localStorage_1.default;
    }
    getKeys() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return Object.keys(this.localStorage);
        });
    }
    getEntries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return Object.entries(this.localStorage).map(shared_1.parseEntry);
        });
    }
    getItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const item = this.localStorage.getItem(key);
            if (item === null) {
                return undefined;
            }
            return safe_json_utils_1.safeJsonParse(item);
        });
    }
    setItem(key, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.setItem(key, safe_json_utils_1.safeJsonStringify(value));
        });
    }
    removeItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.removeItem(key);
        });
    }
}
exports.KeyValueStorage = KeyValueStorage;
exports.default = KeyValueStorage;
//# sourceMappingURL=index.js.map