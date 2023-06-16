/// <reference types="react" />
export type TLogLevel = 'debug' | 'info' | 'warn' | 'error' | 'none';
export type TOptions = {
    logLevel?: TLogLevel;
    maxFontSize?: number;
    minFontSize?: number;
    onFinish?: (fontSize: number) => void;
    onStart?: () => void;
    resolution?: number;
};
declare const useFitText: ({ logLevel: logLevelOption, maxFontSize, minFontSize, onFinish, onStart, resolution, }?: TOptions) => {
    fontSize: number;
    ref: import("react").RefObject<HTMLDivElement>;
};
export default useFitText;
