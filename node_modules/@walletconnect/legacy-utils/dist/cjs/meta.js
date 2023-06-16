"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientMeta = void 0;
const tslib_1 = require("tslib");
const windowMetadata = tslib_1.__importStar(require("@walletconnect/window-metadata"));
function getClientMeta() {
    return windowMetadata.getWindowMetadata();
}
exports.getClientMeta = getClientMeta;
//# sourceMappingURL=meta.js.map