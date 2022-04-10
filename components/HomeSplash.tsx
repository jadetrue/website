import React from "react";

const HomeSplash = () => {
    return (
        <div className="container my-24 flex h-full flex-col-reverse justify-between py-8 md:my-56 md:flex-row md:items-center">
            <div className="mt-8 max-w-3xl px-3 text-left md:mt-0">
                <h1 className="mb-4 text-5xl font-bold">Hey, I'm Jade 👋</h1>
                <h2 className="text-4xl">
                    I’m a{" "}
                    <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-normal text-transparent">
                        passionate
                    </span>{" "}
                    introvert who loves building things with React.
                </h2>
            </div>
            <div className="mx-3 h-48 w-48 rounded-full bg-pink-500 bg-[url('/images/me.jpeg')] bg-cover bg-center" />
        </div>
    );
};

export default HomeSplash;
