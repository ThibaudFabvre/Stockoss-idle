import { FC } from "react";

type Props = {
    name: string;
    value: string;
}

const Stat : FC<Props> = ({name, value}) => {
    return (
        <p>
            <span>{name}</span> : <span>{value}</span>
        </p>
    )
}


export default Stat;