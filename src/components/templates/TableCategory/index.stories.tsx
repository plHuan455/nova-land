import { Story, Meta } from '@storybook/react';
import React from 'react';

import TableCategory from '.';

export default {
  title: 'Components/templates/TableCategory',
  component: TableCategory,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <TableCategory />
);
