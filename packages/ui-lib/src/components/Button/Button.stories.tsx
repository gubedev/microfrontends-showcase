import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const Primary = () => (
  <Button>
    <Button.Text>Primary</Button.Text>
  </Button>
);

export const Secondary = () => {
  return <Button secondary>Secondary</Button>;
};

export const Large = () => {
  return <Button large>Large</Button>;
};
