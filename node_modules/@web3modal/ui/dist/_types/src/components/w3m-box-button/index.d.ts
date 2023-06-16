import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
export declare class W3mBoxButton extends LitElement {
    static styles: any[];
    icon?: TemplateResult<2>;
    label: string;
    onClick: () => void;
    protected render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-box-button': W3mBoxButton;
    }
}
