import React from "react";

export const Badges = ({ status }: { status: string }) => {

    return (
        <div className={`badges ${status.toLowerCase()}`}>
            {status}
        </div>

    )
}