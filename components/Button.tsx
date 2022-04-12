import React from "react";
import Link from "next/link";

export interface Props {
    type: "link" | "button";
    onClick?: (e) => {};
    href?: string;
    styles?: string;
}
// TODO: Rewrite this properly with correct typing
const Button: React.FC<Props> = ({type, onClick, href, styles, children}) => {
    if (type === "link") {
        return (
            <Link href={href}>
                <a
                    className={`decoration-pink-200 underline-offset-4 hover:underline ${styles}`}
                    target="_blank"
                >
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
