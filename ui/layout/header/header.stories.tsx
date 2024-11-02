// Header.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";

// Storybook metadata for the Header component
const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen", // This parameter makes the Header take up the full width
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Header story
export const Default: Story = {};
