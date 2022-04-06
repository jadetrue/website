import React from "react";

const HomeSplash = () => {
    return (
        <div className="container my-24 flex h-full flex-col-reverse justify-evenly py-8 md:my-36 md:flex-row md:items-center">
            <div className="mt-8 max-w-3xl px-3 text-left md:mt-0">
                <h1 className="mb-4 text-5xl font-bold">Hey, I'm Jade 👋</h1>
                <h2 className="text-4xl">
                    I’m a passionate introvert who loves building things with
                    React.
                </h2>
            </div>
            <div className="mx-3 h-48 w-48 rounded-full bg-pink-500"></div>
        </div>
    );
};

export default HomeSplash;
