import { InvalidAbiItemError } from './errors/index.js';
import { isStructSignature, parseSignature, parseStructs, } from './runtime/index.js';
export function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string')
        abiItem = parseSignature(signature);
    else {
        const structs = parseStructs(signature);
        const length = signature.length;
        for (let i = 0; i < length; i++) {
            const signature_ = signature[i];
            if (isStructSignature(signature_))
                continue;
            abiItem = parseSignature(signature_, structs);
            break;
        }
    }
    if (!abiItem)
        throw new InvalidAbiItemError({ signature });
    return abiItem;
}
//# sourceMappingURL=parseAbiItem.js.map