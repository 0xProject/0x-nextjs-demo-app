import {
  ChainNotConfiguredForConnectorError
} from "./chunk-ZCAPXGBX.js";
import {
  normalizeChainId
} from "./chunk-OQILYQDO.js";
import {
  Connector,
  __privateAdd,
  __privateGet,
  __privateSet,
  __publicField
} from "./chunk-QYMCVNHT.js";

// src/coinbaseWallet.ts
import {
  SwitchChainError,
  UserRejectedRequestError,
  createWalletClient,
  custom,
  getAddress,
  numberToHex
} from "viem";
var _client, _provider;
var CoinbaseWalletConnector = class extends Connector {
  constructor({ chains, options }) {
    super({
      chains,
      options: {
        reloadOnDisconnect: false,
        ...options
      }
    });
    __publicField(this, "id", "coinbaseWallet");
    __publicField(this, "name", "Coinbase Wallet");
    __publicField(this, "ready", true);
    __privateAdd(this, _client, void 0);
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
  async connect({ chainId } = {}) {
    try {
      const provider = await this.getProvider();
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
      this.emit("message", { type: "connecting" });
      const accounts = await provider.enable();
      const account = getAddress(accounts[0]);
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId);
        id = chain.id;
        unsupported = this.isChainUnsupported(id);
      }
      return {
        account,
        chain: { id, unsupported }
      };
    } catch (error) {
      if (/(user closed modal|accounts received is empty)/i.test(
        error.message
      ))
        throw new UserRejectedRequestError(error);
      throw error;
    }
  }
  async disconnect() {
    if (!__privateGet(this, _provider))
      return;
    const provider = await this.getProvider();
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    provider.disconnect();
    provider.close();
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = normalizeChainId(provider.chainId);
    return chainId;
  }
  async getProvider() {
    if (!__privateGet(this, _provider)) {
      let CoinbaseWalletSDK = (await import("@coinbase/wallet-sdk")).default;
      if (typeof CoinbaseWalletSDK !== "function" && typeof CoinbaseWalletSDK.default === "function")
        CoinbaseWalletSDK = CoinbaseWalletSDK.default;
      __privateSet(this, _client, new CoinbaseWalletSDK(this.options));
      class WalletProvider {
      }
      class Client {
      }
      const walletExtensionChainId = __privateGet(this, _client).walletExtension?.getChainId();
      const chain = this.chains.find(
        (chain2) => this.options.chainId ? chain2.id === this.options.chainId : chain2.id === walletExtensionChainId
      ) || this.chains[0];
      const chainId = this.options.chainId || chain?.id;
      const jsonRpcUrl = this.options.jsonRpcUrl || chain?.rpcUrls.default.http[0];
      __privateSet(this, _provider, __privateGet(this, _client).makeWeb3Provider(jsonRpcUrl, chainId));
    }
    return __privateGet(this, _provider);
  }
  async getWalletClient({ chainId } = {}) {
    const [provider, account] = await Promise.all([
      this.getProvider(),
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
  async switchChain(chainId) {
    const provider = await this.getProvider();
    const id = numberToHex(chainId);
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: id }]
      });
      return this.chains.find((x) => x.id === chainId) ?? {
        id: chainId,
        name: `Chain ${id}`,
        network: `${id}`,
        nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
        rpcUrls: { default: { http: [""] }, public: { http: [""] } }
      };
    } catch (error) {
      const chain = this.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new ChainNotConfiguredForConnectorError({
          chainId,
          connectorId: this.id
        });
      if (error.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: id,
                chainName: chain.name,
                nativeCurrency: chain.nativeCurrency,
                rpcUrls: [chain.rpcUrls.public?.http[0] ?? ""],
                blockExplorerUrls: this.getBlockExplorerUrls(chain)
              }
            ]
          });
          return chain;
        } catch (error2) {
          throw new UserRejectedRequestError(error2);
        }
      }
      throw new SwitchChainError(error);
    }
  }
  async watchAsset({
    address,
    decimals = 18,
    image,
    symbol
  }) {
    const provider = await this.getProvider();
    return provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          decimals,
          image,
          symbol
        }
      }
    });
  }
};
_client = new WeakMap();
_provider = new WeakMap();
export {
  CoinbaseWalletConnector
};
