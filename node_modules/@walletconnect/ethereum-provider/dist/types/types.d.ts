import { SignClientTypes } from "@walletconnect/types";
import { EthereumProvider } from "./EthereumProvider";
export interface ProviderRpcError extends Error {
    message: string;
    code: number;
    data?: unknown;
}
export interface ProviderMessage {
    type: string;
    data: unknown;
}
export interface ProviderInfo {
    chainId: string;
}
export interface RequestArguments {
    method: string;
    params?: unknown[] | object;
}
export declare type ProviderChainId = ProviderInfo["chainId"];
export declare type ProviderAccounts = string[];
export interface EIP1102Request extends RequestArguments {
    method: "eth_requestAccounts";
}
export declare namespace IProviderEvents {
    type Event = "connect" | "disconnect" | "message" | "chainChanged" | "accountsChanged" | "session_delete" | "session_event" | "session_update" | "display_uri";
    interface EventArguments {
        connect: ProviderInfo;
        disconnect: ProviderRpcError;
        message: ProviderMessage;
        chainChanged: ProviderChainId;
        accountsChanged: ProviderAccounts;
        session_delete: {
            topic: string;
        };
        session_event: SignClientTypes.EventArguments["session_event"];
        session_update: SignClientTypes.EventArguments["session_delete"];
        display_uri: string;
    }
}
export interface IEthereumProviderEvents {
    on: <E extends IProviderEvents.Event>(event: E, listener: (args: IProviderEvents.EventArguments[E]) => void) => EthereumProvider;
    once: <E extends IProviderEvents.Event>(event: E, listener: (args: IProviderEvents.EventArguments[E]) => void) => EthereumProvider;
    off: <E extends IProviderEvents.Event>(event: E, listener: (args: IProviderEvents.EventArguments[E]) => void) => EthereumProvider;
    removeListener: <E extends IProviderEvents.Event>(event: E, listener: (args: IProviderEvents.EventArguments[E]) => void) => EthereumProvider;
    emit: <E extends IProviderEvents.Event>(event: E, payload: IProviderEvents.EventArguments[E]) => boolean;
}
export interface EIP1193Provider {
    on(event: "connect", listener: (info: ProviderInfo) => void): EthereumProvider;
    on(event: "disconnect", listener: (error: ProviderRpcError) => void): EthereumProvider;
    on(event: "message", listener: (message: ProviderMessage) => void): EthereumProvider;
    on(event: "chainChanged", listener: (chainId: ProviderChainId) => void): EthereumProvider;
    on(event: "accountsChanged", listener: (accounts: ProviderAccounts) => void): EthereumProvider;
    request(args: RequestArguments): Promise<unknown>;
}
export interface IEthereumProvider extends EIP1193Provider {
    enable(): Promise<ProviderAccounts>;
}
//# sourceMappingURL=types.d.ts.map