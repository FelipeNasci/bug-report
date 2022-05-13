import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Widgets } from "../components/widgets";

export default {
  title: "App/Widgets",
  component: Widgets,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Widgets>;

const Template: ComponentStory<typeof Widgets> = (args) => (
  <Widgets {...args} />
);

export const Default = Template.bind({});
