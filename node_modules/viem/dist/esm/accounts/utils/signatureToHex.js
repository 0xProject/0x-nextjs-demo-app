import { secp256k1 } from '@noble/curves/secp256k1';
import { hexToBigInt } from '../../utils/encoding/fromHex.js';
import { toHex } from '../../utils/encoding/toHex.js';
export function signatureToHex({ r, s, v }) {
    return `0x${new secp256k1.Signature(hexToBigInt(r), hexToBigInt(s)).toCompactHex()}${toHex(v).slice(2)}`;
}
//# sourceMappingURL=signatureToHex.js.map