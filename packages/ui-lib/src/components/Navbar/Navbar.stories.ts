import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
