import { LitElement } from 'lit';
export declare class W3mDesktopConnectingView extends LitElement {
    static styles: any[];
    isError: boolean;
    constructor();
    disconnectedCallback(): void;
    private readonly unwatchConnection?;
    private onFormatAndRedirect;
    private openDesktopApp;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-desktop-connecting-view': W3mDesktopConnectingView;
    }
}
