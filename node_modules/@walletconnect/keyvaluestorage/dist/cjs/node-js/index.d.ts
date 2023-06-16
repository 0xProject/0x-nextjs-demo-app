import { IKeyValueStorage, KeyValueStorageOptions } from "../shared";
export declare class KeyValueStorage implements IKeyValueStorage {
    private db;
    private database;
    private initialized;
    private inMemory;
    constructor(opts?: KeyValueStorageOptions);
    databaseInitialize: (db: any) => void;
    getKeys(): Promise<string[]>;
    getEntries<T = any>(): Promise<[string, T][]>;
    getItem<T = any>(key: string): Promise<T | undefined>;
    setItem<T = any>(key: string, value: any): Promise<void>;
    removeItem(key: string): Promise<void>;
    private initilization;
    private persist;
}
export default KeyValueStorage;
//# sourceMappingURL=index.d.ts.map