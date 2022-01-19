import { Story, Meta } from '@storybook/react';
import React from 'react';

import Section from '.';

export default {
  title: 'Components/templates/Section',
  component: Section,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Section />
);
