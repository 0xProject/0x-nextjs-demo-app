import React from 'react';
import { ThemeContainer } from './styles';
import { All } from './../../../types';
type ThemedButtonProps = {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    autoSize?: boolean;
    duration?: number;
    style?: React.CSSProperties;
    onClick?: () => void;
};
export declare const PlaceholderButton: () => JSX.Element;
declare const ThemedButton: React.FC<ThemedButtonProps & All>;
export default ThemedButton;
export { ThemeContainer };
