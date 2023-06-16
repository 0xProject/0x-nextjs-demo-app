import { LitElement } from 'lit';
export declare class W3mCoreButton extends LitElement {
    isConnected: boolean;
    label?: string | undefined;
    icon?: 'hide' | 'show';
    avatar?: 'hide' | 'show';
    balance?: 'hide' | 'show';
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeAccount?;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-core-button': W3mCoreButton;
    }
}
