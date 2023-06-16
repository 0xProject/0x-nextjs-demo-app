import { LitElement } from 'lit';
export declare class W3mModal extends LitElement {
    static styles: any[];
    private open;
    private active;
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeModal?;
    private abortController?;
    private get overlayEl();
    private get containerEl();
    private toggleBodyScroll;
    private onCloseModal;
    private onOpenModalEvent;
    private onCloseModalEvent;
    private addKeyboardEvents;
    private removeKeyboardEvents;
    private managedModalContextTemplate;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal': W3mModal;
    }
}
