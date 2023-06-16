import { IMobileRegistryEntry, IMobileRegistry, IMobileLinkInfo } from "@walletconnect/legacy-types";
export declare function formatIOSMobile(uri: string, entry: IMobileRegistryEntry): string;
export declare function saveMobileLinkInfo(data: IMobileLinkInfo): void;
export declare function getMobileRegistryEntry(registry: IMobileRegistry, name: string): IMobileRegistryEntry;
export declare function getMobileLinkRegistry(registry: IMobileRegistry, whitelist?: string[]): IMobileRegistry;
//# sourceMappingURL=mobile.d.ts.map