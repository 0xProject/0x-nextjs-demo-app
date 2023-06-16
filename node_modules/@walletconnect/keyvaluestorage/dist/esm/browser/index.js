import { safeJsonParse, safeJsonStringify } from "safe-json-utils";
import localStorage from "./lib/localStorage";
import { parseEntry } from "../shared";
export class KeyValueStorage {
    constructor() {
        this.localStorage = localStorage;
    }
    async getKeys() {
        return Object.keys(this.localStorage);
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(parseEntry);
    }
    async getItem(key) {
        const item = this.localStorage.getItem(key);
        if (item === null) {
            return undefined;
        }
        return safeJsonParse(item);
    }
    async setItem(key, value) {
        this.localStorage.setItem(key, safeJsonStringify(value));
    }
    async removeItem(key) {
        this.localStorage.removeItem(key);
    }
}
export default KeyValueStorage;
//# sourceMappingURL=index.js.map