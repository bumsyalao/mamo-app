import React from 'react';

export const SidebarHeader = ({ handleShowMenu }: { handleShowMenu: () => void }) => {

    return (
        <>
            <div className="sidebar-header">
                <span
                    className="sidebar-header_icon hideOnDesktop"
                    onClick={handleShowMenu}
                >
                    <img src={"https://res.cloudinary.com/dcpfdxsly/image/upload/v1667685809/mamo-app/hambuger-menu.svg"} alt="hamburger-menu" />
                </span>
                <span className="sidebar-header_logo">
                    <img src={"https://res.cloudinary.com/dcpfdxsly/image/upload/v1667685809/mamo-app/mamo-pay-logo-business-white.svg"} alt="mamo-logo" />
                </span>
                <span className="sidebar-header_user hideOnDesktop">
                    <span className='user-avatar'>DO</span>
                </span>
            </div>
            {/* move this to a new file */}
            <button className="sidebar-header_btn hideOnMobile">
                Create Payment Link
            </button>
        </>
    );

};