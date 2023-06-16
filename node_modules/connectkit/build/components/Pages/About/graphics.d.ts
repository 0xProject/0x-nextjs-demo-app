/// <reference types="react" />
import { EasingFunction } from 'framer-motion';
export type Easing = [number, number, number, number] | 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'circIn' | 'circOut' | 'circInOut' | 'backIn' | 'backOut' | 'backInOut' | 'anticipate' | EasingFunction;
type Slide = {
    layoutId?: string;
    duration: number;
    ease: Easing;
};
export declare const SlideOne: ({ layoutId }: Slide) => JSX.Element;
export declare const SlideTwo: ({ layoutId }: Slide) => JSX.Element;
export declare const SlideThree: ({ layoutId }: Slide) => JSX.Element;
export {};
