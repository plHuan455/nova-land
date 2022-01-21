import { Story, Meta } from '@storybook/react';
import React from 'react';

import FilterRecuitment from '.';

export default {
  title: 'Components/organisms/FilterRecuitment',
  component: FilterRecuitment,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <FilterRecuitment />
);
