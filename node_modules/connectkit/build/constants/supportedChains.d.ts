import { ReactNode } from 'react';
type Chain = {
    id: number;
    name: string;
    logo: ReactNode;
};
declare const supportedChains: Chain[];
export default supportedChains;
