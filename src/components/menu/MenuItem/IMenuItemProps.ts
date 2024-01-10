import React from "react"

export interface IMenuItemProps {
    text?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}