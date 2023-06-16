/**
 *
 * TODO:
 * Move this into a structure to allow usage of WAGMI
 * or keep this file isolated for the other useful config data
 *
 */
import { ReactNode } from 'react';
declare let supportedConnectors: {
    id: string;
    name?: string;
    shortName?: string;
    logos: {
        default: ReactNode;
        transparent?: ReactNode;
        connectorButton?: ReactNode;
        qrCode?: ReactNode;
        appIcon?: ReactNode;
        mobile?: ReactNode;
    };
    logoBackground?: string;
    scannable?: boolean;
    extensions?: {
        [key: string]: string;
    };
    appUrls?: {
        [key: string]: string;
    };
    extensionIsInstalled?: () => any;
    defaultConnect?: () => any;
}[];
export default supportedConnectors;
