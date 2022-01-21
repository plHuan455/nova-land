import { Story, Meta } from '@storybook/react';
import React from 'react';

import FilterGroup from '.';

export default {
  title: 'Components/organisms/FilterGroup',
  component: FilterGroup,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <FilterGroup />
);
