import { Chain } from '@wagmi/chains';
import { C as ChainProviderFn } from '../index-fc9ab085.js';
import 'viem';

type JsonRpcProviderConfig = {
    rpc: (chain: Chain) => {
        http: string;
        webSocket?: string;
    } | null;
};
declare function jsonRpcProvider<TChain extends Chain = Chain>({ rpc, }: JsonRpcProviderConfig): ChainProviderFn<TChain>;

export { JsonRpcProviderConfig, jsonRpcProvider };
