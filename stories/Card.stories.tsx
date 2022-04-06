import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import Card from "../components/Card";

export default {
    title: "Components/Card",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "React & Typescript Beer App",
    subtitle: "An example project below",
    imageUrl: "",
    tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Python",
        "React",
        "NextJS",
    ],
    body: "A short description of what this project is and built with",
    link: "www.google.com",
};
