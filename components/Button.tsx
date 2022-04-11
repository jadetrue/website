import React from "react";
import Link from "next/link";

export interface Props {
    type: "link" | "button";
    onClick?: (e) => {};
    href?: string;
}
// TODO: Rewrite this properly with correct typing
const Button: React.FC<Props> = ({type, onClick, href, children}) => {
    if (type === "link") {
        return (
            <Link href={href}>
                <a className="decoration-pink-200 underline-offset-4 hover:underline">
                    {children}
                </a>
            </Link>
        );
    }

    return (
        <button onClick={onClick} className="mediumBoxShadow rounded py-2 px-3">
            {children}
        </button>
    );
};

export default Button;
