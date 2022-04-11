import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import Button from "../components/Button";

export default {
    title: "Components/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

export const Link: ComponentStory<typeof Button> = (args) => (
    <Button href="/" type="link">
        View projects
    </Button>
);

export const Btn: ComponentStory<typeof Button> = (args) => (
    <Button href="/" type="button">
        View projects
    </Button>
);
