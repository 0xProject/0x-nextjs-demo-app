import { LitElement } from 'lit';
export declare class W3mPlatformSelection extends LitElement {
    static styles: any[];
    isMobile: boolean;
    isInjected: boolean;
    isInjectedInstalled: boolean;
    isDesktop: boolean;
    isWeb: boolean;
    isRetry: boolean;
    private onMobile;
    private onInjected;
    private onDesktop;
    private onWeb;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-platform-selection': W3mPlatformSelection;
    }
}
