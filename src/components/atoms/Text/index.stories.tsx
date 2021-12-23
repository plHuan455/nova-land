import { Story, Meta } from '@storybook/react';
import React from 'react';

import Text from '.';

export default {
  title: 'Components/atoms/Text',
  component: Text,
  argTypes: {
    sizes: {
      control: {
        type: 'select',
        options: [
          '16x24',
        ],
      },
      defaultValue: 'mm',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'Dummy text',
    },
    colors: {
      control: {
        type: 'select',
        options: [
          'white',
          'raisinBlack',
        ],
      },
      defaultValue: 'spanishGreen',
    },
    fontweight: {
      control: {
        type: 'select',
        options: [
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '650',
          '700',
          '800',
          '900',
        ],
      },
      defaultValue: '400',
    },
    variants: {
      control: {
        type: 'check',
        options: ['uppercase', 'capitalize', 'underline', 'italic', 'center', 'justify'],
      },
    },
    type: {
      control: {
        type: 'radio',
        options: ['p', 'span', 'div'],
      },
      defaultValue: 'p',
    },
  },
} as Meta;

export const normal: Story = ({
  sizes,
  colors,
  variants,
  text,
  fontweight,
  type,
}) => (
  <Text type={type} modifiers={[colors, variants, sizes, fontweight]}>
    {text}
  </Text>
);
