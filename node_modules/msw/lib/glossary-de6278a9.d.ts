import { Emitter, EventMap } from 'strict-event-emitter';
import { PartialDeep } from 'type-fest';
import { RequestInit as RequestInit$1, IsomorphicRequest, IsomorphicResponse } from '@mswjs/interceptors';
import { FlatHeadersObject, Headers } from 'headers-polyfill';

type HeadersObject<KeyType extends string = string> = Record<KeyType, string | string[]>;
/**
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
 */
type ForbiddenHeaderNames = 'cookie' | 'cookie2' | 'set-cookie' | 'set-cookie2';
type ForbiddenHeaderError<HeaderName extends string> = `SafeResponseHeader: the '${HeaderName}' header cannot be set on the response. Please use the 'ctx.cookie()' function instead.`;
/**
 * Sets one or multiple response headers.
 * @example
 * ctx.set('Content-Type', 'text/plain')
 * ctx.set({
 *   'Accept': 'application/javascript',
 *   'Content-Type': "text/plain"
 * })
 * @see {@link https://mswjs.io/docs/api/context/set `ctx.set()`}
 */
declare function set<N extends string | HeadersObject>(...args: N extends string ? Lowercase<N> extends ForbiddenHeaderNames ? [ForbiddenHeaderError<N>] : [N, string] : N extends HeadersObject<infer CookieName> ? Lowercase<CookieName> extends ForbiddenHeaderNames ? [ForbiddenHeaderError<CookieName>] : [N] : [N]): ResponseTransformer;

type DelayMode = 'real' | 'infinite';
/**
 * Delays the response by the given duration (ms).
 * @example
 * res(ctx.delay(1200)) // delay response by 1200ms
 * res(ctx.delay()) // emulate realistic server response time
 * res(ctx.delay('infinite')) // delay response infinitely
 * @see {@link https://mswjs.io/docs/api/context/delay `ctx.delay()`}
 */
declare const delay: (durationOrMode?: DelayMode | number) => ResponseTransformer;

type RequestCache = 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';
type RequestRedirect = 'follow' | 'error' | 'manual';
type RequestDestination = '' | 'audio' | 'audioworklet' | 'document' | 'embed' | 'font' | 'frame' | 'iframe' | 'image' | 'manifest' | 'object' | 'paintworklet' | 'report' | 'script' | 'sharedworker' | 'style' | 'track' | 'video' | 'xslt' | 'worker';
type RequestPriority = 'high' | 'low' | 'auto';
type RequestReferrerPolicy = '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
interface MockedRequestInit extends RequestInit$1 {
    id?: string;
    cache?: RequestCache;
    redirect?: RequestRedirect;
    integrity?: string;
    keepalive?: boolean;
    mode?: RequestMode;
    priority?: RequestPriority;
    destination?: RequestDestination;
    referrer?: string;
    referrerPolicy?: RequestReferrerPolicy;
    cookies?: Record<string, string>;
}
declare class MockedRequest<RequestBody extends DefaultBodyType = DefaultBodyType> extends IsomorphicRequest {
    readonly cache: RequestCache;
    readonly cookies: Record<string, string>;
    readonly destination: RequestDestination;
    readonly integrity: string;
    readonly keepalive: boolean;
    readonly mode: RequestMode;
    readonly priority: RequestPriority;
    readonly redirect: RequestRedirect;
    readonly referrer: string;
    readonly referrerPolicy: RequestReferrerPolicy;
    constructor(url: URL, init?: MockedRequestInit);
    /**
     * Get parsed request body. The type is inferred from the content type.
     *
     * @deprecated - Use `req.text()`, `req.json()` or `req.arrayBuffer()`
     * to read the request body as a plain text, JSON, or ArrayBuffer.
     */
    get body(): RequestBody;
    /**
     * Bypass the intercepted request.
     * This will make a call to the actual endpoint requested.
     */
    passthrough(): MockedResponse<null>;
    private getCookies;
}

/**
 * Performs a bypassed request inside a request handler.
 * @example
 * const originalResponse = await ctx.fetch(req)
 * @see {@link https://mswjs.io/docs/api/context/fetch `ctx.fetch()`}
 */
declare const fetch: (input: string | MockedRequest, requestInit?: RequestInit) => Promise<Response>;

interface ResponseLookupResult {
    handler?: RequestHandler;
    publicRequest?: any;
    parsedRequest?: any;
    response?: MockedResponse;
}
interface ResponseResolutionContext {
    baseUrl?: string;
}

interface UnhandledRequestPrint {
    warning(): void;
    error(): void;
}
type UnhandledRequestCallback = (request: MockedRequest, print: UnhandledRequestPrint) => void;
type UnhandledRequestStrategy = 'bypass' | 'warn' | 'error' | UnhandledRequestCallback;

interface SharedOptions {
    /**
     * Specifies how to react to a request that has no corresponding
     * request handler. Warns on unhandled requests by default.
     *
     * @example worker.start({ onUnhandledRequest: 'bypass' })
     * @example worker.start({ onUnhandledRequest: 'warn' })
     * @example server.listen({ onUnhandledRequest: 'error' })
     */
    onUnhandledRequest?: UnhandledRequestStrategy;
}
interface LifeCycleEventsMap<ResponseType> {
    'request:start': [MockedRequest];
    'request:match': [MockedRequest];
    'request:unhandled': [MockedRequest];
    'request:end': [MockedRequest];
    'response:mocked': [response: ResponseType, requestId: string];
    'response:bypass': [response: ResponseType, requestId: string];
    unhandledException: [error: Error, request: MockedRequest];
    [key: string]: Array<unknown>;
}
type LifeCycleEventEmitter<ResponseType extends Record<string | symbol, any>> = Pick<Emitter<ResponseType>, 'on' | 'removeListener' | 'removeAllListeners'>;

type WorkerLifecycleEventsMap = LifeCycleEventsMap<Response>;
type FindWorker = (scriptUrl: string, mockServiceWorkerUrl: string) => boolean;
interface StartOptions extends SharedOptions {
    /**
     * Service Worker registration options.
     */
    serviceWorker?: {
        /**
         * Custom url to the worker script.
         * @default "/mockServiceWorker.js"
         */
        url?: string;
        options?: RegistrationOptions;
    };
    /**
     * Disables the logging of captured requests
     * into browser's console.
     * @default false
     */
    quiet?: boolean;
    /**
     * Defers any network requests until the Service Worker
     * instance is activated.
     * @default true
     */
    waitUntilReady?: boolean;
    /**
     * A custom lookup function to find a Mock Service Worker in the list
     * of all registered Service Workers on the page.
     */
    findWorker?: FindWorker;
}
interface SerializedResponse<BodyType extends DefaultBodyType = any> {
    status: number;
    statusText: string;
    headers: FlatHeadersObject;
    body: BodyType;
    delay?: number;
}
type StartReturnType = Promise<ServiceWorkerRegistration | undefined>;
type StopHandler = () => void;
interface SetupWorker {
    /**
     * Registers and activates the mock Service Worker.
     * @see {@link https://mswjs.io/docs/api/setup-worker/start `worker.start()`}
     */
    start: (options?: StartOptions) => StartReturnType;
    /**
     * Stops requests interception for the current client.
     * @see {@link https://mswjs.io/docs/api/setup-worker/stop `worker.stop()`}
     */
    stop: StopHandler;
    /**
     * Prepends given request handlers to the list of existing handlers.
     * @param {RequestHandler[]} handlers List of runtime request handlers.
     * @see {@link https://mswjs.io/docs/api/setup-worker/use `worker.use()`}
     */
    use: (...handlers: RequestHandler[]) => void;
    /**
     * Marks all request handlers that respond using `res.once()` as unused.
     * @see {@link https://mswjs.io/docs/api/setup-worker/restore-handlers `worker.restoreHandlers()`}
     */
    restoreHandlers: () => void;
    /**
     * Resets request handlers to the initial list given to the `setupWorker` call, or to the explicit next request handlers list, if given.
     * @param {RequestHandler[]} nextHandlers List of the new initial request handlers.
     * @see {@link https://mswjs.io/docs/api/setup-worker/reset-handlers `worker.resetHandlers()`}
     */
    resetHandlers: (...nextHandlers: RequestHandler[]) => void;
    /**
     * Returns a readonly list of currently active request handlers.
     * @see {@link https://mswjs.io/docs/api/setup-worker/list-handlers `worker.listHandlers()`}
     */
    listHandlers(): ReadonlyArray<RequestHandler<RequestHandlerDefaultInfo, MockedRequest<DefaultBodyType>, any, MockedRequest<DefaultBodyType>>>;
    /**
     * Lists all active request handlers.
     * @see {@link https://mswjs.io/docs/api/setup-worker/print-handlers `worker.printHandlers()`}
     */
    printHandlers: () => void;
    events: LifeCycleEventEmitter<WorkerLifecycleEventsMap>;
}

type DefaultContext = {
    status: typeof status;
    set: typeof set;
    delay: typeof delay;
    fetch: typeof fetch;
};
declare const defaultContext: DefaultContext;
type DefaultRequestMultipartBody = Record<string, string | File | (string | File)[]>;
type DefaultBodyType = Record<string, any> | DefaultRequestMultipartBody | string | number | boolean | null | undefined;
interface RequestHandlerDefaultInfo {
    header: string;
}
interface RequestHandlerInternalInfo {
    callFrame?: string;
}
type ContextMap = Record<string, (...args: any[]) => any>;
type ResponseResolverReturnType<ReturnType> = ReturnType | undefined | void;
type MaybeAsyncResponseResolverReturnType<ReturnType> = MaybePromise<ResponseResolverReturnType<ReturnType>>;
type AsyncResponseResolverReturnType<ReturnType> = MaybeAsyncResponseResolverReturnType<ReturnType> | Generator<MaybeAsyncResponseResolverReturnType<ReturnType>, MaybeAsyncResponseResolverReturnType<ReturnType>, MaybeAsyncResponseResolverReturnType<ReturnType>>;
type ResponseResolver<RequestType = MockedRequest, ContextType = typeof defaultContext, BodyType extends DefaultBodyType = any> = (req: RequestType, res: ResponseComposition<BodyType>, context: ContextType) => AsyncResponseResolverReturnType<MockedResponse<BodyType>>;
interface RequestHandlerOptions<HandlerInfo> {
    info: HandlerInfo;
    resolver: ResponseResolver<any, any>;
    ctx?: ContextMap;
}
interface RequestHandlerExecutionResult<PublicRequestType> {
    handler: RequestHandler;
    parsedResult: any;
    request: PublicRequestType;
    response?: MockedResponse;
}
declare abstract class RequestHandler<HandlerInfo extends RequestHandlerDefaultInfo = RequestHandlerDefaultInfo, Request extends MockedRequest = MockedRequest, ParsedResult = any, PublicRequest extends MockedRequest = Request> {
    info: HandlerInfo & RequestHandlerInternalInfo;
    shouldSkip: boolean;
    private ctx;
    private resolverGenerator?;
    private resolverGeneratorResult?;
    protected resolver: ResponseResolver<any, any>;
    constructor(options: RequestHandlerOptions<HandlerInfo>);
    /**
     * Determine if the captured request should be mocked.
     */
    abstract predicate(request: MockedRequest, parsedResult: ParsedResult, resolutionContext?: ResponseResolutionContext): boolean;
    /**
     * Print out the successfully handled request.
     */
    abstract log(request: Request, response: SerializedResponse<any>, parsedResult: ParsedResult): void;
    /**
     * Parse the captured request to extract additional information from it.
     * Parsed result is then exposed to other methods of this request handler.
     */
    parse(_request: MockedRequest, _resolutionContext?: ResponseResolutionContext): ParsedResult;
    /**
     * Test if this handler matches the given request.
     */
    test(request: MockedRequest, resolutionContext?: ResponseResolutionContext): boolean;
    /**
     * Derive the publicly exposed request (`req`) instance of the response resolver
     * from the captured request and its parsed result.
     */
    protected getPublicRequest(request: MockedRequest, _parsedResult: ParsedResult): PublicRequest;
    markAsSkipped(shouldSkip?: boolean): void;
    /**
     * Execute this request handler and produce a mocked response
     * using the given resolver function.
     */
    run(request: MockedRequest, resolutionContext?: ResponseResolutionContext): Promise<RequestHandlerExecutionResult<PublicRequest> | null>;
    private wrapResolver;
    private createExecutionResult;
}

type MaybePromise<ValueType = any> = ValueType | Promise<ValueType>;
/**
 * Internal representation of a mocked response instance.
 */
interface MockedResponse<BodyType extends DefaultBodyType = any> {
    body: BodyType;
    status: number;
    statusText: string;
    headers: Headers;
    once: boolean;
    passthrough: boolean;
    delay?: number;
}
type ResponseTransformer<BodyType extends TransformerBodyType = any, TransformerBodyType extends DefaultBodyType = any> = (res: MockedResponse<TransformerBodyType>) => MaybePromise<MockedResponse<BodyType>>;
type ResponseFunction<BodyType extends DefaultBodyType = any> = (...transformers: ResponseTransformer<BodyType>[]) => MaybePromise<MockedResponse<BodyType>>;
type ResponseComposition<BodyType extends DefaultBodyType = any> = ResponseFunction<BodyType> & {
    /**
     * Respond using a given mocked response to the first captured request.
     * Does not affect any subsequent captured requests.
     */
    once: ResponseFunction<BodyType>;
    networkError: (message: string) => void;
};
declare const defaultResponse: Omit<MockedResponse, 'headers'>;
type ResponseCompositionOptions<BodyType> = {
    defaultTransformers?: ResponseTransformer<BodyType>[];
    mockedResponseOverrides?: Partial<MockedResponse>;
};
declare function createResponseComposition<BodyType extends DefaultBodyType>(responseOverrides?: Partial<MockedResponse<BodyType>>, defaultTransformers?: ResponseTransformer<BodyType>[]): ResponseFunction;
declare const response: ResponseFunction<any> & {
    once: ResponseFunction<any>;
    networkError(message: string): never;
};

/**
 * Sets a response status code and text.
 * @example
 * res(ctx.status(301))
 * res(ctx.status(400, 'Custom status text'))
 * @see {@link https://mswjs.io/docs/api/context/status `ctx.status()`}
 */
declare const status: (statusCode: number, statusText?: string) => ResponseTransformer;

/**
 * Generic class for the mock API setup.
 */
declare abstract class SetupApi<EventsMap extends EventMap> {
    protected initialHandlers: ReadonlyArray<RequestHandler>;
    protected currentHandlers: Array<RequestHandler>;
    protected readonly emitter: Emitter<EventsMap>;
    protected readonly publicEmitter: Emitter<EventsMap>;
    readonly events: LifeCycleEventEmitter<EventsMap>;
    constructor(...initialHandlers: Array<RequestHandler>);
    private validateHandlers;
    protected dispose(): void;
    use(...runtimeHandlers: Array<RequestHandler>): void;
    restoreHandlers(): void;
    resetHandlers(...nextHandlers: Array<RequestHandler>): void;
    listHandlers(): ReadonlyArray<RequestHandler<RequestHandlerDefaultInfo, MockedRequest<DefaultBodyType>, any, MockedRequest<DefaultBodyType>>>;
    private createLifeCycleEvents;
    abstract printHandlers(): void;
}

type ServerLifecycleEventsMap = LifeCycleEventsMap<IsomorphicResponse>;
interface SetupServer {
    /**
     * Starts requests interception based on the previously provided request handlers.
     * @see {@link https://mswjs.io/docs/api/setup-server/listen `server.listen()`}
     */
    listen(options?: PartialDeep<SharedOptions>): void;
    /**
     * Stops requests interception by restoring all augmented modules.
     * @see {@link https://mswjs.io/docs/api/setup-server/close `server.close()`}
     */
    close(): void;
    /**
     * Prepends given request handlers to the list of existing handlers.
     * @see {@link https://mswjs.io/docs/api/setup-server/use `server.use()`}
     */
    use(...handlers: RequestHandler[]): void;
    /**
     * Marks all request handlers that respond using `res.once()` as unused.
     * @see {@link https://mswjs.io/docs/api/setup-server/restore-handlers `server.restore-handlers()`}
     */
    restoreHandlers(): void;
    /**
     * Resets request handlers to the initial list given to the `setupServer` call, or to the explicit next request handlers list, if given.
     * @see {@link https://mswjs.io/docs/api/setup-server/reset-handlers `server.reset-handlers()`}
     */
    resetHandlers(...nextHandlers: RequestHandler[]): void;
    /**
     * Returns a readonly list of currently active request handlers.
     * @see {@link https://mswjs.io/docs/api/setup-server/list-handlers `server.listHandlers()`}
     */
    listHandlers(): ReadonlyArray<RequestHandler<RequestHandlerDefaultInfo, MockedRequest<DefaultBodyType>, any, MockedRequest<DefaultBodyType>>>;
    /**
     * Lists all active request handlers.
     * @see {@link https://mswjs.io/docs/api/setup-server/print-handlers `server.print-handlers()`}
     */
    printHandlers(): void;
    events: LifeCycleEventEmitter<ServerLifecycleEventsMap>;
}

export { AsyncResponseResolverReturnType as A, DelayMode as B, RequestCache as C, DefaultContext as D, RequestMode as E, RequestRedirect as F, RequestDestination as G, RequestPriority as H, RequestReferrerPolicy as I, MockedRequestInit as J, SetupServer as K, LifeCycleEventsMap as L, MockedRequest as M, ResponseTransformer as R, SetupApi as S, WorkerLifecycleEventsMap as W, set as a, SetupWorker as b, RequestHandler as c, delay as d, StartOptions as e, fetch as f, StartReturnType as g, DefaultBodyType as h, ResponseResolver as i, ResponseResolutionContext as j, SerializedResponse as k, RequestHandlerDefaultInfo as l, MockedResponse as m, ResponseLookupResult as n, SharedOptions as o, ServerLifecycleEventsMap as p, defaultResponse as q, response as r, status as s, createResponseComposition as t, defaultContext as u, ResponseResolverReturnType as v, DefaultRequestMultipartBody as w, ResponseComposition as x, ResponseCompositionOptions as y, ResponseFunction as z };
