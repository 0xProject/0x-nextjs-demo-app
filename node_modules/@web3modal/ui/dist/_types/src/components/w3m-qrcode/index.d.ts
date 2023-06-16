import { LitElement } from 'lit';
export declare class W3mQrCode extends LitElement {
    static styles: any[];
    uri: string;
    size: number;
    imageId?: string;
    walletId?: string;
    imageUrl?: string;
    private svgTemplate;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-qrcode': W3mQrCode;
    }
}
