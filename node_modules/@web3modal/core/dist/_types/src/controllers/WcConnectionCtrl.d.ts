import type { WcConnectionCtrlState } from '../types/controllerTypes';
export declare const WcConnectionCtrl: {
    state: WcConnectionCtrlState;
    subscribe(callback: (newState: WcConnectionCtrlState) => void): () => void;
    setPairingUri(pairingUri: WcConnectionCtrlState['pairingUri']): void;
    setPairingError(pairingError: WcConnectionCtrlState['pairingError']): void;
};
