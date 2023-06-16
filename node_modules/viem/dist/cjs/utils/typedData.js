"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTypedData = void 0;
const abi_js_1 = require("../errors/abi.js");
const address_js_1 = require("../errors/address.js");
const isAddress_js_1 = require("./address/isAddress.js");
const size_js_1 = require("./data/size.js");
const toHex_js_1 = require("./encoding/toHex.js");
const regex_js_1 = require("./regex.js");
function validateTypedData({ domain, message, primaryType, types: types_, }) {
    const types = types_;
    const validateData = (struct, value_) => {
        for (const param of struct) {
            const { name, type: type_ } = param;
            const type = type_;
            const value = value_[name];
            const integerMatch = type.match(regex_js_1.integerRegex);
            if (integerMatch &&
                (typeof value === 'number' || typeof value === 'bigint')) {
                const [_type, base, size_] = integerMatch;
                (0, toHex_js_1.numberToHex)(value, {
                    signed: base === 'int',
                    size: parseInt(size_) / 8,
                });
            }
            if (type === 'address' && typeof value === 'string' && !(0, isAddress_js_1.isAddress)(value))
                throw new address_js_1.InvalidAddressError({ address: value });
            const bytesMatch = type.match(regex_js_1.bytesRegex);
            if (bytesMatch) {
                const [_type, size_] = bytesMatch;
                if (size_ && (0, size_js_1.size)(value) !== parseInt(size_))
                    throw new abi_js_1.BytesSizeMismatchError({
                        expectedSize: parseInt(size_),
                        givenSize: (0, size_js_1.size)(value),
                    });
            }
            const struct = types[type];
            if (struct)
                validateData(struct, value);
        }
    };
    if (types['EIP712Domain'] && domain)
        validateData(types['EIP712Domain'], domain);
    if (primaryType !== 'EIP712Domain') {
        const type = types[primaryType];
        validateData(type, message);
    }
}
exports.validateTypedData = validateTypedData;
//# sourceMappingURL=typedData.js.map