import { LitElement } from 'lit';
export declare class W3mNetworkButton extends LitElement {
    static styles: any[];
    onClick: () => void;
    name: string;
    chainId: string;
    unsupported: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-network-button': W3mNetworkButton;
    }
}
