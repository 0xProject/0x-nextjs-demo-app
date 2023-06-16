import type { OptionsCtrlState } from '../types/controllerTypes';
export declare const OptionsCtrl: {
    state: OptionsCtrlState;
    subscribe(callback: (newState: OptionsCtrlState) => void): () => void;
    setChains(chains?: OptionsCtrlState['chains']): void;
    setStandaloneChains(standaloneChains: OptionsCtrlState['standaloneChains']): void;
    setStandaloneUri(standaloneUri: OptionsCtrlState['standaloneUri']): void;
    getSelectedChain(): import("../types/controllerTypes").Chain | undefined;
    setSelectedChain(selectedChain: OptionsCtrlState['selectedChain']): void;
    setIsStandalone(isStandalone: OptionsCtrlState['isStandalone']): void;
    setIsCustomDesktop(isCustomDesktop: OptionsCtrlState['isCustomDesktop']): void;
    setIsCustomMobile(isCustomMobile: OptionsCtrlState['isCustomMobile']): void;
    setIsDataLoaded(isDataLoaded: OptionsCtrlState['isDataLoaded']): void;
    setIsUiLoaded(isUiLoaded: OptionsCtrlState['isUiLoaded']): void;
    setWalletConnectVersion(walletConnectVersion: OptionsCtrlState['walletConnectVersion']): void;
    setIsPreferInjected(isPreferInjected: OptionsCtrlState['isPreferInjected']): void;
    setIsAuth(isAuth: OptionsCtrlState['isAuth']): void;
};
