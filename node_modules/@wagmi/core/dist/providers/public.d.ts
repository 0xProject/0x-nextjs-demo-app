import { Chain } from '@wagmi/chains';
import { C as ChainProviderFn } from '../index-fc9ab085.js';
import 'viem';

declare function publicProvider<TChain extends Chain = Chain>(): ChainProviderFn<TChain>;

export { publicProvider };
