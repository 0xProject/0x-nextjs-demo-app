import { LitElement } from 'lit';
export declare class W3mModalToast extends LitElement {
    static styles: any[];
    open: boolean;
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribe?;
    private timeout?;
    protected render(): import("lit-html").TemplateResult<1> | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal-toast': W3mModalToast;
    }
}
