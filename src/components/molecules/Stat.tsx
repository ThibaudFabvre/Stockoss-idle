import { FC } from "react";

type Props = {
    name: string;
    value: string;
}

const Stat : FC<Props> = ({name, value, children}) => {
    return (
        <p>
            <span>{name}</span> : <span>{value}</span>
            {children}
        </p>
    )
}


export default Stat;