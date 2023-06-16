/// <reference types="react" />
type Logo = {
    testnet?: boolean;
};
export declare const Ethereum: ({ testnet, ...props }: Logo) => JSX.Element;
export declare const Polygon: ({ testnet, ...props }: Logo) => JSX.Element;
export declare const Optimism: ({ testnet, ...props }: Logo) => JSX.Element;
export declare const Arbitrum: ({ testnet, ...props }: Logo) => JSX.Element;
export declare const Telos: ({ testnet, ...props }: Logo) => JSX.Element;
declare const _default: {
    UnknownChain: ({ testnet, ...props }: Logo) => JSX.Element;
    Ethereum: ({ testnet, ...props }: Logo) => JSX.Element;
    Polygon: ({ testnet, ...props }: Logo) => JSX.Element;
    Optimism: ({ testnet, ...props }: Logo) => JSX.Element;
    Arbitrum: ({ testnet, ...props }: Logo) => JSX.Element;
    Aurora: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    Avalanche: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    Celo: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    Telos: ({ testnet, ...props }: Logo) => JSX.Element;
    Gnosis: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    Evmos: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    BinanceSmartChain: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    Foundry: ({ testnet, ...props }: Logo) => JSX.Element;
    Sepolia: ({ testnet, ...props }: Logo) => JSX.Element;
    Taraxa: ({ testnet, ...props }: Logo) => JSX.Element;
    zkSync: ({ testnet, ...props }: Logo) => JSX.Element;
    Flare: ({ testnet, ...props }: Logo) => JSX.Element;
    Canto: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    Fantom: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    Filecoin: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    Metis: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
    IoTeX: ({ testnet, ...props }: {
        testnet?: boolean | undefined;
    }) => JSX.Element;
};
export default _default;
