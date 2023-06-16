"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function importLokijs() {
    try {
        return require("lokijs");
    }
    catch (e) {
        throw new Error(`To use WalletConnect server side, you'll need to install the "lokijs" dependency. If you are seeing this error during a build / in an SSR environment, you can add "lokijs" as a devDependency to make this error go away.`);
    }
}
let Lokijs;
class Db {
    constructor(opts) {
        if (!Lokijs) {
            Lokijs = importLokijs();
        }
        if ((opts === null || opts === void 0 ? void 0 : opts.db) === ":memory:") {
            this.database = new Lokijs(opts === null || opts === void 0 ? void 0 : opts.db, {});
        }
        else {
            this.database = new Lokijs(opts === null || opts === void 0 ? void 0 : opts.db, {
                autoload: true,
                autoloadCallback: opts.callback,
            });
        }
    }
    static create(opts) {
        const db = opts.db;
        if (db === ":memory:") {
            return new Db(opts);
        }
        if (!Db.instances[db]) {
            Db.instances[db] = new Db(opts);
        }
        return Db.instances[db];
    }
}
exports.default = Db;
Db.instances = {};
//# sourceMappingURL=db.js.map