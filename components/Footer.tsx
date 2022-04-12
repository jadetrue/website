import React from "react";
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faCodeBranch} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h3 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
                        Say hi!
                    </h3>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-4 py-4 text-xl md:flex-row md:gap-8">
                    <Button
                        type="link"
                        href="https://github.com/jadetruexo"
                        styles="hover:-translate-y-2"
                    >
                        <FontAwesomeIcon icon={faCodeBranch} />
                    </Button>
                    <Button
                        type="link"
                        href="/"
                        styles="hover:-translate-y-2"
                    ></Button>
                    <Button
                        type="link"
                        href="mailto:jadetruexo@gmail.com"
                        styles="hover:-translate-y-2"
                    >
                        <FontAwesomeIcon icon={faAt} />
                    </Button>
                </div>
            </div>
            <div className="flex justify-center pb-8">
                <p className="text-md">
                    Jade True © {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default Footer;
