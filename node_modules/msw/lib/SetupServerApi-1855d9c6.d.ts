import { IsomorphicResponse, BatchInterceptor, Interceptor, HttpRequestEventMap } from '@mswjs/interceptors';
import { L as LifeCycleEventsMap, S as SetupApi, K as SetupServer, c as RequestHandler, o as SharedOptions } from './glossary-de6278a9.js';

type ServerLifecycleEventsMap = LifeCycleEventsMap<IsomorphicResponse>;
declare class SetupServerApi extends SetupApi<ServerLifecycleEventsMap> implements SetupServer {
    protected readonly interceptor: BatchInterceptor<Array<Interceptor<HttpRequestEventMap>>, HttpRequestEventMap>;
    private resolvedOptions;
    constructor(interceptors: Array<{
        new (): Interceptor<HttpRequestEventMap>;
    }>, ...handlers: Array<RequestHandler>);
    /**
     * Subscribe to all requests that are using the interceptor object
     */
    private init;
    listen(options?: Partial<SharedOptions>): void;
    printHandlers(): void;
    close(): void;
}

export { ServerLifecycleEventsMap as S, SetupServerApi as a };
