import {
  Connector,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __publicField
} from "./chunk-QYMCVNHT.js";

// src/walletConnect.ts
import {
  SwitchChainError,
  UserRejectedRequestError,
  createWalletClient,
  custom,
  getAddress,
  numberToHex
} from "viem";
var NAMESPACE = "eip155";
var STORE_KEY = "store";
var REQUESTED_CHAINS_KEY = "requestedChains";
var ADD_ETH_CHAIN_METHOD = "wallet_addEthereumChain";
var _provider, _initProviderPromise, _createProvider, createProvider_fn, _initProvider, initProvider_fn, _isChainsStale, isChainsStale_fn, _setupListeners, setupListeners_fn, _removeListeners, removeListeners_fn, _setRequestedChainsIds, setRequestedChainsIds_fn, _getRequestedChainsIds, getRequestedChainsIds_fn, _getNamespaceChainsIds, getNamespaceChainsIds_fn, _getNamespaceMethods, getNamespaceMethods_fn;
var WalletConnectConnector = class extends Connector {
  constructor(config) {
    super({
      ...config,
      options: { isNewChainsStale: true, ...config.options }
    });
    __privateAdd(this, _createProvider);
    __privateAdd(this, _initProvider);
    __privateAdd(this, _isChainsStale);
    __privateAdd(this, _setupListeners);
    __privateAdd(this, _removeListeners);
    __privateAdd(this, _setRequestedChainsIds);
    __privateAdd(this, _getRequestedChainsIds);
    __privateAdd(this, _getNamespaceChainsIds);
    __privateAdd(this, _getNamespaceMethods);
    __publicField(this, "id", "walletConnect");
    __publicField(this, "name", "WalletConnect");
    __publicField(this, "ready", true);
    __privateAdd(this, _provider, void 0);
    __privateAdd(this, _initProviderPromise, void 0);
    __publicField(this, "onAccountsChanged", (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", { account: getAddress(accounts[0]) });
    });
    __publicField(this, "onChainChanged", (chainId) => {
      const id = Number(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", { chain: { id, unsupported } });
    });
    __publicField(this, "onDisconnect", () => {
      __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, []);
      this.emit("disconnect");
    });
    __publicField(this, "onDisplayUri", (uri) => {
      this.emit("message", { type: "display_uri", data: uri });
    });
    __publicField(this, "onConnect", () => {
      this.emit("connect", {});
    });
    __privateMethod(this, _createProvider, createProvider_fn).call(this);
  }
  async connect({ chainId, pairingTopic } = {}) {
    try {
      let targetChainId = chainId;
      if (!targetChainId) {
        const store = this.storage?.getItem(STORE_KEY);
        const lastUsedChainId = store?.state?.data?.chain?.id;
        if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId))
          targetChainId = lastUsedChainId;
        else
          targetChainId = this.chains[0]?.id;
      }
      if (!targetChainId)
        throw new Error("No chains found on connector.");
      const provider = await this.getProvider();
      __privateMethod(this, _setupListeners, setupListeners_fn).call(this);
      const isChainsStale = __privateMethod(this, _isChainsStale, isChainsStale_fn).call(this);
      if (provider.session && isChainsStale)
        await provider.disconnect();
      if (!provider.session || isChainsStale) {
        const optionalChains = this.chains.filter((chain) => chain.id !== targetChainId).map((optionalChain) => optionalChain.id);
        this.emit("message", { type: "connecting" });
        await provider.connect({
          pairingTopic,
          chains: [targetChainId],
          optionalChains
        });
        __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, this.chains.map(({ id: id2 }) => id2));
      }
      const accounts = await provider.enable();
      const account = getAddress(accounts[0]);
      const id = await this.getChainId();
      const unsupported = this.isChainUnsupported(id);
      return {
        account,
        chain: { id, unsupported }
      };
    } catch (error) {
      if (/user rejected/i.test(error?.message)) {
        throw new UserRejectedRequestError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    try {
      await provider.disconnect();
    } catch (error) {
      if (!/No matching key/i.test(error.message))
        throw error;
    } finally {
      __privateMethod(this, _removeListeners, removeListeners_fn).call(this);
      __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, []);
    }
  }
  async getAccount() {
    const { accounts } = await this.getProvider();
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const { chainId } = await this.getProvider();
    return chainId;
  }
  async getProvider({ chainId } = {}) {
    if (!__privateGet(this, _provider))
      await __privateMethod(this, _createProvider, createProvider_fn).call(this);
    if (chainId)
      await this.switchChain(chainId);
    return __privateGet(this, _provider);
  }
  async getWalletClient({ chainId } = {}) {
    const [provider, account] = await Promise.all([
      this.getProvider({ chainId }),
      this.getAccount()
    ]);
    const chain = this.chains.find((x) => x.id === chainId);
    if (!provider)
      throw new Error("provider is required.");
    return createWalletClient({
      account,
      chain,
      transport: custom(provider)
    });
  }
  async isAuthorized() {
    try {
      const [account, provider] = await Promise.all([
        this.getAccount(),
        this.getProvider()
      ]);
      const isChainsStale = __privateMethod(this, _isChainsStale, isChainsStale_fn).call(this);
      if (!account)
        return false;
      if (isChainsStale && provider.session) {
        try {
          await provider.disconnect();
        } catch {
        }
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const chain = this.chains.find((chain2) => chain2.id === chainId);
    if (!chain)
      throw new SwitchChainError(new Error("chain not found on connector."));
    try {
      const provider = await this.getProvider();
      const namespaceChains = __privateMethod(this, _getNamespaceChainsIds, getNamespaceChainsIds_fn).call(this);
      const namespaceMethods = __privateMethod(this, _getNamespaceMethods, getNamespaceMethods_fn).call(this);
      const isChainApproved = namespaceChains.includes(chainId);
      if (!isChainApproved && namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
        await provider.request({
          method: ADD_ETH_CHAIN_METHOD,
          params: [
            {
              chainId: numberToHex(chain.id),
              blockExplorerUrls: [chain.blockExplorers?.default],
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: [...chain.rpcUrls.default.http]
            }
          ]
        });
        const requestedChains = __privateMethod(this, _getRequestedChainsIds, getRequestedChainsIds_fn).call(this);
        requestedChains.push(chainId);
        __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, requestedChains);
      }
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: numberToHex(chainId) }]
      });
      return chain;
    } catch (error) {
      const message = typeof error === "string" ? error : error?.message;
      if (/user rejected request/i.test(message)) {
        throw new UserRejectedRequestError(error);
      }
      throw new SwitchChainError(error);
    }
  }
};
_provider = new WeakMap();
_initProviderPromise = new WeakMap();
_createProvider = new WeakSet();
createProvider_fn = async function() {
  if (!__privateGet(this, _initProviderPromise) && typeof window !== "undefined") {
    __privateSet(this, _initProviderPromise, __privateMethod(this, _initProvider, initProvider_fn).call(this));
  }
  return __privateGet(this, _initProviderPromise);
};
_initProvider = new WeakSet();
initProvider_fn = async function() {
  const {
    default: EthereumProvider,
    OPTIONAL_EVENTS,
    OPTIONAL_METHODS
  } = await import("@walletconnect/ethereum-provider");
  const [defaultChain, ...optionalChains] = this.chains.map(({ id }) => id);
  if (defaultChain) {
    const { projectId, showQrModal = true, qrModalOptions } = this.options;
    __privateSet(this, _provider, await EthereumProvider.init({
      showQrModal,
      qrModalOptions,
      projectId,
      optionalMethods: OPTIONAL_METHODS,
      optionalEvents: OPTIONAL_EVENTS,
      chains: [defaultChain],
      optionalChains,
      rpcMap: Object.fromEntries(
        this.chains.map((chain) => [
          chain.id,
          chain.rpcUrls.default.http[0]
        ])
      )
    }));
  }
};
_isChainsStale = new WeakSet();
isChainsStale_fn = function() {
  const namespaceMethods = __privateMethod(this, _getNamespaceMethods, getNamespaceMethods_fn).call(this);
  if (namespaceMethods.includes(ADD_ETH_CHAIN_METHOD))
    return false;
  if (!this.options.isNewChainsStale)
    return false;
  const requestedChains = __privateMethod(this, _getRequestedChainsIds, getRequestedChainsIds_fn).call(this);
  const connectorChains = this.chains.map(({ id }) => id);
  const namespaceChains = __privateMethod(this, _getNamespaceChainsIds, getNamespaceChainsIds_fn).call(this);
  if (namespaceChains.length && !namespaceChains.some((id) => connectorChains.includes(id)))
    return false;
  return !connectorChains.every((id) => requestedChains.includes(id));
};
_setupListeners = new WeakSet();
setupListeners_fn = function() {
  if (!__privateGet(this, _provider))
    return;
  __privateMethod(this, _removeListeners, removeListeners_fn).call(this);
  __privateGet(this, _provider).on("accountsChanged", this.onAccountsChanged);
  __privateGet(this, _provider).on("chainChanged", this.onChainChanged);
  __privateGet(this, _provider).on("disconnect", this.onDisconnect);
  __privateGet(this, _provider).on("session_delete", this.onDisconnect);
  __privateGet(this, _provider).on("display_uri", this.onDisplayUri);
  __privateGet(this, _provider).on("connect", this.onConnect);
};
_removeListeners = new WeakSet();
removeListeners_fn = function() {
  if (!__privateGet(this, _provider))
    return;
  __privateGet(this, _provider).removeListener("accountsChanged", this.onAccountsChanged);
  __privateGet(this, _provider).removeListener("chainChanged", this.onChainChanged);
  __privateGet(this, _provider).removeListener("disconnect", this.onDisconnect);
  __privateGet(this, _provider).removeListener("session_delete", this.onDisconnect);
  __privateGet(this, _provider).removeListener("display_uri", this.onDisplayUri);
  __privateGet(this, _provider).removeListener("connect", this.onConnect);
};
_setRequestedChainsIds = new WeakSet();
setRequestedChainsIds_fn = function(chains) {
  this.storage?.setItem(REQUESTED_CHAINS_KEY, chains);
};
_getRequestedChainsIds = new WeakSet();
getRequestedChainsIds_fn = function() {
  return this.storage?.getItem(REQUESTED_CHAINS_KEY) ?? [];
};
_getNamespaceChainsIds = new WeakSet();
getNamespaceChainsIds_fn = function() {
  if (!__privateGet(this, _provider))
    return [];
  const chainIds = __privateGet(this, _provider).session?.namespaces[NAMESPACE]?.chains?.map(
    (chain) => parseInt(chain.split(":")[1] || "")
  );
  return chainIds ?? [];
};
_getNamespaceMethods = new WeakSet();
getNamespaceMethods_fn = function() {
  if (!__privateGet(this, _provider))
    return [];
  const methods = __privateGet(this, _provider).session?.namespaces[NAMESPACE]?.methods;
  return methods ?? [];
};
export {
  WalletConnectConnector
};
