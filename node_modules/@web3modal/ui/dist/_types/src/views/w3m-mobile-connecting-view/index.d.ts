import { LitElement } from 'lit';
export declare class W3mMobileConnectingView extends LitElement {
    static styles: any[];
    isError: boolean;
    constructor();
    disconnectedCallback(): void;
    private readonly unwatchConnection?;
    private onFormatAndRedirect;
    private openMobileApp;
    private onGoToAppStore;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-mobile-connecting-view': W3mMobileConnectingView;
    }
}
