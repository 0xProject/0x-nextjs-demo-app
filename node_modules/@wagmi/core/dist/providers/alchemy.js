import "../chunk-MQXBDTVK.js";

// src/providers/alchemy.ts
function alchemyProvider({
  apiKey
}) {
  return function(chain) {
    const baseHttpUrl = chain.rpcUrls.alchemy?.http[0];
    const baseWsUrl = chain.rpcUrls.alchemy?.webSocket?.[0];
    if (!baseHttpUrl)
      return null;
    return {
      chain: {
        ...chain,
        rpcUrls: {
          ...chain.rpcUrls,
          default: { http: [`${baseHttpUrl}/${apiKey}`] }
        }
      },
      rpcUrls: {
        http: [`${baseHttpUrl}/${apiKey}`],
        webSocket: [`${baseWsUrl}/${apiKey}`]
      }
    };
  };
}
export {
  alchemyProvider
};
