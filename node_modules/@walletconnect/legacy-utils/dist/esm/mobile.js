import { MOBILE_LINK_CHOICE_KEY, } from "@walletconnect/legacy-types";
import { setLocal } from "./local";
export function formatIOSMobile(uri, entry) {
    const encodedUri = encodeURIComponent(uri);
    return entry.universalLink
        ? `${entry.universalLink}/wc?uri=${encodedUri}`
        : entry.deepLink
            ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}`
            : "";
}
export function saveMobileLinkInfo(data) {
    const focusUri = data.href.split("?")[0];
    setLocal(MOBILE_LINK_CHOICE_KEY, Object.assign(Object.assign({}, data), { href: focusUri }));
}
export function getMobileRegistryEntry(registry, name) {
    return registry.filter((entry) => entry.name.toLowerCase().includes(name.toLowerCase()))[0];
}
export function getMobileLinkRegistry(registry, whitelist) {
    let links = registry;
    if (whitelist) {
        links = whitelist.map((name) => getMobileRegistryEntry(registry, name)).filter(Boolean);
    }
    return links;
}
//# sourceMappingURL=mobile.js.map