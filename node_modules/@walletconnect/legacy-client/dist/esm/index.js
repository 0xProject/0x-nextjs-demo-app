import Connector from "./core";
import * as cryptoLib from "./crypto";
class WalletConnect extends Connector {
    constructor(connectorOpts, pushServerOpts) {
        super({
            cryptoLib,
            connectorOpts,
            pushServerOpts,
        });
    }
}
export default WalletConnect;
//# sourceMappingURL=index.js.map