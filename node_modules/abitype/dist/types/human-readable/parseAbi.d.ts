import type { Abi } from '../abi.js';
import type { Narrow } from '../narrow.js';
import type { Error, Filter } from '../types.js';
import type { ParseSignature, ParseStructs, Signatures } from './types/index.js';
/**
 * Parses human-readable ABI into JSON {@link Abi}
 *
 * @param TSignatures - Human-readable ABI
 * @returns Parsed {@link Abi}
 *
 * @example
 * type Result = ParseAbi<
 *   // ^? type Result = readonly [{ name: "balanceOf"; type: "function"; stateMutability:...
 *   [
 *     'function balanceOf(address owner) view returns (uint256)',
 *     'event Transfer(address indexed from, address indexed to, uint256 amount)',
 *   ]
 * >
 */
export type ParseAbi<TSignatures extends readonly string[] | readonly unknown[]> = string[] extends TSignatures ? Abi : TSignatures extends readonly string[] ? TSignatures extends Signatures<TSignatures> ? ParseStructs<TSignatures> extends infer Structs ? {
    [K in keyof TSignatures]: TSignatures[K] extends string ? ParseSignature<TSignatures[K], Structs> : never;
} extends infer Mapped extends readonly unknown[] ? Filter<Mapped, never> extends infer Result ? Result extends readonly [] ? never : Result : never : never : never : never : never;
/**
 * Parses human-readable ABI into JSON {@link Abi}
 *
 * @param signatures - Human-Readable ABI
 * @returns Parsed {@link Abi}
 *
 * @example
 * const abi = parseAbi([
 *   //  ^? const abi: readonly [{ name: "balanceOf"; type: "function"; stateMutability:...
 *   'function balanceOf(address owner) view returns (uint256)',
 *   'event Transfer(address indexed from, address indexed to, uint256 amount)',
 * ])
 */
export declare function parseAbi<TSignatures extends readonly string[] | readonly unknown[]>(signatures: Narrow<TSignatures> & (TSignatures extends readonly string[] ? TSignatures extends readonly [] ? Error<'At least one signature required.'> : string[] extends TSignatures ? unknown : Signatures<TSignatures> : never)): ParseAbi<TSignatures>;
//# sourceMappingURL=parseAbi.d.ts.map