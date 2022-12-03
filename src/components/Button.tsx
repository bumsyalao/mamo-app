import React from 'react';
import { useNavigate } from "react-router-dom";

type ButtonProps = {
    text?: string;
    type?: string;
    link?: string;
    className?: string;
    onClick?: () => void;
};
export const Button = ({ type = '', text = '', link = '' }: ButtonProps) => {
    const navigate = useNavigate();
    return (
        <button className={`button ${type}`} onClick={() => navigate(link)}>
            {text}
        </button>
    );

}