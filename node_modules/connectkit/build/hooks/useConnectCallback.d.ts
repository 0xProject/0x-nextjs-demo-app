export type useConnectCallbackProps = {
    onConnect?: ({ address, connectorId, }: {
        address?: string;
        connectorId?: string;
    }) => void;
    onDisconnect?: () => void;
};
export declare const useConnectCallback: ({ onConnect, onDisconnect, }: useConnectCallbackProps) => void;
