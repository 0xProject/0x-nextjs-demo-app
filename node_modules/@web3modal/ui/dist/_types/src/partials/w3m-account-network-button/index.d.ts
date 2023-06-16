import { LitElement } from 'lit';
export declare class W3mAccountNetworkButton extends LitElement {
    static styles: any[];
    private chainId?;
    private label?;
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeNetwork?;
    private onClick;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-account-network-button': W3mAccountNetworkButton;
    }
}
