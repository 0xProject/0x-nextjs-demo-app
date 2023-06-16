"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const legacy_utils_1 = require("@walletconnect/legacy-utils");
class SessionStorage {
    constructor(storageId = "walletconnect") {
        this.storageId = storageId;
    }
    getSession() {
        let session = null;
        const json = legacy_utils_1.getLocal(this.storageId);
        if (json && legacy_utils_1.isWalletConnectSession(json)) {
            session = json;
        }
        return session;
    }
    setSession(session) {
        legacy_utils_1.setLocal(this.storageId, session);
        return session;
    }
    removeSession() {
        legacy_utils_1.removeLocal(this.storageId);
    }
}
exports.default = SessionStorage;
//# sourceMappingURL=storage.js.map