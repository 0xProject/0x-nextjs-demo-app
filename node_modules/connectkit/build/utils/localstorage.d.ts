/**
 * LocalStorage helper functions to save and retrieve data on a per-app basis
 * e.g recently connected wallets, transactions, etc.
 */
export declare const save: (storageKey: string, data: any[]) => any;
export declare const get: (storageKey: string) => any;
export declare const add: (storageKey: string, item: any) => any;
export declare const remove: (storageKey: string, item: any) => any;
export declare const clear: (storageKey: string) => any;
