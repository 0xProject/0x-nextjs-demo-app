import { Chain } from '@wagmi/chains';
import { C as ChainProviderFn } from '../index-fc9ab085.js';
import 'viem';

type InfuraProviderConfig = {
    /** Your Infura API key from the [Infura Dashboard](https://infura.io/login). */
    apiKey: string;
};
declare function infuraProvider<TChain extends Chain = Chain>({ apiKey, }: InfuraProviderConfig): ChainProviderFn<TChain>;

export { InfuraProviderConfig, infuraProvider };
