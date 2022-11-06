import React from 'react';
import { SplitLayout } from '../layout/SplitLayout';
import { PageLayout } from '../layout/PageLayout';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Breadcrumb } from '../components/Breadcrumb';
import { TextBanner } from '../components/TextBanner';

export const Dashboard = () => {
    return (
        <>
            <SplitLayout>
                <Sidebar />
                <PageLayout>
                    <Breadcrumb />
                    <TextBanner />
                </PageLayout>
            </SplitLayout>

        </>
    );
}


