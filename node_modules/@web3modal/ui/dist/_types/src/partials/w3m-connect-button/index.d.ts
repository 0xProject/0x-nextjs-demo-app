import { LitElement } from 'lit';
export declare class W3mConnectButton extends LitElement {
    static styles: any[];
    loading: boolean;
    label?: string | undefined;
    icon?: 'hide' | 'show';
    constructor();
    disconnectedCallback(): void;
    private readonly modalUnsub?;
    private iconTemplate;
    private onClick;
    private onConnect;
    private onDisconnect;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connect-button': W3mConnectButton;
    }
}
