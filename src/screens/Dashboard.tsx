import React from 'react';
import { SplitLayout } from '../layout/SplitLayout';
import { PageLayout } from '../layout/PageLayout';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Breadcrumb } from '../components/Breadcrumb';
import { TextBanner } from '../components/TextBanner';
import { TableWrapper } from '../components/Table/TableWrapper';

export const Dashboard = () => {
    return (
        <>
            <SplitLayout>
                <Sidebar />
                <PageLayout>
                    <Breadcrumb />
                    <TextBanner />
                    <TableWrapper />
                </PageLayout>
            </SplitLayout>

        </>
    );
}


