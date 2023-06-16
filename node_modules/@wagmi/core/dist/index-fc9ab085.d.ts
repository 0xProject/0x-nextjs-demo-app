import { Transport, PublicClient as PublicClient$1, Account, WalletClient as WalletClient$1 } from 'viem';
import { Chain } from '@wagmi/chains';

type Hash = `0x${string}`;
type ChainProviderFn<TChain extends Chain = Chain> = (chain: TChain) => {
    chain: TChain;
    rpcUrls: RpcUrls;
} | null;
type PublicClient<TTransport extends Transport = Transport, TChain extends Chain = Chain> = PublicClient$1<TTransport, TChain> & {
    chains?: Chain[];
};
type WebSocketPublicClient<TTransport extends Transport = Transport, TChain extends Chain = Chain> = PublicClient$1<TTransport, TChain> & {
    chains?: Chain[];
};
type RpcUrls = {
    http: readonly string[];
    webSocket?: readonly string[];
};
type WalletClient<TTransport extends Transport = Transport, TChain extends Chain = Chain, TAccount extends Account = Account> = WalletClient$1<TTransport, TChain, TAccount>;
type Unit = 'ether' | 'gwei' | 'wei' | number;

export { ChainProviderFn as C, Hash as H, PublicClient as P, Unit as U, WebSocketPublicClient as W, WalletClient as a };
