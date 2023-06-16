import { LitElement } from 'lit';
export declare class W3mWebConnectingView extends LitElement {
    static styles: any[];
    isError: boolean;
    constructor();
    disconnectedCallback(): void;
    private readonly unwatchConnection?;
    private onFormatAndRedirect;
    private openWebWallet;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-web-connecting-view': W3mWebConnectingView;
    }
}
