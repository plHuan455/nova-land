import { Story, Meta } from '@storybook/react';
import React from 'react';

import EcoSystems from '.';

export default {
  title: 'Components/templates/EcoSystems',
  component: EcoSystems,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <EcoSystems />
);
