export interface IButton {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    color?: string;
    style?: {};
    icon?: {};
    text?: string;
}