import { LitElement } from 'lit';
export declare class W3mHelpView extends LitElement {
    static styles: any[];
    private readonly learnUrl;
    private onGet;
    private onLearnMore;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-help-view': W3mHelpView;
    }
}
