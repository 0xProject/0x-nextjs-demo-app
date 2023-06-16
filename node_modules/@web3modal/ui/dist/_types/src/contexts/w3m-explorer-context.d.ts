import { LitElement } from 'lit';
export declare class W3mExplorerContext extends LitElement {
    private preload;
    constructor();
    private loadImages;
    private preloadListings;
    private preloadCustomImages;
    private preloadData;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-explorer-context': W3mExplorerContext;
    }
}
