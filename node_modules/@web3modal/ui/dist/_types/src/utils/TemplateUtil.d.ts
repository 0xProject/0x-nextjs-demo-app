import type { WalletData } from '@web3modal/core';
export declare const TemplateUtil: {
    onConnecting(data: WalletData): void;
    onExternal(id: string): void;
    manualWalletsTemplate(): import("lit-html").TemplateResult<1>[];
    recomendedWalletsTemplate(skipRecent?: boolean): import("lit-html").TemplateResult<1>[];
    externalWalletsTemplate(): import("lit-html").TemplateResult<1>[];
    recentWalletTemplate(): import("lit-html").TemplateResult<1> | undefined;
    installedInjectedWalletsTemplate(): import("lit-html").TemplateResult<1>[];
    injectedWalletsTemplate(): import("lit-html").TemplateResult<1>[];
};
