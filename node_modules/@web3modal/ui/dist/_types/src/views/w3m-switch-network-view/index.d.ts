import { LitElement } from 'lit';
export declare class W3mSwitchNetworkView extends LitElement {
    static styles: any[];
    private isError;
    constructor();
    private onSwitchNetwork;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-switch-network-view': W3mSwitchNetworkView;
    }
}
