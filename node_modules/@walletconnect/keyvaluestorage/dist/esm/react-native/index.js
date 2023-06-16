import AsyncStorage from "@react-native-async-storage/async-storage";
import { safeJsonParse, safeJsonStringify } from "safe-json-utils";
import { parseEntry } from "../shared";
export class KeyValueStorage {
    constructor() {
        this.asyncStorage = AsyncStorage;
    }
    async getKeys() {
        return this.asyncStorage.getAllKeys();
    }
    async getEntries() {
        const keys = await this.getKeys();
        const entries = await this.asyncStorage.multiGet(keys);
        return entries.map(parseEntry);
    }
    async getItem(key) {
        const item = await this.asyncStorage.getItem(key);
        if (typeof item === "undefined" || item === null) {
            return undefined;
        }
        return safeJsonParse(item);
    }
    async setItem(key, value) {
        await this.asyncStorage.setItem(key, safeJsonStringify(value));
    }
    async removeItem(key) {
        await this.asyncStorage.removeItem(key);
    }
}
export default KeyValueStorage;
//# sourceMappingURL=index.js.map