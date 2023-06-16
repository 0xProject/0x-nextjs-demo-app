import type { Abi } from '../abi.js';
import type { Narrow } from '../narrow.js';
import type { Error, Filter } from '../types.js';
import type { ParseSignature, ParseStructs, Signature, Signatures } from './types/index.js';
/**
 * Parses human-readable ABI item (e.g. error, event, function) into {@link Abi} item
 *
 * @param TSignature - Human-readable ABI item
 * @returns Parsed {@link Abi} item
 *
 * @example
 * type Result = ParseAbiItem<'function balanceOf(address owner) view returns (uint256)'>
 * //   ^? type Result = { name: "balanceOf"; type: "function"; stateMutability: "view";...
 *
 * @example
 * type Result = ParseAbiItem<
 *   // ^? type Result = { name: "foo"; type: "function"; stateMutability: "view"; inputs:...
 *   ['function foo(Baz bar) view returns (string)', 'struct Baz { string name; }']
 * >
 */
export type ParseAbiItem<TSignature extends string | readonly string[] | readonly unknown[]> = (TSignature extends string ? string extends TSignature ? Abi[number] : TSignature extends Signature<TSignature> ? ParseSignature<TSignature> : never : never) | (TSignature extends readonly string[] ? string[] extends TSignature ? Abi[number] : TSignature extends Signatures<TSignature> ? ParseStructs<TSignature> extends infer Structs ? {
    [K in keyof TSignature]: ParseSignature<TSignature[K] extends string ? TSignature[K] : never, Structs>;
} extends infer Mapped extends readonly unknown[] ? Filter<Mapped, never>[0] extends infer Result ? Result extends undefined ? never : Result : never : never : never : never : never);
/**
 * Parses human-readable ABI item (e.g. error, event, function) into {@link Abi} item
 *
 * @param signature - Human-readable ABI item
 * @returns Parsed {@link Abi} item
 *
 * @example
 * const abiItem = parseAbiItem('function balanceOf(address owner) view returns (uint256)')
 * //    ^? const abiItem: { name: "balanceOf"; type: "function"; stateMutability: "view";...
 *
 * @example
 * const abiItem = parseAbiItem([
 *   //  ^? const abiItem: { name: "foo"; type: "function"; stateMutability: "view"; inputs:...
 *   'function foo(Baz bar) view returns (string)',
 *   'struct Baz { string name; }',
 * ])
 */
export declare function parseAbiItem<TSignature extends string | readonly string[] | readonly unknown[]>(signature: Narrow<TSignature> & ((TSignature extends string ? string extends TSignature ? unknown : Signature<TSignature> : never) | (TSignature extends readonly string[] ? TSignature extends readonly [] ? Error<'At least one signature required.'> : string[] extends TSignature ? unknown : Signatures<TSignature> : never))): ParseAbiItem<TSignature>;
//# sourceMappingURL=parseAbiItem.d.ts.map