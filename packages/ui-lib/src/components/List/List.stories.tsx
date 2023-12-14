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
    <List.Item key={1}>
      <List.Item.Text>Item 1</List.Item.Text>
      <List.Item.Image src="https://placehold.co/400" alt="Image 1" />
    </List.Item>
    <List.Item key={2}>
      <List.Item.Text>Item 1</List.Item.Text>
      <List.Item.Image src="https://placehold.co/400" alt="Image 1" />
    </List.Item>
    <List.Item key={3}>
      <List.Item.Text>Item 1</List.Item.Text>
      <List.Item.Image src="https://placehold.co/400" alt="Image 1" />
    </List.Item>
  </List>
);
