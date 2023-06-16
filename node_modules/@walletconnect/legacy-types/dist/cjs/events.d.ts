export declare abstract class IEvents {
    abstract on(event: string, listener: any): void;
    abstract once(event: string, listener: any): void;
    abstract off(event: string, listener: any): void;
    abstract removeListener(event: string, listener: any): void;
}
export interface IInternalEvent {
    event: string;
    params: any;
}
export interface IEventEmitter {
    event: string;
    callback: (error: Error | null, request: any | null) => void;
}
export declare type IErrorCallback = (err: Error | null, data?: any) => void;
export declare type ICallback = () => void;
export interface IError extends Error {
    res?: any;
    code?: any;
}
//# sourceMappingURL=events.d.ts.map