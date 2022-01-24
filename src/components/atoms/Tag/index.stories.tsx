import { Story, Meta } from '@storybook/react';
import React from 'react';

import Tag from '.';

export default {
  title: 'Components/atoms/Tag',
  component: Tag,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Tag>
    Aqua City
  </Tag>
);
