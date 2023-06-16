import { LitElement } from 'lit';
export declare class W3mConnectorWaiting extends LitElement {
    static styles: any[];
    walletId?: string;
    imageId?: string;
    isError: boolean;
    isStale: boolean;
    label: string;
    private svgLoaderTemplate;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connector-waiting': W3mConnectorWaiting;
    }
}
