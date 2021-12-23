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
    disabled: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
      defaultValue: false,
    },
    handleClick: { action: 'clicked' },
  },
} as Meta;

export const normal: Story = ({
  modifiers, textButton, loading, handleClick, disabled,
}) => (
  <Button
    isLoading={loading}
    modifiers={modifiers}
    onClick={handleClick}
    disabled={disabled}
  >
    {textButton}
  </Button>
);
