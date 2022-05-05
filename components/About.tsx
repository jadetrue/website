import React from "react";

const About = () => {
    return (
        <div
            className="container my-24 flex h-full flex-col md:my-40 md:flex-row"
            id="about"
        >
            <div className="flex flex-col items-center justify-center">
                <img
                    src="/images/about-image.png"
                    alt="Selfie of me and my partner. And dachshund sat on the beach."
                />
            </div>
            <div className="m-auto mt-8 max-w-3xl px-3 text-left md:mt-0">
                <h1 className="mb-4 text-5xl font-bold">About me</h1>
                <div className="text-2xl">
                    <p className="font-normal">
                        I am born and bred in Bristol and currently live in
                        North Somerset, with my fiance and little Dachshund,
                        Frankie. 🐕
                        <span className="font-bold italic">
                            100% named after Frankfurter Sausages
                        </span>
                        . I'm a bit obsessed with all dogs and cute animals.{" "}
                    </p>
                    <br />
                    <p className="font-normal">
                        I'd describe myself as a curious, creative individual
                        that enjoy's a challenge.
                    </p>
                    <br />
                    <p className="font-normal">
                        Professionally, I am a Junior Front-end Developer at{" "}
                        <a
                            href="https://www.letsloopin.com/"
                            target="_blank"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-normal text-transparent"
                        >
                            Loopin
                        </a>{" "}
                        🦉 with a background of 4+ years experience in Project
                        Management.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
