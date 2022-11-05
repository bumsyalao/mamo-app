import React, { useState } from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarLinks } from './SidebarLinks';

export const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const openSidebar = () => setShowSidebar(true);
    const closeSidebar = () => setShowSidebar(false);

    return (
        <div className={`sidebar ${showSidebar ? 'showSidebar' : ''}`} >
            <SidebarHeader handleShowMenu={openSidebar} />
            <SidebarLinks onClose={closeSidebar} />
        </div>
    );
}