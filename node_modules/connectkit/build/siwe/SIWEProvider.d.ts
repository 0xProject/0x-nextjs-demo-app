import { ReactNode } from 'react';
import { SIWEConfig, SIWESession } from './SIWEContext';
type Props = SIWEConfig & {
    children: ReactNode;
    onSignIn?: (data?: SIWESession) => void;
    onSignOut?: () => void;
};
export declare const SIWEProvider: ({ children, enabled, nonceRefetchInterval, sessionRefetchInterval, signOutOnDisconnect, signOutOnAccountChange, signOutOnNetworkChange, onSignIn, onSignOut, ...siweConfig }: Props) => JSX.Element;
export {};
