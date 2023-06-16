import { Chain } from '@wagmi/chains';
import { C as ChainProviderFn } from '../index-fc9ab085.js';
import 'viem';

type AlchemyProviderConfig = {
    /** Your Alchemy API key from the [Alchemy Dashboard](https://dashboard.alchemyapi.io/). */
    apiKey: string;
};
declare function alchemyProvider<TChain extends Chain = Chain>({ apiKey, }: AlchemyProviderConfig): ChainProviderFn<TChain>;

export { AlchemyProviderConfig, alchemyProvider };
