import { BrowserInfo, BotInfo, NodeInfo, SearchBotDeviceInfo, ReactNativeInfo } from "detect-browser";
export declare function detectEnv(userAgent?: string): BrowserInfo | BotInfo | NodeInfo | SearchBotDeviceInfo | ReactNativeInfo | null;
export declare function detectOS(): "iOS" | "Android OS" | "BlackBerry OS" | "Windows Mobile" | "Amazon OS" | "Windows 3.11" | "Windows 95" | "Windows 98" | "Windows 2000" | "Windows XP" | "Windows Server 2003" | "Windows Vista" | "Windows 7" | "Windows 8" | "Windows 8.1" | "Windows 10" | "Windows ME" | "Windows CE" | "Open BSD" | "Sun OS" | "Linux" | "Mac OS" | "QNX" | "BeOS" | "OS/2" | "Chrome OS" | "aix" | "android" | "darwin" | "freebsd" | "linux" | "openbsd" | "sunos" | "win32" | "cygwin" | "netbsd" | undefined;
export declare function isAndroid(): boolean;
export declare function isIOS(): boolean;
export declare function isMobile(): boolean;
export declare function isNode(): boolean;
export declare function isBrowser(): boolean;
//# sourceMappingURL=env.d.ts.map