import { safeJsonParse, safeJsonStringify } from "safe-json-utils";
import Db from "./db";
const DB_NAME = "walletconnect.db";
export class KeyValueStorage {
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
        const instance = Db.create({
            db: (opts === null || opts === void 0 ? void 0 : opts.database) || (opts === null || opts === void 0 ? void 0 : opts.table) || DB_NAME,
            callback: this.databaseInitialize,
        });
        this.db = instance.database;
        this.databaseInitialize(this.db);
    }
    async getKeys() {
        await this.initilization();
        const keys = (await this.database.find()).map((item) => item.id);
        return keys;
    }
    async getEntries() {
        await this.initilization();
        const entries = (await this.database.find()).map((item) => [item.id, safeJsonParse(item.value)]);
        return entries;
    }
    async getItem(key) {
        await this.initilization();
        const item = this.database.findOne({ id: { $eq: key } });
        if (item === null) {
            return undefined;
        }
        return safeJsonParse(item.value);
    }
    async setItem(key, value) {
        await this.initilization();
        const item = this.database.findOne({ id: { $eq: key } });
        if (item) {
            item.value = safeJsonStringify(value);
            this.database.update(item);
        }
        else {
            this.database.insert({ id: key, value: safeJsonStringify(value) });
        }
        await this.persist();
    }
    async removeItem(key) {
        await this.initilization();
        const item = this.database.findOne({ id: { $eq: key } });
        await this.database.remove(item);
        await this.persist();
    }
    async initilization() {
        if (this.initialized) {
            return;
        }
        await new Promise((resolve) => {
            const interval = setInterval(() => {
                if (this.initialized) {
                    clearInterval(interval);
                    resolve();
                }
            }, 20);
        });
    }
    async persist() {
        if (this.inMemory)
            return;
        this.db.saveDatabase();
    }
}
export default KeyValueStorage;
//# sourceMappingURL=index.js.map