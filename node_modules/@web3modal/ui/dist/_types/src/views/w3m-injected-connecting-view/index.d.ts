import { LitElement } from 'lit';
export declare class W3mInjectedConnectingView extends LitElement {
    static styles: any[];
    private isError;
    constructor();
    private readonly connector;
    private openInjectedApp;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-injected-connecting-view': W3mInjectedConnectingView;
    }
}
