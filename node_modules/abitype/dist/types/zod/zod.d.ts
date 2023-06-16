import { z } from 'zod';
import type { AbiParameter as AbiParameterType } from '../abi.js';
export declare const Address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
export declare const SolidityAddress: z.ZodLiteral<"address">;
export declare const SolidityBool: z.ZodLiteral<"bool">;
export declare const SolidityBytes: z.ZodString;
export declare const SolidityFunction: z.ZodLiteral<"function">;
export declare const SolidityString: z.ZodLiteral<"string">;
export declare const SolidityTuple: z.ZodLiteral<"tuple">;
export declare const SolidityInt: z.ZodString;
export declare const SolidityArrayWithoutTuple: z.ZodString;
export declare const SolidityArrayWithTuple: z.ZodString;
export declare const SolidityArray: z.ZodUnion<[z.ZodString, z.ZodString]>;
export declare const AbiParameter: z.ZodType<AbiParameterType>;
export declare const AbiEventParameter: z.ZodIntersection<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, z.ZodObject<{
    indexed: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    indexed?: boolean | undefined;
}, {
    indexed?: boolean | undefined;
}>>;
export declare const AbiStateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
export declare const AbiFunction: z.ZodEffects<z.ZodObject<{
    type: z.ZodLiteral<"function">;
    /**
     * @deprecated use `pure` or `view` from {@link AbiStateMutability} instead
     * https://github.com/ethereum/solidity/issues/992
     */
    constant: z.ZodOptional<z.ZodBoolean>;
    /**
     * @deprecated Vyper used to provide gas estimates
     * https://github.com/vyperlang/vyper/issues/2151
     */
    gas: z.ZodOptional<z.ZodNumber>;
    inputs: z.ZodArray<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, "many">;
    name: z.ZodString;
    outputs: z.ZodArray<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, "many">;
    /**
     * @deprecated use `payable` or `nonpayable` from {@link AbiStateMutability} instead
     * https://github.com/ethereum/solidity/issues/992
     */
    payable: z.ZodOptional<z.ZodBoolean>;
    stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
}, "strip", z.ZodTypeAny, {
    type: "function";
    name: string;
    inputs: AbiParameterType[];
    outputs: AbiParameterType[];
    stateMutability: "pure" | "view" | "nonpayable" | "payable";
    constant?: boolean | undefined;
    gas?: number | undefined;
    payable?: boolean | undefined;
}, {
    type: "function";
    name: string;
    inputs: AbiParameterType[];
    outputs: AbiParameterType[];
    stateMutability: "pure" | "view" | "nonpayable" | "payable";
    constant?: boolean | undefined;
    gas?: number | undefined;
    payable?: boolean | undefined;
}>, {
    type: "function";
    name: string;
    inputs: AbiParameterType[];
    outputs: AbiParameterType[];
    stateMutability: "pure" | "view" | "nonpayable" | "payable";
    constant?: boolean | undefined;
    gas?: number | undefined;
    payable?: boolean | undefined;
}, unknown>;
export declare const AbiConstructor: z.ZodEffects<z.ZodObject<{
    type: z.ZodLiteral<"constructor">;
    /**
     * @deprecated use `pure` or `view` from {@link AbiStateMutability} instead
     * https://github.com/ethereum/solidity/issues/992
     */
    inputs: z.ZodArray<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, "many">;
    /**
     * @deprecated use `payable` or `nonpayable` from {@link AbiStateMutability} instead
     * https://github.com/ethereum/solidity/issues/992
     */
    payable: z.ZodOptional<z.ZodBoolean>;
    stateMutability: z.ZodUnion<[z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
}, "strip", z.ZodTypeAny, {
    type: "constructor";
    inputs: AbiParameterType[];
    stateMutability: "nonpayable" | "payable";
    payable?: boolean | undefined;
}, {
    type: "constructor";
    inputs: AbiParameterType[];
    stateMutability: "nonpayable" | "payable";
    payable?: boolean | undefined;
}>, {
    type: "constructor";
    inputs: AbiParameterType[];
    stateMutability: "nonpayable" | "payable";
    payable?: boolean | undefined;
}, unknown>;
export declare const AbiFallback: z.ZodEffects<z.ZodObject<{
    type: z.ZodLiteral<"fallback">;
    /**
     * @deprecated use `pure` or `view` from {@link AbiStateMutability} instead
     * https://github.com/ethereum/solidity/issues/992
     */
    inputs: z.ZodOptional<z.ZodTuple<[], null>>;
    /**
     * @deprecated use `payable` or `nonpayable` from {@link AbiStateMutability} instead
     * https://github.com/ethereum/solidity/issues/992
     */
    payable: z.ZodOptional<z.ZodBoolean>;
    stateMutability: z.ZodUnion<[z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
}, "strip", z.ZodTypeAny, {
    type: "fallback";
    stateMutability: "nonpayable" | "payable";
    inputs?: [] | undefined;
    payable?: boolean | undefined;
}, {
    type: "fallback";
    stateMutability: "nonpayable" | "payable";
    inputs?: [] | undefined;
    payable?: boolean | undefined;
}>, {
    type: "fallback";
    stateMutability: "nonpayable" | "payable";
    inputs?: [] | undefined;
    payable?: boolean | undefined;
}, unknown>;
export declare const AbiReceive: z.ZodObject<{
    type: z.ZodLiteral<"receive">;
    stateMutability: z.ZodLiteral<"payable">;
}, "strip", z.ZodTypeAny, {
    type: "receive";
    stateMutability: "payable";
}, {
    type: "receive";
    stateMutability: "payable";
}>;
export declare const AbiEvent: z.ZodObject<{
    type: z.ZodLiteral<"event">;
    anonymous: z.ZodOptional<z.ZodBoolean>;
    inputs: z.ZodArray<z.ZodIntersection<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, z.ZodObject<{
        indexed: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        indexed?: boolean | undefined;
    }, {
        indexed?: boolean | undefined;
    }>>, "many">;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "event";
    name: string;
    inputs: (AbiParameterType & {
        indexed?: boolean | undefined;
    })[];
    anonymous?: boolean | undefined;
}, {
    type: "event";
    name: string;
    inputs: (AbiParameterType & {
        indexed?: boolean | undefined;
    })[];
    anonymous?: boolean | undefined;
}>;
export declare const AbiError: z.ZodObject<{
    type: z.ZodLiteral<"error">;
    inputs: z.ZodArray<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, "many">;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "error";
    name: string;
    inputs: AbiParameterType[];
}, {
    type: "error";
    name: string;
    inputs: AbiParameterType[];
}>;
export declare const AbiItemType: z.ZodUnion<[z.ZodLiteral<"constructor">, z.ZodLiteral<"event">, z.ZodLiteral<"error">, z.ZodLiteral<"fallback">, z.ZodLiteral<"function">, z.ZodLiteral<"receive">]>;
/**
 * Zod Schema for Contract [ABI Specification](https://docs.soliditylang.org/en/latest/abi-spec.html#json)
 *
 * @example
 * const parsedAbi = Abi.parse([…])
 */
export declare const Abi: z.ZodArray<z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"error">;
    inputs: z.ZodArray<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, "many">;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "error";
    name: string;
    inputs: AbiParameterType[];
}, {
    type: "error";
    name: string;
    inputs: AbiParameterType[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"event">;
    anonymous: z.ZodOptional<z.ZodBoolean>;
    inputs: z.ZodArray<z.ZodIntersection<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, z.ZodObject<{
        indexed: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        indexed?: boolean | undefined;
    }, {
        indexed?: boolean | undefined;
    }>>, "many">;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "event";
    name: string;
    inputs: (AbiParameterType & {
        indexed?: boolean | undefined;
    })[];
    anonymous?: boolean | undefined;
}, {
    type: "event";
    name: string;
    inputs: (AbiParameterType & {
        indexed?: boolean | undefined;
    })[];
    anonymous?: boolean | undefined;
}>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
    /**
     * @deprecated use `pure` or `view` from {@link AbiStateMutability} instead
     * https://github.com/ethereum/solidity/issues/992
     */
    constant: z.ZodOptional<z.ZodBoolean>;
    /**
     * @deprecated Vyper used to provide gas estimates
     * https://github.com/vyperlang/vyper/issues/2151
     */
    gas: z.ZodOptional<z.ZodNumber>;
    /**
     * @deprecated use `payable` or `nonpayable` from {@link AbiStateMutability} instead
     * https://github.com/ethereum/solidity/issues/992
     */
    payable: z.ZodOptional<z.ZodBoolean>;
    stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
}, "strip", z.ZodTypeAny, {
    stateMutability: "pure" | "view" | "nonpayable" | "payable";
    constant?: boolean | undefined;
    gas?: number | undefined;
    payable?: boolean | undefined;
}, {
    stateMutability: "pure" | "view" | "nonpayable" | "payable";
    constant?: boolean | undefined;
    gas?: number | undefined;
    payable?: boolean | undefined;
}>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"function">;
    inputs: z.ZodArray<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, "many">;
    name: z.ZodString;
    outputs: z.ZodArray<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "function";
    name: string;
    inputs: AbiParameterType[];
    outputs: AbiParameterType[];
}, {
    type: "function";
    name: string;
    inputs: AbiParameterType[];
    outputs: AbiParameterType[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"constructor">;
    inputs: z.ZodArray<z.ZodType<AbiParameterType, z.ZodTypeDef, AbiParameterType>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "constructor";
    inputs: AbiParameterType[];
}, {
    type: "constructor";
    inputs: AbiParameterType[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"fallback">;
    inputs: z.ZodOptional<z.ZodTuple<[], null>>;
}, "strip", z.ZodTypeAny, {
    type: "fallback";
    inputs?: [] | undefined;
}, {
    type: "fallback";
    inputs?: [] | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"receive">;
    stateMutability: z.ZodLiteral<"payable">;
}, "strip", z.ZodTypeAny, {
    type: "receive";
    stateMutability: "payable";
}, {
    type: "receive";
    stateMutability: "payable";
}>]>>, {
    stateMutability: "pure" | "view" | "nonpayable" | "payable";
    constant?: boolean | undefined;
    gas?: number | undefined;
    payable?: boolean | undefined;
} & ({
    type: "function";
    name: string;
    inputs: AbiParameterType[];
    outputs: AbiParameterType[];
} | {
    type: "constructor";
    inputs: AbiParameterType[];
} | {
    type: "fallback";
    inputs?: [] | undefined;
} | {
    type: "receive";
    stateMutability: "payable";
}), unknown>]>, "many">;
//# sourceMappingURL=zod.d.ts.map