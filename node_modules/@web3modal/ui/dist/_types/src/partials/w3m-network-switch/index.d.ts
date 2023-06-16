import { LitElement } from 'lit';
export declare class W3mNetworkSwitch extends LitElement {
    static styles: any[];
    private chainId?;
    private label?;
    private wrongNetwork;
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeNetwork?;
    private onSetChainData;
    private onClick;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-network-switch': W3mNetworkSwitch;
    }
}
