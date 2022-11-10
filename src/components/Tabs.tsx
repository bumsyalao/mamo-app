import React, { useState } from 'react';
import { Button } from './Button';


type TabProps = {
    activeTab: string,
    label: string,
    onClick: (label: string) => void,
};

export const Tabs = ({ children }: any) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label as string);

    const onClickTabItem = (label: string) => {
        setActiveTab(label);
    }

    return (
        <div className="tabs">
            <div className="tab-headers">

                <ol className="tab-list">
                    {children.map((child: any) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <Button className="tab_btn" text="New invoice" type="primary" />
            </div>
            <div className="divider"></div>

            <div className="tab-content">
                {children.map((child: any) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    );

}

const Tab = (props: TabProps) => {
    const {
        activeTab,
        label,
    } = props;

    const onClick = () => {
        const { label, onClick } = props;
        onClick(label);
    }
    let className = 'tab-list-item';

    if (activeTab === label) {
        className += ' tab-list-active';
    }

    return (
        <li
            className={className}
            onClick={onClick}
        >
            {label}
        </li>
    );

}