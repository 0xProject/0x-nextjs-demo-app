import { Headers } from 'headers-polyfill';
export interface RequestInit {
    method?: string;
    headers?: Record<string, string | string[]> | Headers;
    credentials?: RequestCredentials;
    body?: ArrayBuffer;
}
export declare class IsomorphicRequest {
    id: string;
    readonly url: URL;
    readonly method: string;
    readonly headers: Headers;
    readonly credentials: RequestCredentials;
    private readonly _body;
    private _bodyUsed;
    constructor(url: URL);
    constructor(url: URL, init: RequestInit);
    constructor(request: IsomorphicRequest);
    get bodyUsed(): boolean;
    text(): Promise<string>;
    json<T = any>(): Promise<T>;
    arrayBuffer(): Promise<ArrayBuffer>;
    clone(): IsomorphicRequest;
}
