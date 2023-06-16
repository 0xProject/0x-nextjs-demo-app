import { LitElement } from 'lit';
export declare class W3mSearchInput extends LitElement {
    static styles: any[];
    onChange: () => null;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-search-input': W3mSearchInput;
    }
}
