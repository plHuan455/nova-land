import { Story, Meta } from '@storybook/react';
import React from 'react';

import NumberBlock from '.';

export default {
  title: 'Components/templates/OutStandingNumber/NumberBlock',
  component: NumberBlock,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <NumberBlock number="500" desc="Dự án" />
);
