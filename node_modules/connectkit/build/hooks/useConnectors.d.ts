import { Connector } from 'wagmi';
export declare function useConnectors(): Connector<any, any>[];
export declare function useConnector(id: string): Connector<any, any>;
export declare function useInjectedConnector(): Connector<any, any>;
export declare function useWalletConnectConnector(): Connector<any, any>;
export declare function useCoinbaseWalletConnector(): Connector<any, any>;
export declare function useMetaMaskConnector(): Connector<any, any>;
