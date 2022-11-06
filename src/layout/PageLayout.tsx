import React from 'react';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="page-layout">
            {children}
        </section>
    );
};