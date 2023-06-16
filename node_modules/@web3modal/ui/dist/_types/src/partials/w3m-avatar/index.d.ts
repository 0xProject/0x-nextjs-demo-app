import { LitElement } from 'lit';
export declare class W3mAvatar extends LitElement {
    static styles: any[];
    private address?;
    private avatar?;
    private loading;
    size?: 'medium' | 'small';
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeAccount?;
    protected render(): import("lit-html").TemplateResult<1> | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-avatar': W3mAvatar;
    }
}
