import QRCodeUtil from 'qrcode';
import React from 'react';
type Props = {
    ecl?: QRCodeUtil.QRCodeErrorCorrectionLevel;
    size?: number;
    uri: string;
    clearArea?: boolean;
    image?: React.ReactNode;
    imageBackground?: string;
};
export declare function QRCode({ ecl, size: sizeProp, uri, clearArea, image, imageBackground, }: Props): JSX.Element;
export {};
