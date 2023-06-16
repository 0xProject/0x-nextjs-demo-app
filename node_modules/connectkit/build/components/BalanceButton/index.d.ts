import React from 'react';
import { All } from './../../types';
type BalanceProps = {
    hideIcon?: boolean;
    hideSymbol?: boolean;
};
export declare const Balance: React.FC<BalanceProps>;
declare const BalanceButton: React.FC<All & BalanceProps>;
export default BalanceButton;
