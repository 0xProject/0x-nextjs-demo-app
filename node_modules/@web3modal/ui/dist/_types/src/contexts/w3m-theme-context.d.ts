import { LitElement } from 'lit';
export declare class W3mThemeContext extends LitElement {
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeTheme?;
    private preloadThemeImages;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-theme-context': W3mThemeContext;
    }
}
