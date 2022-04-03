import { FC } from "react";
import { SButton } from './Button.style';


type Props = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    color?: string;
    style?: React.CSSProperties;
}

const Button : FC<Props> = ({text, onClick, disabled, color, style }) => {
    return(
        <SButton style={style} color={color} disabled={disabled} onClick={onClick}>{text}</SButton>
    );
}


export default Button;