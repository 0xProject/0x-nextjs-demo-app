import { LitElement } from 'lit';
export declare class W3mBalance extends LitElement {
    static styles: any[];
    private symbol?;
    private amount?;
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeAccount?;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-balance': W3mBalance;
    }
}
