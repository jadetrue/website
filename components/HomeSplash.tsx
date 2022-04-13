import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "./Button";

const HomeSplash = () => {
    return (
        <div className="container my-24 flex h-full flex-col-reverse justify-between py-8 md:my-56 md:flex-row md:items-center">
            <div className="mt-8 max-w-3xl px-3 text-left md:mt-0">
                <h1 className="mb-4 text-5xl font-bold">Hey, I'm Jade 👋</h1>
                <h2 className="text-4xl font-thin">
                    I’m a{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-normal text-transparent">
                        passionate
                    </span>{" "}
                    introvert who loves creating things with code.
                </h2>
                <div className="mt-20 flex flex-row flex-wrap items-center gap-8">
                    <div className="hidden h-1 w-40 items-center rounded-full bg-black align-middle md:flex" />
                    <Button
                        type="link"
                        href="https://github.com/jadetruexo"
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
                        href="https://twitter.com/jadetruexo"
                        styles="hover:animate-bounce"
                    >
                        <FontAwesomeIcon
                            icon={{prefix: "fab", iconName: "twitter"}}
                            className="text-5xl hover:animate-bounce"
                        />
                    </Button>
                    <Button
                        type="link"
                        href="mailto:jadetruexo@gmail.com"
                        styles=" hover:animate-bounce"
                    >
                        <FontAwesomeIcon
                            icon={{prefix: "fas", iconName: "at"}}
                            className="text-5xl hover:animate-bounce"
                        />
                    </Button>
                </div>
            </div>
            <div className="mx-3 h-48 w-48 rounded-full bg-[url('/images/me.jpeg')] bg-cover bg-center" />
        </div>
    );
};

export default HomeSplash;
