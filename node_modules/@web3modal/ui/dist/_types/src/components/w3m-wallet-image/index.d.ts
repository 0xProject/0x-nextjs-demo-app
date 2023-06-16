import { LitElement } from 'lit';
export declare class W3mWalletImage extends LitElement {
    static styles: any[];
    walletId: string;
    imageId?: string;
    imageUrl?: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-wallet-image': W3mWalletImage;
    }
}
