import { LitElement } from 'lit';
export declare class W3mTokenImage extends LitElement {
    static styles: any[];
    symbol?: string;
    protected render(): import("lit-html").TemplateResult<2> | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-token-image': W3mTokenImage;
    }
}
