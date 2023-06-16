import { StatusState, SIWESession } from './SIWEContext';
type HookProps = {
    isSignedIn: boolean;
    data?: SIWESession;
    status: StatusState;
    error?: Error | any;
    isRejected: boolean;
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    isReady: boolean;
    reset: () => void;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
};
type UseSIWEConfig = {
    onSignIn?: (data?: SIWESession) => void;
    onSignOut?: () => void;
};
export declare const useSIWE: ({ onSignIn, onSignOut }?: UseSIWEConfig) => HookProps | any;
export {};
