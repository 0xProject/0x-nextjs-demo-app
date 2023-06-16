import { LitElement } from 'lit';
export declare class W3mAccountView extends LitElement {
    static styles: any[];
    private onDisconnect;
    private onCopyAddress;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-account-view': W3mAccountView;
    }
}
