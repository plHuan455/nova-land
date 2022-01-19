import { Story, Meta } from '@storybook/react';
import React from 'react';

import HeroBanner from '.';

import img from 'assets/images/Banner/banner_1.png';

export default {
  title: 'Components/templates/HeroBanner',
  component: HeroBanner,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <HeroBanner
    list={new Array(5).fill({ src: img })}
  />
);
