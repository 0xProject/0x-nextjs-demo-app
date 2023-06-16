import { h } from "preact";
import { Theme } from "../types";
declare type ConnectContentProps = {
    theme: Theme;
    version: string;
    sessionId: string;
    sessionSecret: string;
    linkAPIUrl: string;
    isConnected: boolean;
    isParentConnection: boolean;
    chainId: number;
    onCancel: (() => void) | null;
};
export declare function ConnectContent(props: ConnectContentProps): h.JSX.Element | null;
declare type ConnectItemProps = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick(): void;
    theme: Theme;
};
export declare function ConnectItem({ title, description, icon, selected, theme, onClick, }: ConnectItemProps): h.JSX.Element;
declare type WalletStepsProps = {
    theme: Theme;
};
export declare function CoinbaseWalletSteps({ theme }: WalletStepsProps): h.JSX.Element;
export declare function CoinbaseAppSteps({ theme }: WalletStepsProps): h.JSX.Element;
export {};
