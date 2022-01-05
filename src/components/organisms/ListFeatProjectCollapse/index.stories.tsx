import { Story, Meta } from '@storybook/react';
import React from 'react';

import ListFeatProjectCollapse from '.';

export default {
  title: 'Components/organisms/ListFeatProjectCollapse',
  component: ListFeatProjectCollapse,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <ListFeatProjectCollapse list={[]} />
);
