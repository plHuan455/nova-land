import { Story, Meta } from '@storybook/react';
import React from 'react';

import Image from '.';

import bannerImg from 'assets/images/banner1.png';

export default {
  title: 'Components/atoms/Image',
  component: Image,
  argTypes: {
    srcImg: {
      control: {
        type: 'text',
      },
      defaultValue: bannerImg,
    },
    ratio: {
      control: {
        type: 'select',
        options: ['logo', '1x1', '4x3', '16x9', '1371x620'],
      },
      defaultValue: '1x1',
    },
    alt: {
      control: {
        type: 'text',
      },
      defaultValue: 'banner',
    },
    maxWidth: {
      control: {
        type: 'text',
      },
      defaultValue: '650px',
    },
  },
} as Meta;

export const normal: Story = ({
  srcImg, ratio, alt, maxWidth,
}) => (
  <div
    style={{
      maxWidth,
    }}
  >
    <Image src={srcImg} ratio={ratio} alt={alt} />
  </div>
);
