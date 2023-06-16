import type { HeadersObject, Headers } from 'headers-polyfill';
import type { InteractiveIsomorphicRequest } from './InteractiveIsomorphicRequest';
import type { IsomorphicRequest } from './IsomorphicRequest';
export declare const IS_PATCHED_MODULE: unique symbol;
export declare type RequestCredentials = 'omit' | 'include' | 'same-origin';
export interface IsomorphicResponse {
    status: number;
    statusText: string;
    headers: Headers;
    body?: string;
}
export interface MockedResponse extends Omit<Partial<IsomorphicResponse>, 'headers'> {
    headers?: HeadersObject;
}
export declare type HttpRequestEventMap = {
    request(request: InteractiveIsomorphicRequest): Promise<void> | void;
    response(request: IsomorphicRequest, response: IsomorphicResponse): Promise<void> | void;
};
