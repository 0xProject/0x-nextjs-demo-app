import { LitElement } from 'lit';
export declare class W3mNetworkContext extends LitElement {
    private activeChainId?;
    constructor();
    disconnectedCallback(): void;
    private readonly unwatchNetwork?;
    private fetchBalance;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-network-context': W3mNetworkContext;
    }
}
