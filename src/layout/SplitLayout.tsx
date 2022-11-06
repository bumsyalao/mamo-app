import React from 'react';
import { SplitLayoutProps } from './types';

export const SplitLayout = ({
    children
}: SplitLayoutProps) => {

    const [left, right] = children;

    return (
        <section className="split-layout">
            {left}
            {right}
        </section>
    );
};

