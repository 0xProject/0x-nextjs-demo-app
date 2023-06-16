import "../chunk-MQXBDTVK.js";

// src/providers/infura.ts
function infuraProvider({
  apiKey
}) {
  return function(chain) {
    const baseHttpUrl = chain.rpcUrls.infura?.http[0];
    const baseWsUrl = chain.rpcUrls.infura?.webSocket?.[0];
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
  infuraProvider
};
