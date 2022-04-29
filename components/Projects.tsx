import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import Card from "./Card";
import {faLink} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    return (
        <div className="container my-24 w-full md:my-56">
            <div className="mt-8 w-full max-w-3xl px-3 text-left md:mt-0 md:w-fit">
                <h1 className="mb-10 text-5xl font-bold">
                    What I've been working on
                </h1>
                <Card
                    title="Addict beer 🍺"
                    subtitle="An app that allows you to search and view beers and their key information."
                    imageUrl="/images/beer-project-nology.png"
                    tags={[
                        "Typescript",
                        "create-react-app",
                        "API",
                        "Tailwind CSS",
                    ]}
                    to="/project"
                    link="https://github.com/jadetrue/addict-beer-app"
                />
            </div>
        </div>
    );
};

export default Projects;
