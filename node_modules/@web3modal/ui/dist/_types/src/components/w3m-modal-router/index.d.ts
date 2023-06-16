import type { RouterView } from '@web3modal/core';
import { LitElement } from 'lit';
export declare class W3mModalRouter extends LitElement {
    static styles: any[];
    view: RouterView;
    prevView: RouterView;
    constructor();
    firstUpdated(): void;
    disconnectedCallback(): void;
    private readonly unsubscribe?;
    private oldHeight;
    private resizeObserver?;
    private get routerEl();
    private get contentEl();
    private viewTemplate;
    private onChangeRoute;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal-router': W3mModalRouter;
    }
}
