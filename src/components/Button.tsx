import React from 'react';


export const Button = ({ type, text, link }: any) => {
    return (
        <button className={`button ${type}`}>
            {text}
        </button>
    );

}