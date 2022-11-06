import React from 'react';
import { SplitScreen } from '../layout/SplitScreen';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const Dashboard = () => {
    return (
        <>
            <SplitScreen>
                <Sidebar />
                <Navbar />
            </SplitScreen>

        </>
    );
}


