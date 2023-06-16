import {
  normalizeChainId
} from "../chunk-OQILYQDO.js";
import {
  Connector,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __publicField
} from "../chunk-QYMCVNHT.js";

// src/mock/connector.ts
import { getAddress as getAddress2 } from "viem";

// src/mock/provider.ts
import { default as EventEmitter } from "eventemitter3";
import { UserRejectedRequestError, getAddress } from "viem";
var _options, _walletClient;
var MockProvider = class {
  constructor(options) {
    __publicField(this, "events", new EventEmitter());
    __publicField(this, "chainId");
    __privateAdd(this, _options, void 0);
    __privateAdd(this, _walletClient, void 0);
    this.chainId = options.chainId;
    __privateSet(this, _options, options);
  }
  async enable() {
    if (__privateGet(this, _options).flags?.failConnect)
      throw new UserRejectedRequestError(new Error("Failed to connect."));
    if (!__privateGet(this, _walletClient))
      __privateSet(this, _walletClient, __privateGet(this, _options).walletClient);
    const address = __privateGet(this, _walletClient).account.address;
    this.events.emit("accountsChanged", [address]);
    return [address];
  }
  async disconnect() {
    this.events.emit("disconnect");
    __privateSet(this, _walletClient, void 0);
  }
  async getAccounts() {
    const address = __privateGet(this, _walletClient)?.account.address;
    if (!address)
      return [];
    return [getAddress(address)];
  }
  getWalletClient() {
    const walletClient = __privateGet(this, _walletClient);
    if (!walletClient)
      throw new Error("walletClient not found");
    return walletClient;
  }
  async switchChain(chainId) {
    if (__privateGet(this, _options).flags?.failSwitchChain)
      throw new UserRejectedRequestError(new Error("Failed to switch chain."));
    __privateGet(this, _options).chainId = chainId;
    this.chainId = chainId;
    this.events.emit("chainChanged", chainId);
  }
  async switchWalletClient(walletClient) {
    const address = walletClient.account.address;
    __privateSet(this, _walletClient, walletClient);
    this.events.emit("accountsChanged", [address]);
  }
  async watchAsset(_asset) {
    return true;
  }
  async request({ method, params }) {
    return __privateGet(this, _walletClient)?.transport.request({ method, params });
  }
  on(event, listener) {
    this.events.on(event, listener);
    return this;
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
    return this;
  }
  toJSON() {
    return "<MockProvider>";
  }
};
_options = new WeakMap();
_walletClient = new WeakMap();

// src/mock/connector.ts
var _provider, _switchChain, switchChain_fn;
var MockConnector = class extends Connector {
  constructor({
    chains,
    options
  }) {
    super({
      chains,
      options: {
        ...options,
        chainId: options.chainId ?? chains?.[0]?.id
      }
    });
    __privateAdd(this, _switchChain);
    __publicField(this, "id", "mock");
    __publicField(this, "name", "Mock");
    __publicField(this, "ready", true);
    __privateAdd(this, _provider, void 0);
    __publicField(this, "onAccountsChanged", (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", { account: getAddress2(accounts[0]) });
    });
    __publicField(this, "onChainChanged", (chainId) => {
      const id = normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", { chain: { id, unsupported } });
    });
    __publicField(this, "onDisconnect", () => {
      this.emit("disconnect");
    });
  }
  async connect({ chainId } = {}) {
    const provider = await this.getProvider({ chainId });
    provider.on("accountsChanged", this.onAccountsChanged);
    provider.on("chainChanged", this.onChainChanged);
    provider.on("disconnect", this.onDisconnect);
    this.emit("message", { type: "connecting" });
    const accounts = await provider.enable();
    const account = getAddress2(accounts[0]);
    const id = normalizeChainId(provider.chainId);
    const unsupported = this.isChainUnsupported(id);
    const data = { account, chain: { id, unsupported }, provider };
    if (!this.options.flags?.noSwitchChain)
      this.switchChain = __privateMethod(this, _switchChain, switchChain_fn);
    return new Promise(
      (res) => setTimeout(() => res(data), 100)
    );
  }
  async disconnect() {
    const provider = await this.getProvider();
    await provider.disconnect();
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = await provider.getAccounts();
    const account = accounts[0];
    if (!account)
      throw new Error("Failed to get account");
    return getAddress2(account);
  }
  async getChainId() {
    const provider = await this.getProvider();
    return normalizeChainId(provider.chainId);
  }
  async getProvider({ chainId } = {}) {
    if (!__privateGet(this, _provider) || chainId)
      __privateSet(this, _provider, new MockProvider({
        ...this.options,
        chainId: chainId ?? this.options.chainId ?? this.chains[0].id
      }));
    return __privateGet(this, _provider);
  }
  async getWalletClient() {
    const provider = await this.getProvider();
    return provider.getWalletClient();
  }
  async isAuthorized() {
    try {
      const provider = await this.getProvider();
      const account = await provider.getAccounts();
      return this.options.flags?.isAuthorized ?? !!account;
    } catch {
      return false;
    }
  }
  async watchAsset(asset) {
    const provider = await this.getProvider();
    return provider.watchAsset(asset);
  }
  toJSON() {
    return "<MockConnector>";
  }
};
_provider = new WeakMap();
_switchChain = new WeakSet();
switchChain_fn = async function(chainId) {
  const provider = await this.getProvider();
  await provider.switchChain(chainId);
  return this.chains.find((x) => x.id === chainId) ?? {
    id: chainId,
    name: `Chain ${chainId}`,
    network: `${chainId}`,
    nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
    rpcUrls: { default: { http: [""] }, public: { http: [""] } }
  };
};
export {
  MockConnector,
  MockProvider
};
