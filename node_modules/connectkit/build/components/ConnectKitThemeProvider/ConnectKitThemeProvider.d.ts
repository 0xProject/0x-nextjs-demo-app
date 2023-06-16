import React from 'react';
import { CustomTheme, Mode, Theme } from './../../types';
type ContextValue = {
    theme?: Theme;
    mode?: Mode;
    customTheme?: CustomTheme;
};
type ConnectKitThemeProviderProps = {
    children?: React.ReactNode;
    theme?: Theme;
    mode?: Mode;
    customTheme?: CustomTheme;
};
export declare const ConnectKitThemeProvider: React.FC<ConnectKitThemeProviderProps>;
export declare const useThemeContext: () => ContextValue;
export {};
