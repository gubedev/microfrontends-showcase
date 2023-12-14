import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";
import React from "react";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
};

export default meta;

export const Primary = () => (
  <List>
    <List.Item key={1}>Item 1</List.Item>
    <List.Item key={2}>Item 2</List.Item>
    <List.Item key={3}>Item 3</List.Item>
  </List>
);
