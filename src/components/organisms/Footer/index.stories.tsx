import { Story, Meta } from '@storybook/react';
import React from 'react';

import Footer from '.';

export default {
  title: 'Components/organisms/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Footer />
);
