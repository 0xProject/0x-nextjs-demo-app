import { InvalidAbiParameterError } from './errors/index.js';
import { isStructSignature, modifiers, parseAbiParameter as parseAbiParameter_, parseStructs, } from './runtime/index.js';
export function parseAbiParameter(param) {
    let abiParameter;
    if (typeof param === 'string')
        abiParameter = parseAbiParameter_(param, {
            modifiers,
        });
    else {
        const structs = parseStructs(param);
        const length = param.length;
        for (let i = 0; i < length; i++) {
            const signature = param[i];
            if (isStructSignature(signature))
                continue;
            abiParameter = parseAbiParameter_(signature, { modifiers, structs });
            break;
        }
    }
    if (!abiParameter)
        throw new InvalidAbiParameterError({ param });
    return abiParameter;
}
//# sourceMappingURL=parseAbiParameter.js.map