import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "./Button";

export interface Props {
    type: "header" | "footer";
}

const SocialIcons: React.FC<Props> = ({type}) => {
    if (type === "header")
        return (
            <div className="mt-20 flex flex-row flex-wrap items-center gap-8">
                <div className="hidden h-1 w-40 items-center rounded-full bg-black align-middle md:flex" />
                <Button
                    type="link"
                    href="https://github.com/jadetrue"
                    styles="hover:animate-bounce"
                >
                    <FontAwesomeIcon
                        icon={{prefix: "fab", iconName: "github"}}
                        className="text-5xl hover:animate-bounce"
                    />
                </Button>
                <Button
                    type="link"
                    href="https://www.linkedin.com/in/jadetrue/"
                    styles="hover:animate-bounce"
                >
                    <FontAwesomeIcon
                        icon={{prefix: "fab", iconName: "linkedin"}}
                        className="text-5xl hover:animate-bounce"
                    />
                </Button>
                <Button
                    type="link"
                    href="https://twitter.com/jadetrue_"
                    styles="hover:animate-bounce"
                >
                    <FontAwesomeIcon
                        icon={{prefix: "fab", iconName: "twitter"}}
                        className="text-5xl hover:animate-bounce"
                    />
                </Button>
                <Button
                    type="link"
                    href="mailto:info@jadetrue.co.uk"
                    styles=" hover:animate-bounce"
                >
                    <FontAwesomeIcon
                        icon={{prefix: "fas", iconName: "at"}}
                        className="text-5xl hover:animate-bounce"
                    />
                </Button>
            </div>
        );

    return (
        <div className="flex w-full flex-row items-center justify-center gap-4 py-4 text-xl md:gap-8">
            <Button
                type="link"
                href="https://github.com/jadetrue"
                styles="hover:animate-bounce"
            >
                <FontAwesomeIcon icon={{prefix: "fab", iconName: "github"}} />
            </Button>
            <Button
                type="link"
                href="https://www.linkedin.com/in/jadetrue/"
                styles="hover:animate-bounce"
            >
                <FontAwesomeIcon icon={{prefix: "fab", iconName: "linkedin"}} />
            </Button>
            <Button
                type="link"
                href="https://twitter.com/jadetrue_"
                styles="hover:animate-bounce"
            >
                <FontAwesomeIcon icon={{prefix: "fab", iconName: "twitter"}} />
            </Button>
            <Button
                type="link"
                href="mailto:info@jadetrue.co.uk"
                styles=" hover:animate-bounce"
            >
                <FontAwesomeIcon icon={{prefix: "fas", iconName: "at"}} />
            </Button>
        </div>
    );
};

export default SocialIcons;
