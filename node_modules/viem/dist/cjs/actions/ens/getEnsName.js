"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnsName = void 0;
const solidity_js_1 = require("../../constants/solidity.js");
const contract_js_1 = require("../../errors/contract.js");
const chain_js_1 = require("../../utils/chain.js");
const toHex_js_1 = require("../../utils/encoding/toHex.js");
const packetToBytes_js_1 = require("../../utils/ens/packetToBytes.js");
const readContract_js_1 = require("../public/readContract.js");
async function getEnsName(client, { address, blockNumber, blockTag, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0, chain_js_1.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
    try {
        const res = await (0, readContract_js_1.readContract)(client, {
            address: universalResolverAddress,
            abi: [
                {
                    name: 'reverse',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ type: 'bytes', name: 'reverseName' }],
                    outputs: [
                        { type: 'string', name: 'resolvedName' },
                        { type: 'address', name: 'resolvedAddress' },
                        { type: 'address', name: 'reverseResolver' },
                        { type: 'address', name: 'resolver' },
                    ],
                },
            ],
            functionName: 'reverse',
            args: [(0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(reverseNode))],
            blockNumber,
            blockTag,
        });
        return res[0];
    }
    catch (error) {
        if (error instanceof contract_js_1.ContractFunctionExecutionError &&
            error.cause.reason === solidity_js_1.panicReasons[50])
            return null;
        throw error;
    }
}
exports.getEnsName = getEnsName;
//# sourceMappingURL=getEnsName.js.map