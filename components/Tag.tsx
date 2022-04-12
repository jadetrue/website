import React from "react";

export interface Props {
    text: string;
    styles?: string;
}

const Tag: React.FC<Props> = ({text, styles}) => {
    return (
        <div
            className={`flex w-fit flex-row rounded bg-cyan-500 text-sm font-light text-white hover:cursor-default ${styles}`}
        >
            {text}
        </div>
    );
};

export default Tag;
