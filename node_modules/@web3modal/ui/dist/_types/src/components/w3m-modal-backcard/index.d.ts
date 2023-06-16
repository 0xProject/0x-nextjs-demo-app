import { LitElement } from 'lit';
export declare class W3mModalBackcard extends LitElement {
    static styles: any[];
    private isHelp;
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeRouter?;
    private onHelp;
    private logoTemplate;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal-backcard': W3mModalBackcard;
    }
}
