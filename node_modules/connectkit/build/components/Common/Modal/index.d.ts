import React from 'react';
import { Variants } from 'framer-motion';
import { CustomTheme } from '../../../types';
export declare const contentVariants: Variants;
type ModalProps = {
    open?: boolean;
    pages: any;
    pageId: string;
    positionInside?: boolean;
    inline?: boolean;
    onClose?: () => void;
    onBack?: () => void;
    onInfo?: () => void;
    demo?: {
        theme: string;
        mode?: string;
        customTheme: CustomTheme;
    };
};
declare const Modal: React.FC<ModalProps>;
export declare const OrDivider: ({ children }: {
    children?: React.ReactNode;
}) => JSX.Element;
export default Modal;
