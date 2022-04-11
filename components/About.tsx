import React from "react";

const About = () => {
    return (
        <div className="container my-24 h-full md:my-56">
            <div className="m-auto mt-8 max-w-3xl px-3 text-left md:mt-0">
                <h1 className="mb-4 text-5xl font-bold">About me</h1>
                <div className="text-2xl">
                    <p>
                        I am born and bred in Bristol and currently live in
                        North Somerset, with my fiance and little Daschshund,
                        Frankie. 🐕
                        <span className="italic">
                            100% based of the Frankfurter Sausages
                        </span>
                        . I'm a bit obsessed with all dogs and cute animals.{" "}
                    </p>
                    <br />
                    <p>
                        I'd describe myself as a curious, creative individual
                        that enjoy's a challenge.
                    </p>
                    <br />
                    <p>
                        Professionally, I am a Junior Frontend Developer at
                        Loopin 🦉 with a background of 4+ years experience in
                        Project Management.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
