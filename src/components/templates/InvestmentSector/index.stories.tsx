import { Story, Meta } from '@storybook/react';
import React from 'react';

import InvestmentSector from '.';

export default {
  title: 'Components/templates/InvestmentSector',
  component: InvestmentSector,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <InvestmentSector />
);
