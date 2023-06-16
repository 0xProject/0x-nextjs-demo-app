type Options = {
    enabled?: boolean;
    name?: string;
};
export declare function devtools<T extends object>(proxyObject: T, options?: Options): (() => void) | undefined;
/**
 * @deprecated Please use { name } option
 */
export declare function devtools<T extends object>(proxyObject: T, name?: string): (() => void) | undefined;
export {};
declare type Awaited<T> = T extends Promise<infer V> ? V : T;