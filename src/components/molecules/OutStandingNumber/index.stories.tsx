import { Story, Meta } from '@storybook/react';
import React from 'react';

import OutStandingNumber from '.';

export default {
  title: 'Components/molecules/OutStandingNumber',
  component: OutStandingNumber,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <OutStandingNumber number="500" desc="Dự án" />
);
