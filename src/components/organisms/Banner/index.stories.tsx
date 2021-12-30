import { Story, Meta } from '@storybook/react';
import React from 'react';

import Banner from '.';

import img from 'assets/images/Banner/banner_home.png';

export default {
  title: 'Components/organisms/Banner',
  component: Banner,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Banner src={img} />
);
