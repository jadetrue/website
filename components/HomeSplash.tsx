import React from "react";
import SocialIcons from "./SocialIcons";
import Image from "next/image";

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
                <SocialIcons type="header" />
            </div>
            <div className="w-fit">
                <div className="relative mx-3 h-48 w-48">
                    <Image
                        className="rounded-full"
                        src={"/images/me.jpeg"}
                        objectFit="cover"
                        objectPosition="center"
                        layout="fill"
                        alt="Profile image of Jade"
                        priority
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeSplash;
