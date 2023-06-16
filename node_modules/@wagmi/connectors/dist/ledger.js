import {
  normalizeChainId
} from "./chunk-OQILYQDO.js";
import {
  Connector,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __publicField
} from "./chunk-QYMCVNHT.js";

// src/ledger.ts
import {
  SupportedProviders,
  loadConnectKit
} from "@ledgerhq/connect-kit-loader";
import {
  SwitchChainError,
  UserRejectedRequestError,
  createWalletClient,
  custom,
  getAddress,
  numberToHex
} from "viem";
var _provider, _switchChain, switchChain_fn;
var LedgerConnector = class extends Connector {
  constructor({
    chains,
    options = { enableDebugLogs: false }
  } = {}) {
    super({ chains, options });
    __privateAdd(this, _switchChain);
    __publicField(this, "id", "ledger");
    __publicField(this, "name", "Ledger");
    __publicField(this, "ready", true);
    __privateAdd(this, _provider, void 0);
    __publicField(this, "onAccountsChanged", (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", { account: getAddress(accounts[0]) });
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
  async connect() {
    try {
      const provider = await this.getProvider({ create: true });
      if (provider.on) {
        provider.on("accountsChanged", this.onAccountsChanged);
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect);
      }
      this.emit("message", { type: "connecting" });
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      const account = getAddress(accounts[0]);
      const id = await this.getChainId();
      const unsupported = this.isChainUnsupported(id);
      this.switchChain = __privateMethod(this, _switchChain, switchChain_fn);
      return {
        account,
        chain: { id, unsupported }
      };
    } catch (error) {
      if (error.code === 4001) {
        throw new UserRejectedRequestError(error);
      }
      if (error.code === -32002) {
        throw error instanceof Error ? error : new Error(String(error));
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    if (provider?.disconnect) {
      await provider.disconnect();
    }
    if (provider?.removeListener) {
      provider.removeListener("accountsChanged", this.onAccountsChanged);
      provider.removeListener("chainChanged", this.onChainChanged);
      provider.removeListener("disconnect", this.onDisconnect);
    }
    typeof localStorage !== "undefined" && localStorage.removeItem("walletconnect");
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    const account = getAddress(accounts[0]);
    return account;
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = await provider.request({
      method: "eth_chainId"
    });
    return normalizeChainId(chainId);
  }
  async getProvider({ chainId, create } = {
    create: false
  }) {
    if (!__privateGet(this, _provider) || chainId || create) {
      const connectKit = await loadConnectKit();
      if (this.options.enableDebugLogs) {
        connectKit.enableDebugLogs();
      }
      const rpc = this.chains.reduce(
        (rpc2, chain) => ({
          ...rpc2,
          [chain.id]: chain.rpcUrls.default.http[0]
        }),
        {}
      );
      connectKit.checkSupport({
        bridge: this.options.bridge,
        providerType: SupportedProviders.Ethereum,
        chainId: chainId || this.options.chainId,
        rpc: { ...rpc, ...this.options?.rpc }
      });
      __privateSet(this, _provider, await connectKit.getProvider());
    }
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
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
};
_provider = new WeakMap();
_switchChain = new WeakSet();
switchChain_fn = async function(chainId) {
  const provider = await this.getProvider();
  const id = numberToHex(chainId);
  try {
    await Promise.race([
      provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: id }]
      }),
      new Promise(
        (res) => this.on("change", ({ chain }) => {
          if (chain?.id === chainId)
            res(chainId);
        })
      )
    ]);
    return this.chains.find((x) => x.id === chainId) ?? {
      id: chainId,
      name: `Chain ${id}`,
      network: `${id}`,
      nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
      rpcUrls: { default: { http: [""] }, public: { http: [""] } }
    };
  } catch (error) {
    const message = typeof error === "string" ? error : error?.message;
    if (/user rejected request/i.test(message))
      throw new UserRejectedRequestError(error);
    throw new SwitchChainError(error);
  }
};
export {
  LedgerConnector
};
