import React from 'react';
import { links } from '../../util/mock-data';

export const SidebarLinks = () => {
    return (
        <div className="sidebar-links">
            <ul>
                {links.map((link, i) => (
                    <li key={i}>
                        <a
                            className={`item ${link.active && ' active'}`}

                        >
                            <span className="item_icon">
                                <img
                                    src={link.icon}
                                    alt="me"
                                    width="16"
                                    height="16"
                                    className="icon"
                                />
                            </span>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            {/* move to a new file */}
            <div className="page_footer">
                <div>&#9829; Powered by Mamo</div>
            </div>
        </div>
    );
};