import type { AbiParameter } from '../abi.js';
import type { Narrow } from '../narrow.js';
import type { Error, Filter } from '../types.js';
import type { IsStructSignature, Modifier, ParseAbiParameters as ParseAbiParameters_, ParseStructs, SplitParameters } from './types/index.js';
/**
 * Parses human-readable ABI parameters into {@link AbiParameter}s
 *
 * @param TParams - Human-readable ABI parameters
 * @returns Parsed {@link AbiParameter}s
 *
 * @example
 * type Result = ParseAbiParameters('address from, address to, uint256 amount')
 * //   ^? type Result: [{ type: "address"; name: "from"; }, { type: "address";...
 *
 * @example
 * type Result = ParseAbiParameters<
 *   // ^? type Result: [{ type: "tuple"; components: [{ type: "string"; name:...
 *   ['Baz bar', 'struct Baz { string name; }']
 * >
 */
export type ParseAbiParameters<TParams extends string | readonly string[] | readonly unknown[]> = (TParams extends string ? TParams extends '' ? never : string extends TParams ? readonly AbiParameter[] : ParseAbiParameters_<SplitParameters<TParams>, {
    Modifier: Modifier;
}> : never) | (TParams extends readonly string[] ? string[] extends TParams ? AbiParameter : ParseStructs<TParams> extends infer Structs ? {
    [K in keyof TParams]: TParams[K] extends string ? IsStructSignature<TParams[K]> extends true ? never : ParseAbiParameters_<SplitParameters<TParams[K]>, {
        Modifier: Modifier;
        Structs: Structs;
    }> : never;
} extends infer Mapped extends readonly unknown[] ? Filter<Mapped, never>[0] extends infer Result ? Result extends undefined ? never : Result : never : never : never : never);
/**
 * Parses human-readable ABI parameters into {@link AbiParameter}s
 *
 * @param params - Human-readable ABI parameters
 * @returns Parsed {@link AbiParameter}s
 *
 * @example
 * const abiParameters = parseAbiParameters('address from, address to, uint256 amount')
 * //    ^? const abiParameters: [{ type: "address"; name: "from"; }, { type: "address";...
 *
 * @example
 * const abiParameters = parseAbiParameters([
 *   //  ^? const abiParameters: [{ type: "tuple"; components: [{ type: "string"; name:...
 *   'Baz bar',
 *   'struct Baz { string name; }',
 * ])
 */
export declare function parseAbiParameters<TParams extends string | readonly string[] | readonly unknown[]>(params: Narrow<TParams> & ((TParams extends string ? TParams extends '' ? Error<'Empty string is not allowed.'> : unknown : never) | (TParams extends readonly string[] ? TParams extends readonly [] ? Error<'At least one parameter required.'> : string[] extends TParams ? unknown : unknown : never))): ParseAbiParameters<TParams>;
//# sourceMappingURL=parseAbiParameters.d.ts.map