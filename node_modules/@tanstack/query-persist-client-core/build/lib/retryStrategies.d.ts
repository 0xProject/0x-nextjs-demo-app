import type { PersistedClient } from '@tanstack/query-persist-client-core';
export declare type PersistRetryer = (props: {
    persistedClient: PersistedClient;
    error: Error;
    errorCount: number;
}) => PersistedClient | undefined;
export declare const removeOldestQuery: PersistRetryer;
//# sourceMappingURL=retryStrategies.d.ts.map