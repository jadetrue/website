import React from "react";
import Button from "./Button";

const Footer = () => {
    return (
        <div>
            <div className="flex w-full flex-col items-center justify-center gap-4 py-4 font-normal md:flex-row md:gap-8">
                <Button type="link" href="/">
                    github
                </Button>
                <Button type="link" href="/">
                    linkedin
                </Button>
                <Button type="link" href="/">
                    email
                </Button>
            </div>
            <div className="flex justify-center pb-8">
                <p className="text-sm">
                    Jade True © {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default Footer;
