import React from 'react';
export declare const states: {
    CONNECTED: string;
    CONNECTING: string;
    EXPIRING: string;
    FAILED: string;
    REJECTED: string;
    NOTCONNECTED: string;
    UNAVAILABLE: string;
};
declare const ConnectWithInjector: React.FC<{
    connectorId: string;
    switchConnectMethod: (id?: string) => void;
    forceState?: typeof states;
}>;
export default ConnectWithInjector;
