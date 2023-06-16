var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/base.ts
import { default as EventEmitter } from "eventemitter3";
import { goerli, mainnet } from "viem/chains";
var Connector = class extends EventEmitter {
  constructor({
    chains = [mainnet, goerli],
    options
  }) {
    super();
    __publicField(this, "chains");
    __publicField(this, "options");
    __publicField(this, "storage");
    this.chains = chains;
    this.options = options;
  }
  getBlockExplorerUrls(chain) {
    const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
    if (blockExplorer)
      return [
        blockExplorer.url,
        ...Object.values(blockExplorers).map((x) => x.url)
      ];
  }
  isChainUnsupported(chainId) {
    return !this.chains.some((x) => x.id === chainId);
  }
  setStorage(storage) {
    this.storage = storage;
  }
};

export {
  __publicField,
  __privateGet,
  __privateAdd,
  __privateSet,
  __privateMethod,
  Connector
};
