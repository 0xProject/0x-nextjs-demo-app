import { LitElement } from 'lit';
export declare class W3mSelectNetworkView extends LitElement {
    static styles: any[];
    private connectedChains;
    private isUnsupportedChains;
    constructor();
    private getConnectedChainIds;
    private onSelectChain;
    private isUnsuportedChainId;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-select-network-view': W3mSelectNetworkView;
    }
}
