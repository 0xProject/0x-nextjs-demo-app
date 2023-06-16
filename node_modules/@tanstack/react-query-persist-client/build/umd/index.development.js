(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@tanstack/react-query')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@tanstack/react-query'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactQueryPersistClient = {}, global.React, global.ReactQuery));
})(this, (function (exports, React, reactQuery) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);

  // TYPES
  // FUNCTIONS
  function dehydrateMutation(mutation) {
    return {
      mutationKey: mutation.options.mutationKey,
      state: mutation.state
    };
  } // Most config is not dehydrated but instead meant to configure again when
  // consuming the de/rehydrated data, typically with useQuery on the client.
  // Sometimes it might make sense to prefetch data on the server and include
  // in the html-payload, but not consume it on the initial render.


  function dehydrateQuery(query) {
    return {
      state: query.state,
      queryKey: query.queryKey,
      queryHash: query.queryHash
    };
  }

  function defaultShouldDehydrateMutation(mutation) {
    return mutation.state.isPaused;
  }
  function defaultShouldDehydrateQuery(query) {
    return query.state.status === 'success';
  }
  function dehydrate(client, options = {}) {
    const mutations = [];
    const queries = [];

    if (options.dehydrateMutations !== false) {
      const shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
      client.getMutationCache().getAll().forEach(mutation => {
        if (shouldDehydrateMutation(mutation)) {
          mutations.push(dehydrateMutation(mutation));
        }
      });
    }

    if (options.dehydrateQueries !== false) {
      const shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
      client.getQueryCache().getAll().forEach(query => {
        if (shouldDehydrateQuery(query)) {
          queries.push(dehydrateQuery(query));
        }
      });
    }

    return {
      mutations,
      queries
    };
  }
  function hydrate(client, dehydratedState, options) {
    if (typeof dehydratedState !== 'object' || dehydratedState === null) {
      return;
    }

    const mutationCache = client.getMutationCache();
    const queryCache = client.getQueryCache(); // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

    const mutations = dehydratedState.mutations || []; // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

    const queries = dehydratedState.queries || [];
    mutations.forEach(dehydratedMutation => {
      var _options$defaultOptio;

      mutationCache.build(client, { ...(options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations),
        mutationKey: dehydratedMutation.mutationKey
      }, dehydratedMutation.state);
    });
    queries.forEach(dehydratedQuery => {
      var _options$defaultOptio2;

      const query = queryCache.get(dehydratedQuery.queryHash); // Reset fetch status to idle in the dehydrated state to avoid
      // query being stuck in fetching state upon hydration

      const dehydratedQueryState = { ...dehydratedQuery.state,
        fetchStatus: 'idle'
      }; // Do not hydrate if an existing query exists with newer data

      if (query) {
        if (query.state.dataUpdatedAt < dehydratedQueryState.dataUpdatedAt) {
          query.setState(dehydratedQueryState);
        }

        return;
      } // Restore query


      queryCache.build(client, { ...(options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries),
        queryKey: dehydratedQuery.queryKey,
        queryHash: dehydratedQuery.queryHash
      }, dehydratedQueryState);
    });
  }

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
            hydrate(queryClient, persistedClient.clientState, hydrateOptions);
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
      clientState: dehydrate(queryClient, dehydrateOptions)
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

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };
    return _extends.apply(this, arguments);
  }

  const PersistQueryClientProvider = ({
    client,
    children,
    persistOptions,
    onSuccess,
    ...props
  }) => {
    const [isRestoring, setIsRestoring] = React__namespace.useState(true);
    const refs = React__namespace.useRef({
      persistOptions,
      onSuccess
    });
    React__namespace.useEffect(() => {
      refs.current = {
        persistOptions,
        onSuccess
      };
    });
    React__namespace.useEffect(() => {
      let isStale = false;
      setIsRestoring(true);
      const [unsubscribe, promise] = persistQueryClient({ ...refs.current.persistOptions,
        queryClient: client
      });
      promise.then(() => {
        if (!isStale) {
          refs.current.onSuccess == null ? void 0 : refs.current.onSuccess();
          setIsRestoring(false);
        }
      });
      return () => {
        isStale = true;
        unsubscribe();
      };
    }, [client]);
    return /*#__PURE__*/React__namespace.createElement(reactQuery.QueryClientProvider, _extends({
      client: client
    }, props), /*#__PURE__*/React__namespace.createElement(reactQuery.IsRestoringProvider, {
      value: isRestoring
    }, children));
  };

  exports.PersistQueryClientProvider = PersistQueryClientProvider;
  exports.persistQueryClient = persistQueryClient;
  exports.persistQueryClientRestore = persistQueryClientRestore;
  exports.persistQueryClientSave = persistQueryClientSave;
  exports.persistQueryClientSubscribe = persistQueryClientSubscribe;
  exports.removeOldestQuery = removeOldestQuery;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.development.js.map
