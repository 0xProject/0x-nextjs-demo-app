import { LitElement } from 'lit';
export declare class W3mAccountContext extends LitElement {
    constructor();
    disconnectedCallback(): void;
    private readonly unwatchAccount?;
    private fetchProfile;
    private fetchBalance;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-account-context': W3mAccountContext;
    }
}
