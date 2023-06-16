import { LitElement } from 'lit';
export declare class W3mNetworkImage extends LitElement {
    static styles: any[];
    chainId: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-network-image': W3mNetworkImage;
    }
}
