import { Story, Meta } from '@storybook/react';
import React from 'react';

import Button from '.';

import { iconList } from 'components/atoms/Icon';

export default {
  title: 'Components/atoms/Button',
  component: Button,
  argTypes: {
    modifiers: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline', 'with-icon'],
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
    iconName: {
      control: {
        type: 'select',
        options: iconList,
      },
    },
    handleClick: { action: 'clicked' },
  },
} as Meta;

export const normal: Story = ({
  modifiers, textButton, loading, handleClick, disabled, iconName,
}) => (
  <Button
    isLoading={loading}
    modifiers={modifiers}
    onClick={handleClick}
    disabled={disabled}
    iconName={iconName}
  >
    {textButton}
  </Button>
);
