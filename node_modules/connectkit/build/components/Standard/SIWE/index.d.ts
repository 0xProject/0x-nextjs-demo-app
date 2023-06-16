/// <reference types="react" />
import { SIWESession } from './../../../siwe';
type ButtonProps = {
    showSignOutButton?: boolean;
    onSignIn?: (data?: SIWESession) => void;
    onSignOut?: () => void;
};
export declare const SIWEButton: React.FC<ButtonProps>;
export declare const SIWEButtonComponent: React.FC<ButtonProps>;
export default SIWEButtonComponent;
