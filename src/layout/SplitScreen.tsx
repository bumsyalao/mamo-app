import React from 'react';
import { SplitScreenProps } from './types';

export const SplitScreen = ({
    left: Left,
    right: Right,
}: SplitScreenProps) => {
    return (
        <div className="split-screen">
            <div className="split-screen__left">
                <Left />
            </div>
            <div className="split-screen__right">
                <Right />
            </div>

        </div>
    );
};

