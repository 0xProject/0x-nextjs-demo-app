import { LitElement } from 'lit';
export declare class W3mNetworkWaiting extends LitElement {
    static styles: any[];
    chainId?: string;
    isError: boolean;
    label: string;
    private svgLoaderTemplate;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-network-waiting': W3mNetworkWaiting;
    }
}
