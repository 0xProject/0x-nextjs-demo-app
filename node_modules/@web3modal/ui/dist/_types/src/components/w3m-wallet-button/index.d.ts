import { LitElement } from 'lit';
export declare class W3mWalletButton extends LitElement {
    static styles: any[];
    onClick: () => void;
    name: string;
    walletId: string;
    label?: string;
    imageId?: string;
    installed?: boolean | undefined;
    recent?: boolean | undefined;
    private sublabelTemplate;
    private handleClick;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-wallet-button': W3mWalletButton;
    }
}
