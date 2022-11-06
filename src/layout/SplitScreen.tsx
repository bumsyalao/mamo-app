import React from 'react';
import { SplitScreenProps } from './types';

export const SplitScreen = ({
    children
}: SplitScreenProps) => {

    const [left, right] = children;

    return (
        <section className="split-screen">
            {left}
            {right}
        </section>
    );
};

