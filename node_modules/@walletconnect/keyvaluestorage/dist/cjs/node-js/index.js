"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueStorage = void 0;
const tslib_1 = require("tslib");
const safe_json_utils_1 = require("safe-json-utils");
const db_1 = tslib_1.__importDefault(require("./db"));
const DB_NAME = "walletconnect.db";
class KeyValueStorage {
    constructor(opts) {
        this.initialized = false;
        this.inMemory = false;
        this.databaseInitialize = (db) => {
            if (db) {
                this.db = db;
            }
            this.database = this.db.getCollection("entries");
            if (this.database === null) {
                this.database = this.db.addCollection("entries", { unique: ["id"] });
            }
            this.initialized = true;
        };
        if ((opts === null || opts === void 0 ? void 0 : opts.database) === ":memory:") {
            this.inMemory = true;
        }
        const instance = db_1.default.create({
            db: (opts === null || opts === void 0 ? void 0 : opts.database) || (opts === null || opts === void 0 ? void 0 : opts.table) || DB_NAME,
            callback: this.databaseInitialize,
        });
        this.db = instance.database;
        this.databaseInitialize(this.db);
    }
    getKeys() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.initilization();
            const keys = (yield this.database.find()).map((item) => item.id);
            return keys;
        });
    }
    getEntries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.initilization();
            const entries = (yield this.database.find()).map((item) => [item.id, safe_json_utils_1.safeJsonParse(item.value)]);
            return entries;
        });
    }
    getItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.initilization();
            const item = this.database.findOne({ id: { $eq: key } });
            if (item === null) {
                return undefined;
            }
            return safe_json_utils_1.safeJsonParse(item.value);
        });
    }
    setItem(key, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.initilization();
            const item = this.database.findOne({ id: { $eq: key } });
            if (item) {
                item.value = safe_json_utils_1.safeJsonStringify(value);
                this.database.update(item);
            }
            else {
                this.database.insert({ id: key, value: safe_json_utils_1.safeJsonStringify(value) });
            }
            yield this.persist();
        });
    }
    removeItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.initilization();
            const item = this.database.findOne({ id: { $eq: key } });
            yield this.database.remove(item);
            yield this.persist();
        });
    }
    initilization() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.initialized) {
                return;
            }
            yield new Promise((resolve) => {
                const interval = setInterval(() => {
                    if (this.initialized) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 20);
            });
        });
    }
    persist() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.inMemory)
                return;
            this.db.saveDatabase();
        });
    }
}
exports.KeyValueStorage = KeyValueStorage;
exports.default = KeyValueStorage;
//# sourceMappingURL=index.js.map