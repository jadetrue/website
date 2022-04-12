import React from "react";
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h3 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
                        Say hi!
                    </h3>
                </div>
                <div className="flex w-full flex-row items-center justify-center gap-4 py-4 text-xl md:gap-8">
                    <Button
                        type="link"
                        href="https://github.com/jadetruexo"
                        styles="hover:animate-bounce"
                    >
                        <FontAwesomeIcon
                            icon={{prefix: "fab", iconName: "github"}}
                        />
                    </Button>
                    <Button
                        type="link"
                        href="https://www.linkedin.com/in/jadetrue/"
                        styles="hover:animate-bounce"
                    >
                        <FontAwesomeIcon
                            icon={{prefix: "fab", iconName: "linkedin"}}
                        />
                    </Button>
                    <Button
                        type="link"
                        href="https://twitter.com/jadetruexo"
                        styles="hover:animate-bounce"
                    >
                        <FontAwesomeIcon
                            icon={{prefix: "fab", iconName: "twitter"}}
                        />
                    </Button>
                    <Button
                        type="link"
                        href="mailto:jadetruexo@gmail.com"
                        styles=" hover:animate-bounce"
                    >
                        <FontAwesomeIcon
                            icon={{prefix: "fas", iconName: "at"}}
                        />
                    </Button>
                </div>
            </div>
            <div className="flex justify-center pb-8">
                <p className="text-md">
                    Jade True © {new Date().getUTCFullYear()}
                </p>
            </div>
        </div>
    );
};

export default Footer;
