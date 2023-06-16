import { LitElement } from 'lit';
export declare class W3mWalletConnectQr extends LitElement {
    static styles: any[];
    walletId?: string | undefined;
    imageId?: string | undefined;
    private uri?;
    constructor();
    disconnectedCallback(): void;
    private readonly unwatchWcConnection?;
    private get overlayEl();
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-walletconnect-qr': W3mWalletConnectQr;
    }
}
