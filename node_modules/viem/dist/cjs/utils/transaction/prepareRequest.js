"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareRequest = exports.defaultTip = void 0;
const parseAccount_js_1 = require("../../accounts/utils/parseAccount.js");
const estimateGas_js_1 = require("../../actions/public/estimateGas.js");
const getBlock_js_1 = require("../../actions/public/getBlock.js");
const getGasPrice_js_1 = require("../../actions/public/getGasPrice.js");
const getTransactionCount_js_1 = require("../../actions/public/getTransactionCount.js");
const account_js_1 = require("../../errors/account.js");
const base_js_1 = require("../../errors/base.js");
const assertRequest_js_1 = require("./assertRequest.js");
exports.defaultTip = 1500000000n;
async function prepareRequest(client, args) {
    const { account: account_, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, } = args;
    if (!account_)
        throw new account_js_1.AccountNotFoundError();
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const block = await (0, getBlock_js_1.getBlock)(client, { blockTag: 'latest' });
    const request = { ...args, from: account.address };
    if (typeof nonce === 'undefined')
        request.nonce = await (0, getTransactionCount_js_1.getTransactionCount)(client, {
            address: account.address,
            blockTag: 'pending',
        });
    if (block.baseFeePerGas) {
        if (typeof gasPrice !== 'undefined')
            throw new base_js_1.BaseError('Chain does not support legacy `gasPrice`.');
        if (typeof maxFeePerGas === 'undefined') {
            request.maxPriorityFeePerGas = maxPriorityFeePerGas ?? exports.defaultTip;
            request.maxFeePerGas =
                (block.baseFeePerGas * 120n) / 100n + request.maxPriorityFeePerGas;
        }
        else {
            if (typeof maxPriorityFeePerGas === 'undefined' &&
                maxFeePerGas < exports.defaultTip)
                throw new base_js_1.BaseError('`maxFeePerGas` cannot be less than the default `maxPriorityFeePerGas` (1.5 gwei).');
            request.maxFeePerGas = maxFeePerGas;
            request.maxPriorityFeePerGas = maxPriorityFeePerGas ?? exports.defaultTip;
        }
    }
    else {
        if (typeof maxFeePerGas !== 'undefined' ||
            typeof maxPriorityFeePerGas !== 'undefined')
            throw new base_js_1.BaseError('Chain does not support EIP-1559 fees.');
        if (typeof gasPrice === 'undefined')
            request.gasPrice = ((await (0, getGasPrice_js_1.getGasPrice)(client)) * 120n) / 100n;
    }
    if (typeof gas === 'undefined')
        request.gas = await (0, estimateGas_js_1.estimateGas)(client, {
            ...request,
            account: { address: account.address, type: 'json-rpc' },
        });
    (0, assertRequest_js_1.assertRequest)(request);
    return request;
}
exports.prepareRequest = prepareRequest;
//# sourceMappingURL=prepareRequest.js.map