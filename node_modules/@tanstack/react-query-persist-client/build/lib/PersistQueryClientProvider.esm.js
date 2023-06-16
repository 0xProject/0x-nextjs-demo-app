'use client';
import { extends as _extends } from './_virtual/_rollupPluginBabelHelpers.esm.js';
import * as React from 'react';
import { persistQueryClient } from '@tanstack/query-persist-client-core';
import { QueryClientProvider, IsRestoringProvider } from '@tanstack/react-query';

const PersistQueryClientProvider = ({
  client,
  children,
  persistOptions,
  onSuccess,
  ...props
}) => {
  const [isRestoring, setIsRestoring] = React.useState(true);
  const refs = React.useRef({
    persistOptions,
    onSuccess
  });
  React.useEffect(() => {
    refs.current = {
      persistOptions,
      onSuccess
    };
  });
  React.useEffect(() => {
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
  return /*#__PURE__*/React.createElement(QueryClientProvider, _extends({
    client: client
  }, props), /*#__PURE__*/React.createElement(IsRestoringProvider, {
    value: isRestoring
  }, children));
};

export { PersistQueryClientProvider };
//# sourceMappingURL=PersistQueryClientProvider.esm.js.map
