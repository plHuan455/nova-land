import { Story, Meta } from '@storybook/react';
import React from 'react';

import SustainableDevelopmentMenu from '.';

export default {
  title: 'Components/organisms/SustainableDevelopmentMenu',
  component: SustainableDevelopmentMenu,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <SustainableDevelopmentMenu />
);
