import React, { FC } from "react";
import { SHeader } from "./List.style";


type Props = {
    header: string;
    children: React.ReactNode;
}

const List: FC<Props> = ({header, children }) => {
    return(
        <div>
            <SHeader>{header}</SHeader>
            {children}
        </div>
    );
}

export default List;