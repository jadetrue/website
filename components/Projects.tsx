import React from "react";
import Card from "./Card";

const Projects = () => {
    return (
        <div className="container flex justify-end">
            <div className="mt-8 max-w-3xl px-3 text-right md:mt-0">
                <h1 className="mb-4 text-5xl font-bold">Projects</h1>
                <Card
                    title="Beer project"
                    subtitle="Summary to go here"
                    imageUrl="/images/beer-project-nology.png"
                    tags={["HTML", "CSS", "REACT"]}
                    body="More description leading to detail page"
                    link="/"
                />
            </div>
        </div>
    );
};

export default Projects;
