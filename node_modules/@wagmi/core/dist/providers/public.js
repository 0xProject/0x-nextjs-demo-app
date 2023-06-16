import "../chunk-MQXBDTVK.js";

// src/providers/public.ts
function publicProvider() {
  return function(chain) {
    if (!chain.rpcUrls.public.http[0])
      return null;
    return {
      chain,
      rpcUrls: chain.rpcUrls.public
    };
  };
}
export {
  publicProvider
};
