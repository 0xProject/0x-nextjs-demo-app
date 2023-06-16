"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueStorage = void 0;
const tslib_1 = require("tslib");
const async_storage_1 = tslib_1.__importDefault(require("@react-native-async-storage/async-storage"));
const safe_json_utils_1 = require("safe-json-utils");
const shared_1 = require("../shared");
class KeyValueStorage {
    constructor() {
        this.asyncStorage = async_storage_1.default;
    }
    getKeys() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.asyncStorage.getAllKeys();
        });
    }
    getEntries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const keys = yield this.getKeys();
            const entries = yield this.asyncStorage.multiGet(keys);
            return entries.map(shared_1.parseEntry);
        });
    }
    getItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const item = yield this.asyncStorage.getItem(key);
            if (typeof item === "undefined" || item === null) {
                return undefined;
            }
            return safe_json_utils_1.safeJsonParse(item);
        });
    }
    setItem(key, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.asyncStorage.setItem(key, safe_json_utils_1.safeJsonStringify(value));
        });
    }
    removeItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.asyncStorage.removeItem(key);
        });
    }
}
exports.KeyValueStorage = KeyValueStorage;
exports.default = KeyValueStorage;
//# sourceMappingURL=index.js.map