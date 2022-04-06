import React from "react";

export interface Props {
    text: string;
    styles?: string;
}

const Tag: React.FC<Props> = ({text, styles}) => {
    return (
        <div
            className={`bg-pink-200 w-fit rounded hover:cursor-default text-sm font-light flex flex-row ${styles}`}
        >
            {text}
        </div>
    );
};

export default Tag;
