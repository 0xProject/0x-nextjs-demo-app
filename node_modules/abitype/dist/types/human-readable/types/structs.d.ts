import type { AbiParameter } from '../../abi.js';
import type { Error, Trim } from '../../types.js';
import type { StructSignature } from './signatures.js';
import type { ParseAbiParameter } from './utils.js';
export type StructLookup = Record<string, readonly AbiParameter[]>;
export type ParseStructs<TSignatures extends readonly string[]> = {
    [Signature in TSignatures[number] as ParseStruct<Signature> extends infer Struct extends {
        name: string;
    } ? Struct['name'] : never]: ParseStruct<Signature>['components'];
} extends infer Structs extends Record<string, readonly (AbiParameter & {
    type: string;
})[]> ? {
    [StructName in keyof Structs]: ResolveStructs<Structs[StructName], Structs>;
} : never;
export type ParseStruct<TSignature extends string, TStructs extends StructLookup | unknown = unknown> = TSignature extends StructSignature<infer Name, infer Properties> ? {
    readonly name: Trim<Name>;
    readonly components: ParseStructProperties<Properties, TStructs>;
} : never;
export type ResolveStructs<TAbiParameters extends readonly (AbiParameter & {
    type: string;
})[], TStructs extends Record<string, readonly (AbiParameter & {
    type: string;
})[]>, TKeyReferences extends {
    [_: string]: unknown;
} | unknown = unknown> = readonly [
    ...{
        [K in keyof TAbiParameters]: TAbiParameters[K]['type'] extends `${infer Head extends string & keyof TStructs}[${infer Tail}]` ? Head extends keyof TKeyReferences ? Error<`Circular reference detected. Struct "${TAbiParameters[K]['type']}" is a circular reference.`> : {
            readonly name: TAbiParameters[K]['name'];
            readonly type: `tuple[${Tail}]`;
            readonly components: ResolveStructs<TStructs[Head], TStructs, TKeyReferences & {
                [_ in Head]: true;
            }>;
        } : TAbiParameters[K]['type'] extends keyof TStructs ? TAbiParameters[K]['type'] extends keyof TKeyReferences ? Error<`Circular reference detected. Struct "${TAbiParameters[K]['type']}" is a circular reference.`> : {
            readonly name: TAbiParameters[K]['name'];
            readonly type: 'tuple';
            readonly components: ResolveStructs<TStructs[TAbiParameters[K]['type']], TStructs, TKeyReferences & {
                [_ in TAbiParameters[K]['type']]: true;
            }>;
        } : TAbiParameters[K];
    }
];
export type ParseStructProperties<T extends string, TStructs extends StructLookup | unknown = unknown, Result extends any[] = []> = Trim<T> extends `${infer Head};${infer Tail}` ? ParseStructProperties<Tail, TStructs, [
    ...Result,
    ParseAbiParameter<Head, {
        Structs: TStructs;
    }>
]> : Result;
//# sourceMappingURL=structs.d.ts.map