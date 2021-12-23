import { Story, Meta } from '@storybook/react';
import React from 'react';

import Button from '.';

export default {
  title: 'Components/atoms/Button',
  component: Button,
  argTypes: {
    modifiers: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline'],
      },
      defaultValue: 'primary',
    },
    textButton: {
      control: {
        type: 'text',
      },
      defaultValue: 'Click me',
    },
    loading: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
      defaultValue: false,
    },
  },
} as Meta;

export const normal: Story = ({ modifiers, textButton, loading }) => (
  <Button
    isLoading={loading}
    modifiers={modifiers}
  >
    {textButton}
  </Button>
);
