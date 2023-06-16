"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateMethods = exports.signingMethods = exports.STATE_METHODS = exports.SIGNING_METHODS = exports.WALLET_METHODS = void 0;
exports.WALLET_METHODS = [
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
];
exports.SIGNING_METHODS = [
    "eth_sendTransaction",
    "eth_signTransaction",
    "eth_sign",
    "eth_signTypedData",
    "eth_signTypedData_v1",
    "eth_signTypedData_v2",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "personal_sign",
    ...exports.WALLET_METHODS,
];
exports.STATE_METHODS = ["eth_accounts", "eth_chainId", "net_version"];
exports.signingMethods = exports.SIGNING_METHODS;
exports.stateMethods = exports.STATE_METHODS;
//# sourceMappingURL=jsonrpc.js.map