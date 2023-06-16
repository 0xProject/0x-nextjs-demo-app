import type { AccountCtrlState } from '../types/controllerTypes';
export declare const AccountCtrl: {
    state: AccountCtrlState;
    subscribe(callback: (newState: AccountCtrlState) => void): () => void;
    getAccount(): void;
    fetchProfile(preloadAvatarFn: (avatar: string) => Promise<unknown>, profileAddress?: `0x${string}`): Promise<void>;
    fetchBalance(balanceAddress?: `0x${string}`): Promise<void>;
    setAddress(address: AccountCtrlState['address']): void;
    setIsConnected(isConnected: AccountCtrlState['isConnected']): void;
    resetBalance(): void;
    resetAccount(): void;
};
