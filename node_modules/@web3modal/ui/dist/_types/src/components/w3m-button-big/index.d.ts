import { LitElement } from 'lit';
type Variant = 'primary' | 'secondary';
export declare class W3mButtonBig extends LitElement {
    static styles: any[];
    disabled?: boolean | undefined;
    variant?: Variant;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-button-big': W3mButtonBig;
    }
}
export {};
