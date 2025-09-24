import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["common"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    color: {
      control: { type: "color" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Click me", size: "md" },
};

export const Small: Story = {
  args: {
    label: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    label: "Large Button",
    size: "lg",
  },
};

export const Extra_Large: Story = {
  args: {
    label: "Extra Large Button",
    size: "xl",
  },
};
