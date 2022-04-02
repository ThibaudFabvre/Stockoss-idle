import React, { FC } from "react";


type Props = {
    header: string;
    children: React.ReactNode;
}

const List: FC<Props> = ({header, children }) => {
    return(
        <div>
            <h3>{header}</h3>
            {children}
        </div>
    );
}

export default List;