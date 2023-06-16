import "../chunk-MQXBDTVK.js";

// src/providers/jsonRpc.ts
function jsonRpcProvider({
  rpc
}) {
  return function(chain) {
    const rpcConfig = rpc(chain);
    if (!rpcConfig || rpcConfig.http === "")
      return null;
    return {
      chain: {
        ...chain,
        rpcUrls: {
          ...chain.rpcUrls,
          default: { http: [rpcConfig.http] }
        }
      },
      rpcUrls: {
        http: [rpcConfig.http],
        webSocket: rpcConfig.webSocket ? [rpcConfig.webSocket] : void 0
      }
    };
  };
}
export {
  jsonRpcProvider
};
