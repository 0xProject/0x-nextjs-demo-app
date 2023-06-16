import { LitElement } from 'lit';
export declare class W3mAddressText extends LitElement {
    static styles: any[];
    private address?;
    private name?;
    private loading;
    variant?: 'button' | 'modal';
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeAccount?;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-address-text': W3mAddressText;
    }
}
