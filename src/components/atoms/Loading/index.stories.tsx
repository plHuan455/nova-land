import { Story, Meta } from '@storybook/react';
import React from 'react';

import Loading from '.';

export default {
  title: 'Components/atoms/Loading',
  component: Loading,
  argTypes: {
    isShow: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'fullScreen'],
      },
      defaultValue: false,
    },
  },
} as Meta;

export const normal: Story = ({ isShow, variant }) => (
  <Loading isShow={isShow} variant={variant} />
);
