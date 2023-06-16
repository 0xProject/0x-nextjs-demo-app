(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tanstack/query-core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tanstack/query-core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.QueryPersistClientCore = {}, global.QueryCore));
})(this, (function (exports, queryCore) { 'use strict';

  /**
   * Checks if emitted event is about cache change and not about observers.
   * Useful for persist, where we only want to trigger save when cache is changed.
   */
  const cacheableEventTypes = ['added', 'removed', 'updated'];

  function isCacheableEventType(eventType) {
    return cacheableEventTypes.includes(eventType);
  }
  /**
   * Restores persisted data to the QueryCache
   *  - data obtained from persister.restoreClient
   *  - data is hydrated using hydrateOptions
   * If data is expired, busted, empty, or throws, it runs persister.removeClient
   */


  async function persistQueryClientRestore({
    queryClient,
    persister,
    maxAge = 1000 * 60 * 60 * 24,
    buster = '',
    hydrateOptions
  }) {
    try {
      const persistedClient = await persister.restoreClient();

      if (persistedClient) {
        if (persistedClient.timestamp) {
          const expired = Date.now() - persistedClient.timestamp > maxAge;
          const busted = persistedClient.buster !== buster;

          if (expired || busted) {
            persister.removeClient();
          } else {
            queryCore.hydrate(queryClient, persistedClient.clientState, hydrateOptions);
          }
        } else {
          persister.removeClient();
        }
      }
    } catch (err) {
      {
        queryClient.getLogger().error(err);
        queryClient.getLogger().warn('Encountered an error attempting to restore client cache from persisted location. As a precaution, the persisted cache will be discarded.');
      }

      persister.removeClient();
    }
  }
  /**
   * Persists data from the QueryCache
   *  - data dehydrated using dehydrateOptions
   *  - data is persisted using persister.persistClient
   */

  async function persistQueryClientSave({
    queryClient,
    persister,
    buster = '',
    dehydrateOptions
  }) {
    const persistClient = {
      buster,
      timestamp: Date.now(),
      clientState: queryCore.dehydrate(queryClient, dehydrateOptions)
    };
    await persister.persistClient(persistClient);
  }
  /**
   * Subscribe to QueryCache and MutationCache updates (for persisting)
   * @returns an unsubscribe function (to discontinue monitoring)
   */

  function persistQueryClientSubscribe(props) {
    const unsubscribeQueryCache = props.queryClient.getQueryCache().subscribe(event => {
      if (isCacheableEventType(event.type)) {
        persistQueryClientSave(props);
      }
    });
    const unusbscribeMutationCache = props.queryClient.getMutationCache().subscribe(event => {
      if (isCacheableEventType(event.type)) {
        persistQueryClientSave(props);
      }
    });
    return () => {
      unsubscribeQueryCache();
      unusbscribeMutationCache();
    };
  }
  /**
   * Restores persisted data to QueryCache and persists further changes.
   */

  function persistQueryClient(props) {
    let hasUnsubscribed = false;
    let persistQueryClientUnsubscribe;

    const unsubscribe = () => {
      hasUnsubscribed = true;
      persistQueryClientUnsubscribe == null ? void 0 : persistQueryClientUnsubscribe();
    }; // Attempt restore


    const restorePromise = persistQueryClientRestore(props).then(() => {
      if (!hasUnsubscribed) {
        // Subscribe to changes in the query cache to trigger the save
        persistQueryClientUnsubscribe = persistQueryClientSubscribe(props);
      }
    });
    return [unsubscribe, restorePromise];
  }

  const removeOldestQuery = ({
    persistedClient
  }) => {
    const mutations = [...persistedClient.clientState.mutations];
    const queries = [...persistedClient.clientState.queries];
    const client = { ...persistedClient,
      clientState: {
        mutations,
        queries
      }
    }; // sort queries by dataUpdatedAt (oldest first)

    const sortedQueries = [...queries].sort((a, b) => a.state.dataUpdatedAt - b.state.dataUpdatedAt); // clean oldest query

    if (sortedQueries.length > 0) {
      const oldestData = sortedQueries.shift();
      client.clientState.queries = queries.filter(q => q !== oldestData);
      return client;
    }

    return undefined;
  };

  exports.persistQueryClient = persistQueryClient;
  exports.persistQueryClientRestore = persistQueryClientRestore;
  exports.persistQueryClientSave = persistQueryClientSave;
  exports.persistQueryClientSubscribe = persistQueryClientSubscribe;
  exports.removeOldestQuery = removeOldestQuery;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.development.js.map
