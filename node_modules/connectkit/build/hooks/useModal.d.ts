import { useConnectCallbackProps } from './useConnectCallback';
type UseModalProps = {} & useConnectCallbackProps;
export declare const useModal: ({ onConnect, onDisconnect }?: UseModalProps) => {
    open: boolean;
    setOpen: (show: boolean) => void;
    openAbout: () => void;
    openOnboarding: () => void;
    openProfile: () => void;
    openSwitchNetworks: () => void;
    openSIWE: (triggerSIWE?: boolean) => void;
};
export {};
