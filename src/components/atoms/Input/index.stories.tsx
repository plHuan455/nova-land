import { Story, Meta } from '@storybook/react';
import React from 'react';

import Input from '.';

export default {
  title: 'Components/atoms/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'number', 'email', 'password'],
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
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'Dummy text',
    },
    error: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const normal: Story = ({
  disabled, placeholder, error, type,
}) => (
  <Input
    name="test"
    autoComplete="off"
    placeholder={placeholder}
    disabled={disabled}
    error={error}
    type={type}
  />
);
