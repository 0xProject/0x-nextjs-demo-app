import { LitElement } from 'lit';
export declare class W3mAccountButton extends LitElement {
    static styles: any[];
    constructor();
    balance?: 'hide' | 'show';
    avatar?: 'hide' | 'show';
    private onOpen;
    private accountTemplate;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-account-button': W3mAccountButton;
    }
}
