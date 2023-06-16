/// <reference types="react" />
import type { PersistQueryClientOptions } from '@tanstack/query-persist-client-core';
import type { QueryClientProviderProps } from '@tanstack/react-query';
export declare type PersistQueryClientProviderProps = QueryClientProviderProps & {
    persistOptions: Omit<PersistQueryClientOptions, 'queryClient'>;
    onSuccess?: () => void;
};
export declare const PersistQueryClientProvider: ({ client, children, persistOptions, onSuccess, ...props }: PersistQueryClientProviderProps) => JSX.Element;
//# sourceMappingURL=PersistQueryClientProvider.d.ts.map