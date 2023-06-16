import React from 'react';
type Hash = `0x${string}`;
export type CustomAvatarProps = {
    address?: Hash | undefined;
    ensName?: string | undefined;
    ensImage?: string;
    size: number;
    radius: number;
};
declare const Avatar: React.FC<{
    address?: Hash | undefined;
    name?: string | undefined;
    size?: number;
    radius?: number;
}>;
export default Avatar;
