interface DbKeyValueStorageOptions {
    db: string;
    callback: Function;
}
declare let Lokijs: any;
export default class Db {
    private static instances;
    database: typeof Lokijs;
    private constructor();
    static create(opts: DbKeyValueStorageOptions): Db;
}
export {};
//# sourceMappingURL=db.d.ts.map