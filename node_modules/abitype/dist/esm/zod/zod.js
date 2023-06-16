import { z } from 'zod';
import { bytesRegex, integerRegex } from '../regex.js';
export const Address = z.string().transform((val, ctx) => {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    if (!regex.test(val)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Invalid Address ${val}`,
        });
    }
    return val;
});
export const SolidityAddress = z.literal('address');
export const SolidityBool = z.literal('bool');
export const SolidityBytes = z.string().regex(bytesRegex);
export const SolidityFunction = z.literal('function');
export const SolidityString = z.literal('string');
export const SolidityTuple = z.literal('tuple');
export const SolidityInt = z.string().regex(integerRegex);
export const SolidityArrayWithoutTuple = z
    .string()
    .regex(/^(address|bool|function|string|bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?|u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?)(\[[0-9]{0,}\])+$/);
export const SolidityArrayWithTuple = z
    .string()
    .regex(/^tuple(\[[0-9]{0,}\])+$/);
export const SolidityArray = z.union([
    SolidityArrayWithTuple,
    SolidityArrayWithoutTuple,
]);
export const AbiParameter = z.lazy(() => z.intersection(z.object({
    name: z.string().optional(),
    internalType: z.string().optional(),
}), z.union([
    z.object({
        type: z.union([
            SolidityAddress,
            SolidityBool,
            SolidityBytes,
            SolidityFunction,
            SolidityString,
            SolidityInt,
            SolidityArrayWithoutTuple,
        ]),
    }),
    z.object({
        type: z.union([SolidityTuple, SolidityArrayWithTuple]),
        components: z.array(AbiParameter),
    }),
])));
export const AbiEventParameter = z.intersection(AbiParameter, z.object({ indexed: z.boolean().optional() }));
export const AbiStateMutability = z.union([
    z.literal('pure'),
    z.literal('view'),
    z.literal('nonpayable'),
    z.literal('payable'),
]);
export const AbiFunction = z.preprocess((val) => {
    const abiFunction = val;
    if (abiFunction.stateMutability === undefined) {
        if (abiFunction.constant)
            abiFunction.stateMutability = 'view';
        else if (abiFunction.payable)
            abiFunction.stateMutability = 'payable';
        else
            abiFunction.stateMutability = 'nonpayable';
    }
    return val;
}, z.object({
    type: z.literal('function'),
    constant: z.boolean().optional(),
    gas: z.number().optional(),
    inputs: z.array(AbiParameter),
    name: z.string(),
    outputs: z.array(AbiParameter),
    payable: z.boolean().optional(),
    stateMutability: AbiStateMutability,
}));
export const AbiConstructor = z.preprocess((val) => {
    const abiFunction = val;
    if (abiFunction.stateMutability === undefined) {
        if (abiFunction.payable)
            abiFunction.stateMutability = 'payable';
        else
            abiFunction.stateMutability = 'nonpayable';
    }
    return val;
}, z.object({
    type: z.literal('constructor'),
    inputs: z.array(AbiParameter),
    payable: z.boolean().optional(),
    stateMutability: z.union([z.literal('nonpayable'), z.literal('payable')]),
}));
export const AbiFallback = z.preprocess((val) => {
    const abiFunction = val;
    if (abiFunction.stateMutability === undefined) {
        if (abiFunction.payable)
            abiFunction.stateMutability = 'payable';
        else
            abiFunction.stateMutability = 'nonpayable';
    }
    return val;
}, z.object({
    type: z.literal('fallback'),
    inputs: z.tuple([]).optional(),
    payable: z.boolean().optional(),
    stateMutability: z.union([z.literal('nonpayable'), z.literal('payable')]),
}));
export const AbiReceive = z.object({
    type: z.literal('receive'),
    stateMutability: z.literal('payable'),
});
export const AbiEvent = z.object({
    type: z.literal('event'),
    anonymous: z.boolean().optional(),
    inputs: z.array(AbiEventParameter),
    name: z.string(),
});
export const AbiError = z.object({
    type: z.literal('error'),
    inputs: z.array(AbiParameter),
    name: z.string(),
});
export const AbiItemType = z.union([
    z.literal('constructor'),
    z.literal('event'),
    z.literal('error'),
    z.literal('fallback'),
    z.literal('function'),
    z.literal('receive'),
]);
export const Abi = z.array(z.union([
    AbiError,
    AbiEvent,
    z.preprocess((val) => {
        const abiItem = val;
        if (abiItem.type === 'receive')
            return abiItem;
        if (val
            .stateMutability === undefined) {
            if (abiItem.type === 'function' &&
                abiItem.constant)
                abiItem.stateMutability = 'view';
            else if (abiItem
                .payable)
                abiItem.stateMutability = 'payable';
            else
                abiItem.stateMutability = 'nonpayable';
        }
        return val;
    }, z.intersection(z.object({
        constant: z.boolean().optional(),
        gas: z.number().optional(),
        payable: z.boolean().optional(),
        stateMutability: AbiStateMutability,
    }), z.discriminatedUnion('type', [
        z.object({
            type: z.literal('function'),
            inputs: z.array(AbiParameter),
            name: z.string(),
            outputs: z.array(AbiParameter),
        }),
        z.object({
            type: z.literal('constructor'),
            inputs: z.array(AbiParameter),
        }),
        z.object({
            type: z.literal('fallback'),
            inputs: z.tuple([]).optional(),
        }),
        z.object({
            type: z.literal('receive'),
            stateMutability: z.literal('payable'),
        }),
    ]))),
]));
//# sourceMappingURL=zod.js.map